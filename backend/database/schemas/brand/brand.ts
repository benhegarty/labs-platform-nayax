import { z } from "zod";
import { SchemaType, Index, Status, PopulatedFields } from "@labs/core.database/single-table/types";

const brandV1 = {
  version: 1,
  schema: z.object({
    name: z.string(),
    isActive: z.boolean()
  })
};

const thisSchema = brandV1;

export type BrandType = z.infer<typeof thisSchema.schema>;
export type BrandDBType = BrandType & PopulatedFields;

function statusFunc(item: BrandType) {
  return item.isActive ? Status.ACTIVE : Status.INACTIVE;
}

export const BrandSchema = { 
  type: SchemaType.Brand,
  keys: {
    [Index.PRIMARY]: {
      PK: ["brand"],
      SK: [thisSchema]
    }
  },
  statusFunc,
  ...thisSchema,
};