import { z } from "zod";
import { SchemaType, Index, PopulatedFields } from "@labs/core.database/single-table/types";
import { BrandSchema } from "../brand/brand";

const locationV1 = {
  version: 1,
  schema: z.object({
    name: z.string(),
    isOpen: z.boolean(),
    isPresale: z.boolean(),
    address: z.string(),
    city: z.string(),
    country: z.string(),
    postalCode: z.string(),
    latitude: z.number(),
    longitude: z.number()
  })
};

const thisSchema = locationV1;

export type LocationType = z.infer<typeof thisSchema.schema>;
export type LocationDBType = LocationType & PopulatedFields;

export const LocationSchema = { 
  type: SchemaType.Location,
  keys: {
    [Index.PRIMARY]: {
      PK: ["brand"],
      SK: [BrandSchema, thisSchema]
    }
  },
  ...thisSchema,
};