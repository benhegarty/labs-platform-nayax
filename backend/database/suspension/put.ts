import { PopulatedFields } from "@labs/core.database/single-table/types";
import { Suspension } from "@labs/schemas";
import { populateKeys } from "@labs/core.database/single-table";
import { dynamoPut } from "@labs/core.database/dynamodb/ops";

export async function putSuspension(suspension: Suspension.Type): Promise<(Suspension.OutType & PopulatedFields) | null> {
  const parsed = Suspension.Schema.parse(suspension);
  const { index, item } = populateKeys(Suspension, parsed);
  if (!index || !item) {
    return null;
  }
  await dynamoPut(index, item);
  return item;
}
