import { z } from "zod";
import { Schema as Membership } from "../membership/membership";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string(),
    membershipId: z.string(),

    // Status
    isArchived: z.boolean().default(true),
    isPublic: z.boolean().default(false),
    
    // Overrides
    overrides: z.object({
      ageGroupPricing: Membership.shape.ageGroupPricing.optional(),
      passCount: Membership.shape.passCount.optional(),
      noticePeriodDays: Membership.shape.noticePeriodDays.optional(),
      paymentDelay: Membership.shape.paymentDelay.optional(),
      contractLength: Membership.shape.contractLength.optional(),
    }),

    // Migration
    migrationId: z.string().optional(),
    migrationPlatform: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "lcm";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;