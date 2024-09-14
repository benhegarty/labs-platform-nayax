import { z } from "zod";
import { SchemaType, Key } from "../../types";
import { UserSchema } from "../user/user";
import { LocationSchema } from "../location";

const walletTransactionV1 = {
  version: 1,
  schema: z.object({
    authorizationConfirmed: z.boolean().default(false),
    settled: z.boolean().default(false),
    cancelled: z.boolean().default(false),

    amount: z.number(),
    currency: z.string(),
    currencyNumeric: z.number(),

    siteId: z.number(),
    machineId: z.string(),
    machineName: z.string(),
    groupId: z.string(),
    operatorId: z.string(),
    zipCode: z.number(),
    country: z.string(),

    updatedAt: z.date()
  })
};

const thisSchema = walletTransactionV1;

export type WalletTransactionType = z.infer<typeof thisSchema.schema>;

export const WalletTransactionSchema = { 
  type: SchemaType.WALLET_TRANSACTION,
  keys: {
    [Key.PRIMARY]: {
      PK: [LocationSchema],
      SK: [thisSchema]
    },
    [Key.GSI1]: {
      PK: [UserSchema],
      SK: ["wallet", thisSchema]
    }
  },
  ...thisSchema
};