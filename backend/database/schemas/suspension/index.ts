import { AppFields, PopulatedFields, Query } from "@labs/core.database/single-table/types";
import * as Suspension from "./suspension";
export { Suspension };

import { populateKeys, singleTableQuery } from "@labs/core.database/single-table";
import { dynamoPut } from "@labs/core.database/dynamodb/ops";
import { Indexes } from "../..";

export async function putSuspension(suspension: Suspension.Type): Promise<(Suspension.OutType & PopulatedFields) | null> {
  const parsed = Suspension.Schema.parse(suspension);
  const { index, item } = populateKeys(Suspension, parsed);
  if (!index || !item) {
    return null;
  }
  await dynamoPut(index, item);
  return item;
}

export async function getSuspensionsForUserContract(userId: string, contractId: string, projectedFields?: string[]): Promise<(Suspension.OutType & AppFields)[]> {
  
  const query: Query = {
    index: Indexes.GSI1,
    path: [
      { User: userId },
      { Contract: contractId },
      { Suspension }
    ],
    getChildren: true,
    projectedFields
  };

  console.log(JSON.stringify(query, null, 2));

  const suspensions = await singleTableQuery<typeof Suspension.Schema>(query);

  return suspensions;
}