import { z } from "zod";
import { UserSchema } from "../user/user";
import { singleTableGet, singleTableQuery } from "@labs/core.database/single-table";
import { Index, PopulatedFields, SchemaType } from "@labs/core.database/single-table/types";

export const walletV1 = {
  version: 1,
  schema: z.object({
    usrId: z.string(),
    balance: z.number(),
    currency: z.string()
  })
};

const thisSchema = walletV1;

export type WalletType = z.infer<typeof thisSchema.schema>;
export type WalletDBType = WalletType & PopulatedFields;

export const WalletSchema = {
  type: SchemaType.Wallet,
  keys: {
    [Index.PRIMARY]: {
      PK: [{
        schema: thisSchema,
        override: "wallet"
      }],
      SK: [{
        schema: UserSchema
      }]
    },
    [Index.GSI1]: {
      PK: [{
        schema: UserSchema
      }],
      SK: [{
        schema: thisSchema,
        override: "wallet"
      }]
    }
  },
  ...thisSchema,
};

export async function getWallet(userId: string) {
  return singleTableGet(WalletSchema, Index.PRIMARY, { [SchemaType.User]: userId });
}

export async function getWalletAndTransactions(userId: string, projectedFields?: string[]) {
  return singleTableQuery(WalletSchema, Index.GSI1, { [SchemaType.User]: userId }, true, projectedFields);
}
