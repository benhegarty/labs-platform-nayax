import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

import { generateId } from "@labs/id";
import { internationalPhone } from "../lib/phone";

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
    type: z.enum(["MEMBER", "STAFF", "PT"]).default("MEMBER"),
    joinDateTime: z.date().transform((date) => date.toISOString()),
    pendingApprovalDateTime: z.date().transform((date) => date.toISOString()),

    // Personal
    firstName: z.string(),
    lastName: z.string(),

    email: z.string().email(),
    phone: internationalPhone,
    phone2: internationalPhone.optional(),
    dob: z.string(),

    address1: z.string().optional(),
    address2: z.string().optional(),
    suburb: z.string().optional(),
    state: z.string().optional(),
    postcode: z.number().optional(),
    country: z.string().optional(),

    // Financial
    failedDebitCount: z.number().default(0),
    balance: z.number().default(0),

    // Contacts
    emergencyContacts: z.array(z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.string(),
      relation: z.string(),
    })).optional(),

    guardianContact: z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.string(),
      relation: z.string(),
    }),

    // Location
    locationName: z.string(),

    // CRM
    onBoardStatus: z.enum([
      "LEAD", 
      "LEAD_MEMBERSHIP", 
      "PENDING_APPROVAL", 
      "COMPLETE", 
      "AT_RISK", 
      "CANCELLED", 
      "EXPIRED"
    ]).default("LEAD"),

    // Migration
    migrationId: z.string().optional(),
    migrationPlatform: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "usr";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;