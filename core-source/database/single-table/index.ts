import { generateId } from "@labs/id";
import { AppFields, Index, PopulatedFields, schemaNameLookup, SchemaType } from "./types";
import { QueryInput, SortKeyOperation } from "@labs/core.database/types";
import { LabsPlatform } from "@labs/core.database/dynamodb/tables";
import { Table } from "@labs/core.database/types";
import { dynamoGet, dynamoQuery } from "../dynamodb/ops";
import { z } from "zod";

export function populateKeys<T>(schema, item: T): { index: Table | undefined, item: (T & PopulatedFields) | undefined } {
  const att: PopulatedFields = {
    type: schema.type,
    id: generateId(),
    PK: "",
    updatedAt: new Date().toISOString(),
  };
  for (const key in schema.keys) {
    const keyParts = schema.keys[key];

    if (keyParts.length > 2) {
      console.error("PK/SK can only have 2 values");
      return { index: undefined, item: undefined };
    }

    const valPrefix = key == Index.PRIMARY ? "" : key;

    for (const p in keyParts) {
      const partKey = valPrefix + p; // PK, SK, GSI1PK, GSI1SK, etc.

      if (!att[partKey]) att[partKey] = "";
      for (const keyVal of keyParts[p]) {
        let id;

        // if it's a string, it's a static value
        if (keyVal.override) {
          id = `${keyVal.override}#`;

          // if it's itself
        } else if (!keyVal.schema.type) {
          id = `${schema.type}.${schema.version}.${att.id}#`;

          // if it's a reference to another schema
        } else {
          const idKey = keyVal.schema.type + "Id";
          id = `${keyVal.schema.type}.${keyVal.schema.version}.${item[idKey]}#`;
        }
        att[partKey] += id;
      }
    }
  }
  return {
    index: LabsPlatform,
    item: {
      ...att,
      ...item
    } as T & PopulatedFields
  };
}

export function lookupKeys(config: {
  schema,
  index: Index,
  ids: { [K in SchemaType]?: string },
  projectedFields?: string[],
  getChildren?: boolean,
}): {
  index?: Table,
  query?: QueryInput,
  projectedFields?: string[]
} {
  const result: QueryInput = {
    PK: ""
  };
  const keyParts = config.schema.keys[config.index];

  if (keyParts.length > 2) {
    console.error("PK/SK can only have 2 values");
    return { index: undefined, query: undefined };
  }

  const valPrefix = config.index == Index.PRIMARY ? "" : config.index;
  if (config.projectedFields) {
    config.projectedFields.push("id", "type");
  }

  for (const p in keyParts) {
    if (config.projectedFields) {
      config.projectedFields.push(valPrefix + p);
    }


    if (!result[p]) result[p] = "";
    for (const keyVal of keyParts[p]) {
      let id;

      // if it's a string, it's a static value
      if (keyVal.override) {
        id = `${keyVal.override}#`;

        // if it's itself
      } else if (!keyVal.schema.type) {
        id = `${config.schema.type}.${config.schema.version}.${config.ids[config.schema.type]}#`;

        // if it's a reference to another schema
      } else {
        if (!config.ids || !config.ids[keyVal.schema.type]) {
          console.error(`Missing ${keyVal.schema.type} in otherIds`);
          return { index: undefined, query: undefined };
        }
        id = `${keyVal.schema.type}.${keyVal.schema.version}.${config.ids[keyVal.schema.type]}#`;
      }
      result[p] += id;
    }
  }
  if (config.getChildren) result.OP = SortKeyOperation.BEGINS_WITH;

  let index = LabsPlatform;
  if (config.index != Index.PRIMARY) {
    index = LabsPlatform[config.index];
  }
  return {
    index: index,
    query: result,
    projectedFields: config.projectedFields
  };
}

function stripKeys(item) {
  const res = { ...item };
  delete res.type;
  delete res.PK;
  delete res.SK;
  delete res.GSI1PK;
  delete res.GSI1SK;
  delete res.GSI2PK;
  delete res.GSI2SK;
  return res;
}

export function nestItems(schema, index, items) {
  if (!items || items.length <= 1) return items;

  const PKKey = index._meta.primaryKey;
  const SKKey = index._meta.sortKey;

  const result = {};
  for (const i of items) {
    const splitSK = i[SKKey].split("#");
    splitSK[0] = i[PKKey];

    let lastItem = result;
    for (const s of splitSK) {
      if (!s) continue;
      const key = `NESTITEM_${s}`;
      if (!lastItem[key]) {
        lastItem[key] = i;
      }
      lastItem = lastItem[key];
    }
  }

  return transformNestItems(result);
}

function transformNestItems(data) {
  function processItem(item) {
    const resultItem = {};
    const nestedItemsByType = {};

    for (const key in item) {
      if (key.startsWith("NESTITEM_")) {
        const nestedItem = item[key];
        const processedNestedItem = processItem(nestedItem);

        const type = schemaNameLookup[nestedItem.type] + "s";
        if (!nestedItemsByType[type]) {
          nestedItemsByType[type] = [];
        }
        nestedItemsByType[type].push(stripKeys(processedNestedItem));
      } else {
        resultItem[key] = item[key];
      }
    }

    // Attach nested items grouped by type
    for (const type in nestedItemsByType) {
      resultItem[type] = nestedItemsByType[type];
    }

    return resultItem;
  }

  const result: unknown[] = [];

  for (const key in data) {
    if (key.startsWith("NESTITEM_")) {
      const rootItem = data[key];
      const processedRootItem = processItem(rootItem);
      result.push(stripKeys(processedRootItem));
    }
  }

  return result;
}

export async function singleTableGet<T extends z.ZodTypeAny>(
  schema: { schema: T },
  index: Index,
  ids: { [K in SchemaType]?: string }
): Promise<z.infer<T> & AppFields | undefined> {
  const { index: idx, query: qry } = lookupKeys({ schema, index, ids });
  if (!idx || !qry) return undefined;
  const item = await dynamoGet(idx, qry);
  if (!item) return;
  return stripKeys(item) as z.infer<T> & AppFields;
}

export async function singleTableQuery<T extends z.ZodTypeAny>(
  schema: { schema: T },
  index: Index,
  ids: { [K in SchemaType]?: string },
  getChildren?: boolean,
  projectedFields?: string[],
): Promise<(z.infer<T> & AppFields)[] | []> {
  const { index: idx, query: qry, projectedFields: prf } = lookupKeys({
    schema,
    index,
    ids,
    getChildren,
    projectedFields
  });
  
  if (!idx || !qry) return [];
  const wallet = await dynamoQuery(idx, qry, prf);
  return nestItems(schema, idx, wallet);
}