import { PopulatedFields } from "@labs/core.database/single-table/types";
import { User as Schema } from "@labs/schemas";
import { populateKeys } from "@labs/core.database/single-table";
import { dynamoPut } from "@labs/core.database/dynamodb/ops";

export async function putUser(i: Schema.Type): Promise<(Schema.OutType & PopulatedFields) | null> {
  const parsed = Schema.Schema.parse(i);
  const { index, item } = populateKeys(Schema, parsed);
  if (!index || !item) {
    return null;
  }
  console.log(item);
  await dynamoPut(index, item);
  return i;
}
