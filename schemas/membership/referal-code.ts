import { z } from "zod";
import { date } from "../lib/date";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string().optional(),
    promotionId: z.string().optional(),
    familyRootContractId: z.string().optional(),
    referrerUserId: z.string().optional(),

    locationName: z.string().optional(),

    // Cron
    cronNext: date,
    cronFields: z.array(z.string()).default([
      "expiryDateTime",
    ]),

    // Details
    code: z.string(),
    codePrefix: z.string().optional(),
    isActive: z.boolean().default(true),
    isUsed: z.boolean().default(false),
    isFamily: z.boolean().default(false),

    useDateTime: z.date().optional(),
    expiryDateTime: z.date().transform((date) => date.toISOString()),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "mbr";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;