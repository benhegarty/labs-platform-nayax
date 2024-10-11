import { AppFields, Query } from "@labs/core.database/single-table/types";
import { Suspension } from "@labs/schemas";
import { singleTableQuery } from "@labs/core.database/single-table";
import { Indexes } from "../";

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