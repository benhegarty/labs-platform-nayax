import { z } from "zod";
import { SchemaType, Index, PopulatedFields } from "@labs/core.database/single-table/types";
import { LocationSchema } from "../location";

const userV1 = {
  version: 1,
  schema: z.object({
    isActive: z.boolean(),
    isBanned: z.boolean(),
    isOverdue: z.boolean(),

    email: z.string().email(),
    name: z.string(),
    phone: z.string(),
    role: z.string()
  })
};

const thisSchema = userV1;

export type UserType = z.infer<typeof thisSchema.schema>;
export type UserDBType = UserType & PopulatedFields;

export const UserSchema = {
  type: SchemaType.User,
  keys: {
    [Index.PRIMARY]: {
      PK: ["user"],
      SK: [LocationSchema, thisSchema]
    },
    [Index.GSI1]: {
      PK: [thisSchema],
      SK: [SchemaType.User]
    },
  },
  ...thisSchema
};