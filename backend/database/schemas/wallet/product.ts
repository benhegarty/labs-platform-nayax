import { z } from "zod";
import { SchemaType, Key } from "../../types";

const walletProductV1 = {
  version: 1,
  schema: z.object({
    nayaxCode: z.number(),
    name: z.string(),
    amount: z.number(),
    currency: z.string(),
    updatedAt: z.date()
  })
};

const thisSchema = walletProductV1;

export type WalletProductType = z.infer<typeof thisSchema.schema>;

export const WalletProductSchema = { 
  type: SchemaType.WALLET_PRODUCT,
  keys: {
    [Key.PRIMARY]: {
      PK: ["wallet-product"],
      SK: [thisSchema]
    }
  },
  ...thisSchema,
};