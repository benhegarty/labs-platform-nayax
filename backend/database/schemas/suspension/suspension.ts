import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),
    contractId: z.string(),
    locationId: z.string(),
    suspendedByUserId: z.string(),
    suspensionTransactionId: z.string().optional(),

    isApproved: z.boolean().default(false),
    isMedical: z.boolean().default(false),

    // Details
    reason: z.string().optional(),
    cost: z.number().default(0),

    // Period
    fromDateTime: z.date().transform((date) => date.toISOString()),
    toDateTime: z.date().transform((date) => date.toISOString()),
    periodDays: z.number(),
  })
];

export const Prefix = "sus";
export const Version = Versions.length - 1;
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;