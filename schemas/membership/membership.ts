import { z } from "zod";
import { ageGroup, membershipType } from "../lib/membership";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),

    // Details
    name: z.string(),
    description: z.string().optional(),
    ageGroup: ageGroup.default("ADULT"),
    membershipType: membershipType.default("ONGOING"),
    color: z.string().optional(),

    // Status
    isArchived: z.boolean().default(true),
    isPublic: z.boolean().default(false),
    isPeak: z.boolean().default(false),

    // Financial
    paymentAmount: z.number().default(0),
    joiningFee1: z.number().default(0),
    joiningFee2: z.number().default(0),
    joiningFee3: z.number().default(0),

    // Dates
    noticePeriodDays: z.number(),
    paymentDelayDays: z.number().default(0),
    paymentFrequencyDays: z.number().optional(),

    // Migration
    migrationId: z.string().optional(),
    migrationPlatform: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "mbs";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;