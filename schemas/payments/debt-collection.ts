import { z } from "zod";
import { debtCollectionType } from "../lib/debt-collection";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string(),
    userId: z.string(),
    contractId: z.string(),

    // Status
    aliasUserId: z.string(),
    isApproved: z.boolean().default(false),
    isSent: z.boolean().default(false),
    isRecovered: z.boolean().default(false),
    isFixedTermContract: z.boolean().default(false),
    debtCollectionType: debtCollectionType,

    // User
    user: z.object({
      firstName: z.string(),
      lastName: z.string(),
      dob: z.string(),
      email: z.string().email(),
      phone: z.string(),
      postCode: z.number(),
    }),

    // Financial
    netAmount: z.number(),
    originalAmount: z.number(),
    outstandingAmount: z.number(),
    serviceFeeAmount: z.number().default(0),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "dct";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
