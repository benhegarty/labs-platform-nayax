import { z } from "zod";
import { generateId } from "@labs/id";

export const Versions = [
  z.object({ // 0
    // Links
    homeLocationId: z.string(),
    joinLocationId: z.string(),
    primaryPaymentMethodId: z.string(),

    // Status
    isInvited: z.boolean().default(false),
    isActive: z.boolean().default(false),
    isSuspended: z.boolean().default(false),
    isCancelled: z.boolean().default(false),
    isExpired: z.boolean().default(false),
    isBanned: z.boolean().default(false),
    isOverdue: z.boolean().default(false),
    inviteCode: z.string().default(generateId),

    // Details
    firstName: z.string(),
    lastName: z.string(),

    email: z.string().email(),
    name: z.string(),
    phone: z.string(),
    role: z.string(),
    dob: z.string(),

    address1: z.string(),
    address2: z.string(),
    suburb: z.string(),
    state: z.string(),
    postcode: z.number(),
    country: z.string(),

    // Financial
    failedDebitCount: z.number().default(0),
    balance: z.number().default(0),

    // Contacts
    emergencyContact: z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.string(),
      relation: z.string(),
    }),
    guardianContact: z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.string(),
      relation: z.string(),
    }),

    // Location
    locationName: z.string(),

    // CRM
    userType: z.enum(["MEMBER", "STAFF", "PT"]).default("MEMBER"),
    joinDateTime: z.date().transform((date) => date.toISOString()),
    pendingApprovalDateTime: z.date().transform((date) => date.toISOString()),
    onBoardStatus: z.enum(["LEAD", "LEAD_MEMBERSHIP", "PENDING_APPROVAL", "COMPLETE"]),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "usr";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;