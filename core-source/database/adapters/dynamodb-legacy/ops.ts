import {
  DynamoDBClient,
  QueryCommand,
  GetItemCommand,
  ScanCommand,
  GetItemCommandInput,
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommandInput } from "@aws-sdk/lib-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

import { SortKeyOperation, Table, Filters } from "../../types";

const db = new DynamoDBClient({
  region: "ap-southeast-2",
});

const client = DynamoDBDocumentClient.from(db);

// Function to handle reserved keywords
const RESERVED_KEYWORDS = ["name", "status", "state"];

function sanitizeField(field: string) {
  if (RESERVED_KEYWORDS.includes(field)) {
    return `#${field}`;
  }
  return field;
}

function tableName(table: Table) {
  return table._meta.table + process.env.DYNAMODB_TABLE_SUFFIX;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function get<T = any>(
  index: Table,
  query: { PK: string, SORT?: string, SORT2?: string, OP?: SortKeyOperation } | string,
  projectedFields?: string[]
): Promise<T | null> {
  const params = constructGetParams(index, query, projectedFields);
  const data = await client.send(new GetItemCommand(params));
  if (!data.Item) {
    return null;
  }
  return unmarshall(data.Item) as Promise<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function query<T = any>(
  index: Table,
  query: { PK: string, SORT?: string, SORT2?: string, OP?: SortKeyOperation } | string,
  projectedFields?: string[],
  filters?: Filters
): Promise<T[]> {
  const params = constructQueryParams(index, query, projectedFields, filters);
  const data = await client.send(new QueryCommand(params));
  return data.Items?.map(item => unmarshall(item)) as T[] || [];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function scan<T = any>(
  index: Table,
  query?: string,
  projectedFields?: string[],
  filters?: Filters
): Promise<T[]> {
  const params = constructQueryParams(index, query, projectedFields, filters);
  const data = await client.send(new ScanCommand(params));
  return data.Items?.map(item => unmarshall(item)) as T[] || [];
}

// Function to construct GetItemCommand params
function constructGetParams(
  index: Table,
  query: { PK: string, SORT?: string } | string,
  projectedFields?: string[]
) {
  if (typeof query === "string") {
    query = { PK: query };
  }

  // Create params for GetItemCommand
  const params: GetItemCommandInput = {
    TableName: tableName(index),
    Key: marshall({
      [index._meta.primaryKey]: query.PK,
      ...(query.SORT && index._meta.sortKey && { [index._meta.sortKey]: query.SORT }),
    }),
  };

  // Add projected fields if provided
  if (projectedFields && projectedFields.length > 0) {
    params.ProjectionExpression = projectedFields.map(sanitizeField).join(", ");
    params.ExpressionAttributeNames = params.ExpressionAttributeNames || {};
    projectedFields.forEach((field) => {
      const sanitizedField = sanitizeField(field);
      if (sanitizedField !== field) {
        params.ExpressionAttributeNames[sanitizedField] = field;  // Only add to ExpressionAttributeNames if aliasing is needed
      }
    });
  }

  // Remove ExpressionAttributeNames if it's empty
  if (Object.keys(params.ExpressionAttributeNames || {}).length === 0) {
    delete params.ExpressionAttributeNames;
  }

  return params;
}

// Function to construct QueryCommand/ScanCommand params
function constructQueryParams(
  index: Table,
  query?: { PK: string, SORT?: string, SORT2?: string, OP?: SortKeyOperation } | string,
  projectedFields?: string[],
  filters?: Filters
) {
  if (!index || !index._meta || !index._meta.primaryKey) {
    throw new Error("Invalid index configuration");
  }

  if (typeof query === "string") {
    query = { PK: query };
  }

  // Create base params for DynamoDB query
  const params: QueryCommandInput = {
    TableName: tableName(index)
  };

  // Add KeyConditionExpression
  if (index._meta.index) {
    params.IndexName = index._meta.index;
  }

  if (query?.PK) {
    params.KeyConditionExpression = `${index._meta.primaryKey} = :p`;
    if (!params.ExpressionAttributeValues) params.ExpressionAttributeValues = {};
    params.ExpressionAttributeValues[":p"] = query.PK;
  }

  // Define sort key operation logic
  if (query && query.SORT) {
    if (!index._meta.sortKey) {
      throw new Error("Index does not have a sort key");
    }

    const operation = query.OP || SortKeyOperation.EQUAL;

    const sortKeyExpressions: { [key in SortKeyOperation]: string } = {
      [SortKeyOperation.EQUAL]: `${index._meta.sortKey} = :s`,
      [SortKeyOperation.BEGINS_WITH]: `begins_with(${index._meta.sortKey}, :s)`,
      [SortKeyOperation.LESS_THAN]: `${index._meta.sortKey} < :s`,
      [SortKeyOperation.LESS_THAN_OR_EQUAL]: `${index._meta.sortKey} <= :s`,
      [SortKeyOperation.GREATER_THAN]: `${index._meta.sortKey} > :s`,
      [SortKeyOperation.GREATER_THAN_OR_EQUAL]: `${index._meta.sortKey} >= :s`,
      [SortKeyOperation.BETWEEN]: `${index._meta.sortKey} BETWEEN :s AND :s2`,
    };

    params.KeyConditionExpression += ` AND ${sortKeyExpressions[operation]}`;
    params.ExpressionAttributeValues[":s"] = query.SORT;

    if (operation === SortKeyOperation.BETWEEN && query.SORT2) {
      params.ExpressionAttributeValues[":s2"] = query.SORT2;
    } else if (operation === SortKeyOperation.BETWEEN && !query.SORT2) {
      throw new Error("BETWEEN operation requires a second sort key value (SORT2)");
    }
  }

  // Add projected fields if provided
  if (projectedFields && projectedFields.length > 0) {
    params.ProjectionExpression = projectedFields.map(sanitizeField).join(", ");

    // Handle reserved keywords in ProjectionExpression
    params.ExpressionAttributeNames = params.ExpressionAttributeNames || {};
    projectedFields.forEach((field) => {
      const sanitizedField = sanitizeField(field);
      if (sanitizedField !== field) {
        params.ExpressionAttributeNames[sanitizedField] = field; // Only alias fields when necessary
      }
    });
  }

  // Add filtering logic if filters are provided
  if (filters) {
    const filterExpressions: string[] = [];
    Object.entries(filters).forEach(([key, value], index) => {
      if (!value && value !== 0 && value !== false) return;

      if (!params.ExpressionAttributeNames) params.ExpressionAttributeNames = {};
      if (!params.ExpressionAttributeValues) params.ExpressionAttributeValues = {};

      const sanitizedKey = sanitizeField(key);
      const filterPlaceholder = `:f${index}`;
      filterExpressions.push(`${sanitizedKey} = ${filterPlaceholder}`);

      // Assign filter value to ExpressionAttributeValues
      params.ExpressionAttributeValues[filterPlaceholder] = value;

      // If key needs sanitizing, add it to ExpressionAttributeNames
      if (sanitizedKey !== key) {
        params.ExpressionAttributeNames[sanitizedKey] = key;
      }
    });

    if (filterExpressions.length > 0) {
      params.FilterExpression = filterExpressions.join(" AND ");
    }
  }

  // Remove ExpressionAttributeNames if it's empty
  if (Object.keys(params.ExpressionAttributeNames || {}).length === 0) {
    delete params.ExpressionAttributeNames;
  }

  // Only marshal ExpressionAttributeValues if not empty
  if (params.ExpressionAttributeValues && Object.keys(params.ExpressionAttributeValues).length > 0) {
    params.ExpressionAttributeValues = marshall(params.ExpressionAttributeValues);
  }

  return params;
}
