import { z } from "zod";
import { debtCollectionType, weekHours } from "../common";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),

    // Status
    isOpen: z.boolean().default(true),
    isTemporarilyClosed: z.boolean().default(false),
    isPermanentlyClosed: z.boolean().default(false),

    temporaryCloseStartDateTime: z.string().optional(),
    temporaryCloseEndDateTime: z.string().optional(),
    temporaryCloseReason: z.string().optional(),
    
    // Details
    name: z.string(),
    shortName: z.string(),
    emailPublic: z.string().email().optional(),
    emailBusiness: z.string().email(),
    emailFrom: z.string().email(),
    timezone: z.string().optional(),
    abn: z.string().optional(),

    hasGroupFitness: z.boolean().default(false),
    is24Hours: z.boolean().default(false),

    // Phone Numbers
    phoneNumberOrigin: z.string().optional(),
    phoneNumberPublic: z.string().optional(),

    // Address
    address1: z.string().optional(),
    address2: z.string().optional(),
    suburb: z.string().optional(),
    state: z.string().optional(),
    postcode: z.number().optional(),
    country: z.string().optional(),

    // LatLong
    geoLat: z.number().optional(),
    geoLng: z.number().optional(),

    // Financial
    bankName: z.string().optional(),
    bankAccountNumber: z.string().optional(),
    bankBSB: z.string().optional(),
    settlementDescriptor: z.string().optional(),
    debtCollectionType: debtCollectionType.default("DISABLED"),

    hours: z.object({
      open: weekHours.optional(),
      peak: weekHours.optional(),
      staffed: weekHours.optional(),
      creche: weekHours.optional(),
    }).optional(),

    thirdParty: z.object({
      name: z.string().optional(),
      url: z.string().optional(),
    }).optional()
  })
];

export const Version = Versions.length - 1;
export const Prefix = "loc";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;