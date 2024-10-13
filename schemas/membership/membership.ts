import { z } from "zod";
import { ageGroupPricing, membershipType } from "../lib/membership";
import { duration } from "../lib/date";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),

    // Details
    name: z.string(),
    description: z.string().optional(),
    membershipType: membershipType.default("ONGOING"),
    isFamily: z.boolean().default(false),
    color: z.string().optional(),

    // Status
    isArchived: z.boolean().default(true),
    isPublic: z.boolean().default(false),
    canTransfer: z.boolean().default(true),
    peakHoursOnly: z.boolean().default(false),

    // Pricing
    ageGroupPricing: z.array(ageGroupPricing).min(1).default([
      {
        name: "ADULT",
        age: {
          min: 16
        },
        cost: {
          paymentAmount: 0,
          joiningFee1: 0,
          joiningFee2: 0,
          joiningFee3: 0
        }
      }
    ]),

    // Visit and Booking Pass
    passCount: z.number().optional(),

    // Dates
    noticePeriodDays: duration.optional(),
    paymentFrequency: duration.optional(),
    paymentDelay: duration.optional(),
    contractLength: duration.optional(),

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