import { z } from "zod";
import { SchemaType, Key, Status } from "../../types";

const brandV1 = {
  version: 1,
  schema: z.object({
    name: z.string(),
    isActive: z.boolean(),
    updatedAt: z.date()
  })
};

const thisSchema = brandV1;

export type BrandType = z.infer<typeof thisSchema.schema>;

function statusFunc(item: BrandType) {
  return item.isActive ? Status.ACTIVE : Status.INACTIVE;
}

export const BrandSchema = { 
  type: SchemaType.BRAND,
  keys: {
    [Key.PRIMARY]: {
      PK: ["brand"],
      SK: [thisSchema]
    }
  },
  statusFunc,
  ...thisSchema,
};