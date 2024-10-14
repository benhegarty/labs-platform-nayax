import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

import { generateId } from "@labs/id";
import { internationalPhone } from "../lib/phone";
import { gender } from "../lib/gender";
import { Schema as Location } from "../brand/location";
import { guid, id } from "../lib/id";
import { date, dateYYYYMMDD } from "../lib/date";

export const Versions = [
  z.object({
    // Links
    id: id.openapi({
      description: "Unique identifier for the user."
    }),
    homeLocationId: id.openapi({
      description: "Unique identifier for the home location."
    }),
    joinLocationId: id.openapi({
      description: "Unique identifier for the join location."
    }),
    primaryPaymentMethodId: id.openapi({
      description: "Unique identifier for the primary payment method."
    }),
  
    // Status
    shortId: z.string().optional().openapi({
      example: "SHRT12345",
      description: "Optional short identifier."
    }),
    isInvited: z.boolean().default(false).openapi({
      example: false,
      description: "Indicates if the user has been invited."
    }),
    isActive: z.boolean().default(false).openapi({
      example: true,
      description: "Indicates if the user is currently active."
    }),
    isSuspended: z.boolean().default(false).openapi({
      example: false,
      description: "Indicates if the user is suspended."
    }),
    isCancelled: z.boolean().default(false).openapi({
      example: false,
      description: "Indicates if the user's account is cancelled."
    }),
    isExpired: z.boolean().default(false).openapi({
      example: false,
      description: "Indicates if the user's account has expired."
    }),
    isBanned: z.boolean().default(false).openapi({
      example: false,
      description: "Indicates if the user is banned."
    }),
    isOverdue: z.boolean().default(false).openapi({
      example: false,
      description: "Indicates if the user's account is overdue."
    }),
    inviteCode: z.string().default(generateId).openapi({
      example: "3x4MpL3+id$",
      description: "Invitation code generated for the user."
    }),
  
    // Details
    type: z.enum([
      "MEMBER", 
      "STAFF", 
      "PT", 
      "CONTRACTOR", 
      "INSTRUCTOR"
    ]).default("MEMBER").openapi({
      example: "MEMBER",
      description: "Type of user account."
    }),
    joinDateTime: date.openapi({
      description: "Date and time when the user joined, in ISO format."
    }),
    pendingApprovalDateTime: date.optional().openapi({
      example: "2023-10-10T12:00:00.000Z",
      description: "Date and time when the user's approval is pending, in ISO format."
    }),
    lastVisitDateTime: date.optional().openapi({
      example: "2023-10-13T12:00:00.000Z",
      description: "Last recorded visit date and time, in ISO format."
    }),
  
    // Personal
    firstName: z.string().openapi({
      example: "John",
      description: "User's first name."
    }),
    lastName: z.string().openapi({
      example: "Doe",
      description: "User's last name."
    }),
    email: z.string().email().openapi({
      example: "john.doe@example.com",
      description: "User's email address."
    }),
    phone: internationalPhone.openapi({
      example: "+61 2 1234 5678",
      description: "Primary international phone number of the user."
    }),
    phone2: internationalPhone.optional().openapi({
      example: "+61 3 8765 4321",
      description: "Optional secondary phone number."
    }),
    dob: dateYYYYMMDD.openapi({
      example: "1990-01-01",
      description: "User's date of birth."
    }),
    gender: gender.openapi({
      example: "MALE",
      description: "User's gender."
    }),
  
    address1: z.string().optional().openapi({
      example: "123 Main St",
      description: "Primary address line of the user."
    }),
    address2: z.string().optional().openapi({
      example: "Unit 4",
      description: "Secondary address line of the user."
    }),
    suburb: z.string().optional().openapi({
      example: "Sydney",
      description: "Suburb or city of the user's address."
    }),
    state: z.string().optional().openapi({
      example: "NSW",
      description: "State or province of the user's address."
    }),
    postcode: z.number().optional().openapi({
      example: 2000,
      description: "Postal code of the user's address."
    }),
    country: z.string().optional().openapi({
      example: "Australia",
      description: "Country of the user's address."
    }),
  
    // Financial
    failedDebitCount: z.number().default(0).openapi({
      example: 0,
      description: "Number of failed debit attempts."
    }),
    accountCredit: z.number().default(0).openapi({
      example: -50.0,
      description: "Account credit balance. Negative value indicates credit."
    }),
  
    // Contacts
    emergencyContacts: z.array(z.object({
      name: z.string().openapi({
        example: "Jane Doe",
        description: "Emergency contact's name."
      }),
      email: z.string().email().openapi({
        example: "jane.doe@example.com",
        description: "Emergency contact's email address."
      }),
      phone: z.string().openapi({
        example: "+61 2 8765 4321",
        description: "Emergency contact's phone number."
      }),
      relation: z.string().openapi({
        example: "Spouse",
        description: "Relationship of the emergency contact to the user."
      })
    })).optional().openapi({
      description: "List of emergency contacts."
    }),
  
    guardianContact: z.object({
      name: z.string().openapi({
        example: "Jack Doe",
        description: "Guardian's name."
      }),
      email: z.string().email().openapi({
        example: "jack.doe@example.com",
        description: "Guardian's email address."
      }),
      phone: z.string().openapi({
        example: "+61 2 7654 3210",
        description: "Guardian's phone number."
      }),
      relation: z.string().openapi({
        example: "Father",
        description: "Relationship of the guardian to the user."
      })
    }).openapi({
      description: "Guardian contact information."
    }),
  
    // Location
    homeLocationName: Location.shape.name.openapi({
      description: "Name of the user's home location."
    }),
    joinLocationName: Location.shape.name.openapi({
      example: "Melbourne Gym",
      description: "Name of the user's join location."
    }),
  
    // Auth
    authenticatorSecret: z.string().optional().openapi({
      example: "ABC123XYZ",
      description: "Authenticator secret for two-factor authentication."
    }),
    authenticatorValidated: z.boolean().default(false).openapi({
      example: false,
      description: "Indicates if the user's authenticator has been validated."
    }),
    authRoles: z.array(z.string()).default([]).openapi({
      example: ["ADMIN", "USER"],
      description: "List of authentication roles assigned to the user."
    }),
  
    // CRM
    onBoardStatus: z.enum([
      "LEAD", 
      "LEAD_MEMBERSHIP", 
      "PENDING_APPROVAL", 
      "COMPLETE", 
      "AT_RISK", 
      "CANCELLED", 
      "EXPIRED"
    ]).default("COMPLETE").openapi({
      example: "COMPLETE",
      description: "Onboarding status of the user."
    }),
  
    // Migration
    migrationId: guid.optional().openapi({
      description: "Optional migration ID for the user."
    }),
    migrationDateTime: z.date().optional().openapi({
      example: "2023-10-10T10:00:00.000Z",
      description: "Optional migration date and time in ISO format."
    }),
    migrationPlatform: z.string().optional().openapi({
      example: "OldCRM",
      description: "Platform from which the user migrated."
    })
  })
];

export const Version = Versions.length - 1;
export const Prefix = "usr";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;