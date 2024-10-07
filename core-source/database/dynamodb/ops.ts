import {
  DynamoDBClient,
  GetItemCommand,
  GetItemCommandInput,
  ScanCommand,
  QueryCommand,
  PutItemCommand,
  UpdateItemCommand,
  PutItemCommandInput,
  UpdateItemCommandInput,
  DeleteItemCommand,
  DeleteItemCommandInput
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommandInput } from "@aws-sdk/lib-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { SortKeyOperation, Filters, QueryInput, GetInput, Table } from "../types";
import { PopulatedFields } from "@labs/be.database/types";

const db = new DynamoDBClient({
  region: "ap-southeast-2",
});

const client = DynamoDBDocumentClient.from(db);

// Function to handle reserved keywords
const RESERVED_KEYWORDS = ["name", "status", "state", "type"];

function sanitizeField(field: string) {
  if (RESERVED_KEYWORDS.includes(field)) {
    return `#${field}`;
  }
  return field;
}

function tableName(table: Table) {
  if (table._meta.legacy) {
    return table._meta.table + process.env.DYNAMODB_LEGACY_TABLE_SUFFIX;
  }
  return table._meta.table;
}

export async function dynamoPut<T>(
  index: Table,
  item: T & PopulatedFields
): Promise<void> {
  const params: PutItemCommandInput = {
    TableName: tableName(index),
    Item: marshall(item, { convertClassInstanceToMap: true }),
  };
  await client.send(new PutItemCommand(params));
}

export async function dynamoUpdate<T>(
  index: Table,
  key: string | GetInput,
  updates: Partial<T> & PopulatedFields
): Promise<void> {
  // Allow `key` to be passed as a string for simple PK without SK
  const primaryKey = typeof key === "string" ? { PK: key } : key;

  const updateExpression = constructUpdateExpression(updates);
  const expressionAttributeValues = Object.fromEntries(
    Object.entries(updates).map(([key, value]) => [`:${key}`, value])
  );

  const params: UpdateItemCommandInput = {
    TableName: tableName(index),
    Key: marshall({
      [index._meta.primaryKey]: primaryKey.PK,
      ...(primaryKey.SK && index._meta.sortKey && { [index._meta.sortKey]: primaryKey.SK }),
    }),
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: marshall(expressionAttributeValues),
    ReturnValues: "UPDATED_NEW",
  };

  await client.send(new UpdateItemCommand(params));
}

export async function dynamoGet<T extends object, K extends keyof T = keyof T>(
  index: Table,
  query: GetInput | string,
  projectedFields?: K[]
): Promise<Pick<T, K> & PopulatedFields | undefined> {
  const params = constructGetParams(index, query, projectedFields as string[]); // Cast for runtime
  const data = await client.send(new GetItemCommand(params));

  if (!data.Item) {
    return;
  }

  return unmarshall(data.Item) as Pick<T, K> & PopulatedFields;
}

export async function dynamoQuery<
T extends object, 
K extends keyof (T & PopulatedFields) = keyof (T & PopulatedFields)
>(
  index: Table,
  query: QueryInput | string,
  projectedFields?: K[],
  filters?: Filters
): Promise<Pick<T & PopulatedFields, K>[]> {
  const params = constructQueryParams(index, query, projectedFields as string[], filters);
  const data = await client.send(new QueryCommand(params));

  // If no items are found, return an empty array
  if (!data.Items) {
    return [];
  }

  // If no projected fields are provided, return the entire items
  if (!projectedFields || projectedFields.length === 0) {
    return data.Items.map(item => unmarshall(item) as T & PopulatedFields);
  }

  // Otherwise, return only the projected fields
  return data.Items.map(item => {
    const unmarshalledItem = unmarshall(item) as T;
    const result: Partial<T & PopulatedFields> = {};
    for (const field of projectedFields) {
      if (field in unmarshalledItem) {
        result[field] = unmarshalledItem[field];
      }
    }
    return result as Pick<T & PopulatedFields, K>;
  });
}


export async function dynamoScan<T extends object, K extends keyof T = keyof T>(
  index: Table,
  query?: string,
  projectedFields?: K[],
  filters?: Filters
): Promise<Pick<T, K>[]> {
  const params = constructQueryParams(index, query, projectedFields as string[], filters);
  const data = await client.send(new ScanCommand(params));

  // If no items are found, return an empty array
  if (!data.Items) {
    return [];
  }

  // If no projected fields are provided, return the entire items
  if (!projectedFields || projectedFields.length === 0) {
    return data.Items.map(item => unmarshall(item) as T);
  }

  // Otherwise, return only the projected fields
  return data.Items.map(item => {
    const unmarshalledItem = unmarshall(item) as T;
    const result: Partial<T> = {};
    for (const field of projectedFields) {
      if (field in unmarshalledItem) {
        result[field] = unmarshalledItem[field];
      }
    }
    return result as Pick<T, K>;
  });
}

export async function dynamoDelete(
  index: Table,
  key: string | GetInput
): Promise<void> {
  // Allow `key` to be passed as a string for simple PK without SORT key
  const primaryKey = typeof key === "string" ? { PK: key } : key;

  const params: DeleteItemCommandInput = {
    TableName: tableName(index),
    Key: marshall({
      [index._meta.primaryKey]: primaryKey.PK,
      ...(primaryKey.SK && index._meta.sortKey && { [index._meta.sortKey]: primaryKey.SK }),
    }),
  };

  await client.send(new DeleteItemCommand(params));
}

// Function to construct GetItemCommand params
function constructGetParams(
  index: Table,
  query: GetInput | string,
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
      ...(query.SK && index._meta.sortKey && { [index._meta.sortKey]: query.SK }),
    }),
  };

  // Add projected fields if provided
  if (projectedFields && projectedFields.length > 0) {
    params.ProjectionExpression = projectedFields.map(sanitizeField).join(", ");
    params.ExpressionAttributeNames = params.ExpressionAttributeNames || {};
    projectedFields.forEach((field) => {
      const sanitizedField = sanitizeField(field);
      if (sanitizedField !== field && params.ExpressionAttributeNames) {
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

function constructUpdateExpression<T>(updates: Partial<T>): string {
  const updateFields = Object.keys(updates).map(field => sanitizeField(field));
  const expressions = updateFields.map(field => `${field} = :${field}`);
  return `SET ${expressions.join(", ")}`;
}

// Function to construct QueryCommand/ScanCommand params
function constructQueryParams(
  index: Table,
  query?: QueryInput | string,
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
  if (query && query.SK) {
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
    if (!params.ExpressionAttributeValues) params.ExpressionAttributeValues = {};
    params.ExpressionAttributeValues[":s"] = query.SK;

    if (operation === SortKeyOperation.BETWEEN && query.SK_END) {
      params.ExpressionAttributeValues[":s2"] = query.SK_END;
    } else if (operation === SortKeyOperation.BETWEEN && !query.SK_END) {
      throw new Error("BETWEEN operation requires a second sort key value (SK2)");
    }
  }

  // Add projected fields if provided
  if (projectedFields && projectedFields.length > 0) {
    params.ProjectionExpression = projectedFields.map(sanitizeField).join(", ");

    // Handle reserved keywords in ProjectionExpression
    params.ExpressionAttributeNames = params.ExpressionAttributeNames || {};
    projectedFields.forEach((field) => {
      const sanitizedField = sanitizeField(field);
      if (sanitizedField !== field && params.ExpressionAttributeNames) {
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
