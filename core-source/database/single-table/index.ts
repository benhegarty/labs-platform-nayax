import { generateId, generateIdTimestamp } from "@labs/id";
import { AppFields, Index, PopulatedFields, Query } from "./types";
import { QueryInput, SortKeyOperation } from "@labs/core.database/types";
import { LabsPlatform } from "@labs/core.database/dynamodb/tables";
import { Table } from "@labs/core.database/types";
import { dynamoGet, dynamoQuery } from "../dynamodb/ops";
import { z } from "zod";
import { Indexes } from "@labs/be.database/schemas";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function index(index: string, children?: Record<string, any>) {
  return {
    index,
    ...children
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function schemaKey(schema: any, children?: Record<string, any>) {
  return {
    schemaKey: true,
    schema,
    ...children
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function itemKey(schema: any, children?: Record<string, any>) {
  return {
    itemKey: true,
    schema,
    ...children
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function child(schema: any, children?: Record<string, any>) {
  const ret = {
    child: true,
    schema,
    ...children,
  };
  return ret;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function indexes<T>(Indexes: T & { _meta?: any }): T & { _meta: any } {
  Indexes._meta = {
    lookup: {},
    names: {}
  };
  for (const index in Indexes) {
    if (index === "_meta") continue;
    Indexes._meta.lookup[index] = {};
    traverse(Indexes[index], [], index, Indexes._meta);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Indexes as T & { _meta: any };
}

function traverse(node, path, index, _meta) {
  // Check if the current node has a schema with a Prefix
  if (node.schema && node.schema.Prefix) {
    const prefix = node.schema.Prefix;

    // Store name for this prefix if not already stored
    if (!_meta.names[prefix]) {
      _meta.names[prefix] = path[path.length - 1];
    }

    // Record the path to this prefix if not already recorded
    if (!_meta.lookup[index][prefix]) {
      _meta.lookup[index][prefix] = path.slice();
    }
  }

  // Recursively traverse all object properties
  for (const prop in node) {
    const child = node[prop];
    if (typeof child === "object" && child !== null) {
      traverse(child, path.concat(prop), index, _meta);
    }
  }
}

export function populateKeys<T>(schema, item: T): { index: Table | undefined, item: (T & PopulatedFields) | undefined } {
  const att: PopulatedFields = {
    schematype: schema.Prefix,
    id: generateId(),
    PK: "",
    updatedAt: new Date().toISOString(),
  };

  for (const i in Indexes) {
    if (i === "_meta") continue;
    const index = Indexes[i];
    let pkKey = "PK";
    let skKey = "SK";
    if (i !== Index.PRIMARY) {
      pkKey = i + "PK";
      skKey = i + "SK";
    }

    const path = Indexes._meta.lookup[i][schema.Prefix];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items: any[] = [];
    let nav = index;
    for (const p of path) {
      const thisItem = { [p]: att.id };
      if (schema.Prefix != nav[p].schema.Prefix) thisItem[p] = item[nav[p].schema.Prefix];
      items.push(thisItem);
      nav = nav[p];
    }
    const { query } = getKeys({ index, path: items });
    att[pkKey] = query.PK;
    att[skKey] = query.SK;
  }

  return {
    index: LabsPlatform,
    item: {
      ...att,
      ...item
    } as T & PopulatedFields
  };
}

export function getKeys(query: Query): {
  index: Index,
  query: QueryInput,
  projectedFields?: string[]
} {
  const index = query.index;
  const path = query.path;

  const result: QueryInput = {
    PK: ""
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items: any[] = [];
  let nav = index;
  for (const p of path) {
    const key = Object.keys(p)[0];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let item: any = {
      ...nav[key]
    };
    if (p[key] && typeof p[key] === "string") {
      item.id = p[key];
    } else if (p[key] && typeof p[key] === "object") {
      item = { ...item, ...p[key] };
    }
    items.push(item);
    nav = nav[key];
  }

  result.OP = SortKeyOperation.EQUAL;
  if (query.getChildren) {
    result.OP = SortKeyOperation.BEGINS_WITH;
  }

  for (const i of items) {
    if (!result.PK) {
      result.PK = i.schemaKey ? `${i.schema.Prefix}#` : `${i.schema.Prefix}.${i.id}#`;
      continue;
    }

    if (!result.SK) result.SK = "";

    result.SK += `${i.schema.Prefix}.`;
    if (i.id) {
      result.SK += `${i.id}#`;
    } else if (i.dateFrom && i.dateTo) {
      result.OP = SortKeyOperation.BETWEEN;
      result.SK_END = result.SK;
      result.SK_END += `${generateIdTimestamp(i.dateTo)}`;
      result.SK += `${generateIdTimestamp(i.dateFrom)}`;
    } else if (i.dateFrom) {
      result.OP = SortKeyOperation.GREATER_THAN_OR_EQUAL;
      result.SK += `${generateIdTimestamp(i.dateFrom)}`;
    } else if (i.dateTo) {
      result.OP = SortKeyOperation.LESS_THAN_OR_EQUAL;
      result.SK += `${generateIdTimestamp(i.dateTo)}`;
    }
  }

  if (query.projectedFields && query.projectedFields.length > 0) {
    query.projectedFields.push("schemaType");
    query.projectedFields.push("id");
    const idx = query.index.index;
    let sk = "SK";
    let pk = "PK";
    if (idx !== Index.PRIMARY) {
      sk = idx + "SK";
      pk = idx + "PK";
    }
    query.projectedFields.push(pk);
    query.projectedFields.push(sk);
  }

  return {
    index: index.index as Index,
    query: result,
    projectedFields: query.projectedFields
  };
}

function getPlural(type) {
  // Simple pluralization logic (you can customize this as needed)
  return type.endsWith("s") ? type : `${type}s`;
}

function stripKeys(item) {
  const res = { ...item };
  delete res.schemaType;
  delete res.PK;
  delete res.SK;
  delete res.GSI1PK;
  delete res.GSI1SK;
  delete res.GSI2PK;
  delete res.GSI2SK;
  return res;
}

export function nestItems(items, pkKey = "PK", skKey = "SK") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemsById: Record<string, any> = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rootItems: any[] = [];

  function parseKey(key) {
    if (!key) return null;
    // Remove trailing '#'
    if (key.endsWith("#")) {
      key = key.slice(0, -1);
    }
    const dotIndex = key.indexOf(".");
    if (dotIndex === -1) return null;
    const type = key.substring(0, dotIndex);
    const id = key.substring(dotIndex + 1);
    return { type, id };
  }

  // First, build a mapping from composite IDs to items
  for (const item of items) {
    const ownKey = parseKey(item[skKey]);
    if (!ownKey) continue;
    const ownCompositeID = `${ownKey.schemaType}.${ownKey.id}`;
    itemsById[ownCompositeID] = { ...item, _children: {} };
  }

  // Now, for each item, determine its parent and nest accordingly
  for (const item of items) {
    const ownKey = parseKey(item[skKey]);
    if (!ownKey) continue;
    const ownCompositeID = `${ownKey.schemaType}.${ownKey.id}`;

    const parentKey = parseKey(item[pkKey]);
    if (parentKey) {
      const parentCompositeID = `${parentKey.schemaType}.${parentKey.id}`;
      const parentItem = itemsById[parentCompositeID];
      if (parentItem) {
        // Add item to parent's children
        const childTypePlural = getPlural(item.schemaType);
        if (!parentItem._children[childTypePlural]) {
          parentItem._children[childTypePlural] = [];
        }
        parentItem._children[childTypePlural].push(itemsById[ownCompositeID]);
      } else {
        // Parent not found, consider item as root
        rootItems.push(itemsById[ownCompositeID]);
      }
    } else {
      // No parent, consider item as root
      rootItems.push(itemsById[ownCompositeID]);
    }
  }

  // Recursively process items to build the nested structure
  function processItem(item) {
    const result = stripKeys(item);
    for (const childType in item._children) {
      result[childType] = item._children[childType].map(processItem);
    }
    delete result._children;
    return result;
  }

  // Process root items
  const nestedResult = rootItems.map(processItem);

  return nestedResult;
}

// function stripKeys(item) {
//   const res = { ...item };
//   delete res.type;
//   delete res.PK;
//   delete res.SK;
//   delete res.GSI1PK;
//   delete res.GSI1SK;
//   delete res.GSI2PK;
//   delete res.GSI2SK;
//   return res;
// }

// export function nestItems(schema, index, items) {
//   if (!items || items.length <= 1) return items;

//   const PKKey = index._meta.primaryKey;
//   const SKKey = index._meta.sortKey;

//   const result = {};
//   for (const i of items) {
//     const splitSK = i[SKKey].split("#");
//     splitSK[0] = i[PKKey];

//     let lastItem = result;
//     for (const s of splitSK) {
//       if (!s) continue;
//       const key = `NESTITEM_${s}`;
//       if (!lastItem[key]) {
//         lastItem[key] = i;
//       }
//       lastItem = lastItem[key];
//     }
//   }

//   return transformNestItems(result);
// }

// function transformNestItems(data) {
//   function processItem(item) {
//     const resultItem = {};
//     const nestedItemsByType = {};

//     for (const key in item) {
//       if (key.startsWith("NESTITEM_")) {
//         const nestedItem = item[key];
//         const processedNestedItem = processItem(nestedItem);

//         const type = Indexes._meta.names[nestedItem.type] + "s";
//         if (!nestedItemsByType[type]) {
//           nestedItemsByType[type] = [];
//         }
//         nestedItemsByType[type].push(stripKeys(processedNestedItem));
//       } else {
//         resultItem[key] = item[key];
//       }
//     }

//     // Attach nested items grouped by type
//     for (const type in nestedItemsByType) {
//       resultItem[type] = nestedItemsByType[type];
//     }

//     return resultItem;
//   }

//   const result: unknown[] = [];

//   for (const key in data) {
//     if (key.startsWith("NESTITEM_")) {
//       const rootItem = data[key];
//       const processedRootItem = processItem(rootItem);
//       result.push(stripKeys(processedRootItem));
//     }
//   }

//   return result;
// }

export async function singleTableGet<T extends z.ZodTypeAny>(
  query: Query,
): Promise<z.infer<T> & AppFields | undefined> {
  const { index: idx, query: qry } = getKeys(query);
  if (!idx || !qry) return undefined;

  let sk = "SK";
  let pk = "PK";
  if (idx !== Index.PRIMARY) {
    sk = idx + "SK";
    pk = idx + "PK";
  }

  const index: Table = {
    _meta: {
      table: "labs-platform-" + process.env.NODE_ENV,
      index: idx,
      primaryKey: pk,
      sortKey: idx[sk] ? idx[sk] : undefined
    }
  };
  const item = await dynamoGet(index, qry);
  if (!item) return;
  return stripKeys(item) as z.infer<T> & AppFields;
}

export async function singleTableQuery<T extends z.ZodTypeAny>(
  query: Query,
): Promise<(z.infer<T> & AppFields)[] | []> {
  const { index: idx, query: qry, projectedFields: prf } = getKeys(query);
  if (!idx || !qry) return [];

  console.log(JSON.stringify(query, null, 2));

  let sk = "SK";
  let pk = "PK";
  if (idx !== Index.PRIMARY) {
    sk = idx + "SK";
    pk = idx + "PK";
  }

  const index: Table = {
    _meta: {
      table: "labs-platform-" + process.env.NODE_ENV,
      index: idx,
      primaryKey: pk,
      sortKey: qry.SK ? sk : undefined
    }
  };

  const wallet = await dynamoQuery(index, qry, prf);
  console.log(wallet);
  return nestItems(wallet, pk, sk);
}
