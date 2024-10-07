import { z } from "zod";
import { SchemaType, Index, PopulatedFields } from "@labs/core.database/single-table/types";
import { UserSchema } from "../user/user";
import { WalletSchema } from "./wallet";
import { LocationSchema } from "../location";

export const walletTransactionV1 = {
  version: 1,
  schema: z.object({
    usrId: z.string(),
    locId: z.string(),
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
    country: z.string()
  })
};

const thisSchema = walletTransactionV1;

export type WalletTransactionType = z.infer<typeof thisSchema.schema>;
export type WalletTransactionDBType = WalletTransactionType & PopulatedFields;

export const WalletTransactionSchema = {
  type: SchemaType.WalletTransaction,
  keys: {
    [Index.PRIMARY]: {
      PK: [{
        schema: LocationSchema
      }],
      SK: [{
        schema: thisSchema
      }]
    },
    [Index.GSI1]: {
      PK: [{
        schema: UserSchema
      }],
      SK: [{
        schema: WalletSchema,
        override: "wallet"
      }, {
        schema: thisSchema
      }]
    }
  },
  ...thisSchema
};