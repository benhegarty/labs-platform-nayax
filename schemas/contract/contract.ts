import { z } from "zod";
import { date } from "../lib/date";
import { Schema as Membership } from "../membership/membership";
import { Schema as Location } from "../brand/location";
import { ageGroupPricing } from "../lib/membership";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string().openapi({
      description: "Unique identifier for the user.",
      example: "3x4MpL3+id$"
    }),
    brandId: z.string().openapi({
      description: "Unique identifier for the brand.",
      example: "3x4MpL3+id$"
    }),
    locationId: z.string().openapi({
      description: "Unique identifier for the location.",
      example: "3x4MpL3+id$"
    }),
    membershipId: z.string().openapi({
      description: "Unique identifier for the membership.",
      example: "3x4MpL3+id$"
    }),
    activationTransactionId: z.string().openapi({
      description: "Unique identifier for the activation transaction.",
      example: "3x4MpL3+id$"
    }),
    promotionId: z.string().optional().openapi({
      description: "Optional identifier for the promotion.",
      example: "3x4MpL3+id$"
    }),
    contractDocumentId: z.string().optional().openapi({
      description: "Optional identifier for the contract document.",
      example: "3x4MpL3+id$"
    }),
  
    // Cron
    cronNext: date.openapi({
      description: "The next date for the scheduled cron job."
    }),
    cronFields: z.array(z.string()).default([
      "startDateTime",
      "endDateTime",
      "cancelDateTime"
    ]).openapi({
      description: "Fields tracked by the cron job.",
      example: ["startDateTime", "endDateTime", "cancelDateTime"]
    }),
  
    // Membership
    membershipName: Membership.shape.name.openapi({
      description: "Name of the membership."
    }),
    membershipDescription: Membership.shape.description.openapi({
      description: "Description of the membership."
    }),
    membershipType: Membership.shape.membershipType.openapi({
      description: "Type of the membership."
    }),
    membershipColor: Membership.shape.color.openapi({
      description: "Color code representing the membership."
    }),
  
    // Age Group Pricing
    ageGroupName: ageGroupPricing.shape.name.openapi({
      description: "Name of the age group."
    }),
    staffedHoursOnly: ageGroupPricing.shape.staffedHoursOnly.openapi({
      description: "Whether the pricing is applicable only during staffed hours."
    }),
    peakHoursOnly: ageGroupPricing.shape.peakHoursOnly.openapi({
      description: "Whether the pricing is applicable only during peak hours."
    }),
    requireConsent: ageGroupPricing.shape.requireConsent.openapi({
      description: "Indicates if consent is required for the age group."
    }),
    
    paymentAmount: ageGroupPricing.shape.cost.shape.paymentAmount.openapi({
      description: "Payment amount for the membership.",
      example: 99.99
    }),
    joiningFee1: ageGroupPricing.shape.cost.shape.joiningFee1.openapi({
      description: "First joining fee.",
      example: 50.00
    }),
    joiningFee2: ageGroupPricing.shape.cost.shape.joiningFee2.openapi({
      description: "Second joining fee.",
      example: 30.00
    }),
    joiningFee3: ageGroupPricing.shape.cost.shape.joiningFee3.openapi({
      description: "Third joining fee.",
      example: 20.00
    }),
  
    // Periods
    contractLength: Membership.shape.contractLength.openapi({
      description: "Length of the membership contract in months."
    }),
    noticePeriodDays: Membership.shape.noticePeriodDays.openapi({
      description: "Number of days required for notice prior to cancellation."
    }),
    paymentDelay: Membership.shape.paymentDelay.openapi({
      description: "Delay in payment processing in days."
    }),
    paymentFrequency: Membership.shape.paymentFrequency.openapi({
      description: "Frequency of membership payments (e.g., monthly, yearly)."
    }),
  
    // Visit and Booking Pass
    passCountTotal: Membership.shape.passCount.openapi({
      description: "Total number of passes available for the membership."
    }),
    passCountUsed: z.number().optional().openapi({
      description: "Number of passes already used by the member.",
      example: 3
    }),
  
    // Location
    locationName: Location.shape.name.openapi({
      description: "Name of the location."
    }),
    locationShortName: Location.shape.shortName.openapi({
      description: "Short name of the location."
    }),
  
    // Status
    isPending: z.boolean().default(false).openapi({
      description: "Indicates whether the membership is pending."
    }),
    isActive: z.boolean().default(true).openapi({
      description: "Indicates whether the membership is active."
    }),
    isSuspended: z.boolean().default(false).openapi({
      description: "Indicates whether the membership is suspended."
    }),
    isExpired: z.boolean().default(false).openapi({
      description: "Indicates whether the membership is expired."
    }),
    isCancelled: z.boolean().default(false).openapi({
      description: "Indicates whether the membership is cancelled."
    }),
    cancellationReason: z.string().optional().openapi({
      description: "Optional reason for membership cancellation."
    }),
  
    // Dates
    startDateTime: z.date().transform((date) => date.toISOString()).openapi({
      description: "The start date and time of the membership contract.",
      example: "2024-01-01T12:00:00Z"
    }),
    endDateTime: z.date().transform((date) => date.toISOString()).optional().openapi({
      description: "The end date and time of the membership contract.",
      example: "2025-01-01T12:00:00Z"
    }),
    cancelDateTime: z.date().transform((date) => date.toISOString()).optional().openapi({
      description: "The date and time the contract was scheduled to be cancelled.",
      example: "2024-06-01T12:00:00Z"
    }),
    cancelledDateTime: z.date().transform((date) => date.toISOString()).optional().openapi({
      description: "The actual date and time when the membership was cancelled.",
      example: "2024-05-01T12:00:00Z"
    }),
  
    // Consent Form
    consentFormPublicCode: z.string().optional().openapi({
      description: "Public code for the consent form."
    }),
    consentForm: z.object({
      questions: z.array(z.object({
        questionId: z.string().openapi({
          description: "Unique identifier for the question.",
          example: "3x4MpL3+id$"
        }),
        question: z.string().openapi({
          description: "The consent question.",
          example: "Do you agree to the terms and conditions?"
        }),
        answer: z.string().openapi({
          description: "The user's answer to the consent question.",
          example: "Yes"
        })
      })).optional().openapi({
        description: "Array of consent form questions and answers."
      }),
      notificationDateTime: z.date().transform((date) => date.toISOString()).optional().openapi({
        description: "The date and time the consent form notification was sent.",
        example: "2024-04-01T12:00:00Z"
      }),
      signedDateTime: z.date().transform((date) => date.toISOString()).optional().openapi({
        description: "The date and time the consent form was signed.",
        example: "2024-04-02T12:00:00Z"
      }),
      signature: z.string().optional().openapi({
        description: "Signature provided on the consent form.",
        example: "John Doe"
      }),
      signatureIpAddress: z.string().optional().openapi({
        description: "IP address from which the consent form was signed.",
        example: "203.0.113.42"
      })
    }).optional().openapi({
      description: "Optional consent form data."
    }),
  
    // Migration
    migrationId: z.string().optional().openapi({
      description: "Identifier for the migration process."
    }),
    migrationPlatform: z.string().optional().openapi({
      description: "Platform used for migration."
    })
  })
];

export const Version = Versions.length - 1;
export const Prefix = "ctr";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
