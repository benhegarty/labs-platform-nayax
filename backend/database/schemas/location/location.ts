import { z } from "zod";
import { SchemaType, Key } from "../../types";
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
    longitude: z.number(),
    updatedAt: z.date()
  })
};

const thisSchema = locationV1;

export type LocationType = z.infer<typeof thisSchema.schema>;

export const LocationSchema = { 
  type: SchemaType.LOCATION,
  keys: {
    [Key.PRIMARY]: {
      PK: ["brand"],
      SK: [BrandSchema, thisSchema]
    }
  },
  ...thisSchema,
};