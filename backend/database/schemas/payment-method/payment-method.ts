import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),

    // Details
    type: z.enum(["CREDIT_CARD", "DIRECT_DEBIT"]),
    isDeleted: z.boolean().optional(),

    // Credit Card
    cardHolderName: z.string().optional(),
    cardNumber: z.string().optional(),
    cardExpiryDate: z.string().optional(),
    cardToken: z.string().optional(),

    // Direct Debit
    bsb: z.string().optional(),
    accountNumber: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "ptm";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
