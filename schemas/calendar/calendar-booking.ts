import { z } from "zod";

export const Prefix = "cab";

export const Versions = [
  z.object({ // 0
    // Links
    calendarId: z.string(),
    calendarEventId: z.string(),
    brandId: z.string().optional(),
    locationId: z.string().optional(),
    userId: z.string().optional(),
    transactionId: z.string().optional(),
    
    // Details
    isWaitlist: z.boolean().default(false),
    isCancelled: z.boolean().default(false),
    isRefunded: z.boolean().default(false),
    isNoShow: z.boolean().default(false),

    // Time
    eventName: z.string().optional(),
    cancelDateTime: z.string().optional(),

    // Financial
    cost: z.number().optional(),
    cancelFee: z.number().optional(),
  })
];

export const Version = Versions.length - 1;
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
