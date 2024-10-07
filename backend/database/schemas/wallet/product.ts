import { z } from "zod";
import { SchemaType, Index, PopulatedFields } from "@labs/core.database/single-table/types";

const walletProductV1 = {
  version: 1,
  schema: z.object({
    nayaxCode: z.number(),
    name: z.string(),
    amount: z.number(),
    currency: z.string()
  })
};

const thisSchema = walletProductV1;

export type WalletProductType = z.infer<typeof thisSchema.schema>;
export type WalletProductDBType = WalletProductType & PopulatedFields;

export const WalletProductSchema = { 
  type: SchemaType.WalletProduct,
  keys: {
    [Index.PRIMARY]: {
      PK: [{
        schema: thisSchema,
        override: "wallet-product"
      }],
      SK: [{
        schema: thisSchema
      }]
    }
  },
  ...thisSchema,
};