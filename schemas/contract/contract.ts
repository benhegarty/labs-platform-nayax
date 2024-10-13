import { z } from "zod";
import { cronDate } from "../lib/date";
import { Schema as Membership } from "../membership/membership";
import { Schema as Location } from "../brand/location";
import { ageGroupPricing } from "../lib/membership";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),
    brandId: z.string(),
    locationId: z.string(),
    membershipId: z.string(),
    activationTransactionId: z.string(),
    promotionId: z.string().optional(),
    contractDocumentId: z.string().optional(),

    // Cron
    cronNext: cronDate,
    cronFields: z.array(z.string()).default([
      "startDateTime",
      "endDateTime",
      "cancelDateTime"
    ]),

    // Membership
    membershipName: Membership.shape.name,
    membershipDescription: Membership.shape.description,
    membershipType: Membership.shape.membershipType,
    membershipColor: Membership.shape.color,

    // Age Group Pricing
    ageGroupName: ageGroupPricing.shape.name,
    staffedHoursOnly: ageGroupPricing.shape.staffedHoursOnly,
    peakHoursOnly: ageGroupPricing.shape.peakHoursOnly,
    requireConsent: ageGroupPricing.shape.requireConsent,
    
    paymentAmount: ageGroupPricing.shape.cost.shape.paymentAmount,
    joiningFee1: ageGroupPricing.shape.cost.shape.joiningFee1,
    joiningFee2: ageGroupPricing.shape.cost.shape.joiningFee2,
    joiningFee3: ageGroupPricing.shape.cost.shape.joiningFee3,

    // Periods
    contractLength: Membership.shape.contractLength,
    noticePeriodDays: Membership.shape.noticePeriodDays,
    paymentDelay: Membership.shape.paymentDelay,
    paymentFrequency: Membership.shape.paymentFrequency,

    // Visit and Booking Pass
    passCountTotal: Membership.shape.passCount,
    passCountUsed: z.number().optional(),

    // Location
    locationName: Location.shape.name,
    locationShortName: Location.shape.shortName,

    // Status
    isPending: z.boolean().default(false),
    isActive: z.boolean().default(true),
    isSuspended: z.boolean().default(false),
    isExpired: z.boolean().default(false),
    isCancelled: z.boolean().default(false),
    cancellationReason: z.string().optional(),

    // Dates
    startDateTime: z.date().transform((date) => date.toISOString()), // When the contract starts
    endDateTime: z.date().transform((date) => date.toISOString()).optional(), // When the contract ends according to the contract length
    cancelDateTime: z.date().transform((date) => date.toISOString()).optional(), // Then the contract cancels
    cancelledDateTime: z.date().transform((date) => date.toISOString()).optional(), // When the contract was cancelled

    // Consent Form
    consentFormPublicCode: z.string().optional(),
    consentForm: z.object({
      questions: z.array(z.object({
        questionId: z.string(),
        question: z.string(),
        answer: z.string(),
      })).optional(),
      notificationDateTime: z.date().transform((date) => date.toISOString()).optional(),
      signedDateTime: z.date().transform((date) => date.toISOString()).optional(),
      signature: z.string().optional(),
      signatureIpAddress: z.string().optional(),
    }).optional(),

    // Migration
    migrationId: z.string().optional(),
    migrationPlatform: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "ctr";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
