import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string(),
    userId: z.string().optional(),
    receiptDocumentId: z.string().optional(),
    paymentInformationId: z.string().optional(),
    directDebitId: z.string().optional(),
    contractId: z.string().optional(),

    // Details
    type: z.enum(["INITIAL", "DD", "INCIDENTAL", "OVERDUE_REPAYMENT", "REFUND", "CREDIT"]),
    identifer: z.string(),
    amount: z.number(), // positive = payment, negitive = refund
    currency: z.string(),

    // Status
    isPaid: z.boolean().default(false),
    processDateTime: z.date().transform((date) => date.toISOString()),
    settlementDateTime: z.date().transform((date) => date.toISOString()).optional(),
    refundTransactionId: z.string().optional(),
    gatewayCode: z.string().optional(),
    reason: z.string().optional(),

    // Charge Method
    chargeMethod: z.enum(["CARD", "BANK_ACCOUNT", "CASH", "OTHER"]),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "txn";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;