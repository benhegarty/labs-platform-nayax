import { z } from "zod";
import { SchemaType, Key } from "../../types";
import { UserSchema } from "../user/user";

const walletV1 = {
  version: 1,
  schema: z.object({    
    balance: z.number(),
    amount: z.number(),
    currency: z.string(),
    updatedAt: z.date(),
  })
};

const thisSchema = walletV1;

export type WalletType = z.infer<typeof thisSchema.schema>;

export const WalletSchema = { 
  type: SchemaType.WALLET,
  keys: {
    [Key.PRIMARY]: {
      PK: ["wallet"],
      SK: [UserSchema]
    },
    [Key.GSI1]: {
      PK: [UserSchema],
      SK: ["wallet"]
    }
  },
  ...thisSchema,
};
