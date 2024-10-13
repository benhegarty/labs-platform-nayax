import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string(),
    userId: z.string(),
    aliasUserId: z.string(),
    directDebitIds: z.array(z.string()),

    // Dates
    startDate: z.string(),
    endDate: z.string(),

    // Details
    type: z.enum(["SUCCESS", "REJECTION", "NEW_USER"]),
    userFullName: z.string(),
    constractStartDate: z.string(),
    paymentType: z.enum(["DD", "CC"]),

    ddDate: z.string(),
    ddPaymentAmount: z.string(),
    ddTotalPaymentAmount: z.string(),
    ddNote: z.string(),
    ddRejectionReason: z.string().optional(),

    contractPaymentAmount: z.string(),
    contractRenew: z.boolean().optional(),    
  })
];

export const Version = Versions.length - 1;
export const Prefix = "txs";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
