import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),

    // Details
    name: z.string(),
    description: z.string().optional(),
    ageGroup: z.enum(["SENIOR", "ADULT", "JUNIOR", "YOUTH", "CHILD"]).default("ADULT"),
    color: z.string().optional(),

    // Status
    isInHub: z.boolean().default(true),
    isPublic: z.boolean().default(false),
    isPeak: z.boolean().default(false),
    isOneOff: z.boolean().default(false),

    // Financial
    paymentAmount: z.number().default(0),
    joiningFee1: z.number().default(0),
    joiningFee2: z.number().default(0),
    joiningFee3: z.number().default(0),

    // Dates
    noticePeriodDays: z.number(),
    paymentDelayDays: z.number().default(0),
    paymentFrequencyDays: z.number().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "mbs";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;