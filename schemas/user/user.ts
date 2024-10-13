import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

import { generateId } from "@labs/id";
import { internationalPhone } from "../lib/phone";
import { gender } from "../lib/gender";
import { Schema as Location } from "../brand/location";
import { cronDate } from "../lib/date";

export const Versions = [
  z.object({ // 0
    // Links
    homeLocationId: z.string(),
    joinLocationId: z.string(),
    primaryPaymentMethodId: z.string(),

    // Cron
    cronNext: cronDate.optional(),
    cronFields: z.array(z.string()).default([
      "dob"
    ]),

    // Status
    shortId: z.string().optional(),
    isInvited: z.boolean().default(false),
    isActive: z.boolean().default(false),
    isSuspended: z.boolean().default(false),
    isCancelled: z.boolean().default(false),
    isExpired: z.boolean().default(false),
    isBanned: z.boolean().default(false),
    isOverdue: z.boolean().default(false),
    inviteCode: z.string().default(generateId),

    // Details
    type: z.enum([
      "MEMBER", 
      "STAFF", 
      "PT", 
      "CONTRACTOR",
      "INSTRUCTOR",
    ]).default("MEMBER"),
    joinDateTime: z.date().transform((date) => date.toISOString()),
    pendingApprovalDateTime: z.date().transform((date) => date.toISOString()),
    lastVisitDateTime: z.date().transform((date) => date.toISOString()).optional(),

    // Personal
    firstName: z.string(),
    lastName: z.string(),

    email: z.string().email(),
    phone: internationalPhone,
    phone2: internationalPhone.optional(),
    dob: z.string(),
    gender: gender,

    address1: z.string().optional(),
    address2: z.string().optional(),
    suburb: z.string().optional(),
    state: z.string().optional(),
    postcode: z.number().optional(),
    country: z.string().optional(),

    // Financial
    failedDebitCount: z.number().default(0),
    accountCredit: z.number().default(0), // Negitive = credit

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
    homeLocationName: Location.shape.name,
    joinLocationName: Location.shape.name,

    // Auth
    authenticatorSecret: z.string().optional(),
    authenticatorValidated: z.boolean().default(false),
    authRoles: z.array(z.string()).default([]),

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