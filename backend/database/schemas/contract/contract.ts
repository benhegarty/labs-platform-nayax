import { z } from "zod";

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

    // Financial
    paymentAmount: z.number(),
    joiningFee1: z.number(),
    joiningFee2: z.number(),
    joiningFee3: z.number(),

    // Membership
    membershipName: z.string(),
    membershipDescription: z.string(),
    membershipPaymentAmount: z.number(),

    // Location
    locationName: z.string(),
    locationShortName: z.string(),

    // Status
    isActive: z.boolean().default(true),
    isCancelled: z.boolean().default(false),
    isSuspended: z.boolean().default(false),
    isExpired: z.boolean().default(false),
    
    // Dates
    startDateTime: z.date().transform((date) => date.toISOString()),
    endDateTime: z.date().transform((date) => date.toISOString()).optional(),
    expiryDateTime: z.date().transform((date) => date.toISOString()).optional(),
    pendingDateTime: z.date().transform((date) => date.toISOString()).optional(),

    // Periods
    contractLengthDays: z.number().optional(),
    noticePeriodDays: z.number().optional(),
    paymentDelayDays: z.number().optional(),
    paymentFrequencyDays: z.number().optional(),

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
  })
];

export const Version = Versions.length - 1;
export const Prefix = "ctr";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
