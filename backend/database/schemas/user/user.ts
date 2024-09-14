import { z } from "zod";
import { SchemaType, Key } from "../../types";
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
    role: z.string(),

    updatedAt: z.date()
  })
};

const thisSchema = userV1;

export type UserType = z.infer<typeof thisSchema.schema>;

export const UserSchema = { 
  type: SchemaType.USER,
  keys: {
    [Key.PRIMARY]: {
      PK: ["user"],
      SK: [LocationSchema, thisSchema]
    },
    [Key.LSI1]: {
      SK: [thisSchema]
    },
    [Key.GSI1]: {
      PK: [thisSchema],
      SK: [SchemaType.USER]
    },
  },
  ...thisSchema
};