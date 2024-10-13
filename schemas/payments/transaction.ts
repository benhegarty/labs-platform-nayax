import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string(),
    userId: z.string().optional(),
    receiptDocumentId: z.string().optional(),
    payMethodId: z.string().optional(),
    directDebitId: z.string().optional(),
    contractId: z.string().optional(),

    // Details
    aliasUserId: z.string(),
    type: z.enum([
      "FEE",
      "DD",
      "INCIDENTAL",
      "OVERDUE_REPAYMENT", 
      "REFUND", 
      "REFUND_PARTIAL", 
      "CREDIT"
    ]),
    receipientType: z.enum([
      "USER", 
      "BRAND", 
      "LOCATION", 
      "CONTRACT"
    ]),
    feeType: z.enum([
      "DD_SETUP", 
      "DD_ADMIN",
      "USER_SETUP",
    ]),
    // Payment Method
    paymentMethod: z.enum([
      "ACCOUNT_CREDIT", 
      "CARD", 
      "BANK_ACCOUNT", 
      "CASH", 
      "WALLET",
      "OTHER"
    ]),
    identifer: z.string(),
    amount: z.number(), // positive = payment, negitive = refund
    currency: z.string(),

    // Status
    isPaid: z.boolean().default(false),
    isFullyRefunded: z.boolean().default(false),
    isPartiallyRefunded: z.boolean().default(false),
    refundTransactionIds: z.array(z.string()).optional(),
    processDateTime: z.date().transform((date) => date.toISOString()),
    settlementDateTime: z.date().transform((date) => date.toISOString()).optional(),
    refundTransactionId: z.string().optional(),
    gatewayCode: z.string().optional(),
    reason: z.string().optional(),

    // Migration
    migrationId: z.string().optional(),
    migrationPlatform: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "txn";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;