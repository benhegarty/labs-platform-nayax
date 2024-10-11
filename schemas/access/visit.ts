import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),
    contractId: z.string(),
    locationId: z.string(),
    accessPointId: z.string(),
    
    // Details
    type: z.enum(["SCAN", "APP"]),
    accessCode: z.string(),
    accessPointName: z.string(),
    locationName: z.string(),
    locationState: z.string(),
    isOffline: z.boolean().default(false),
    isAllowed: z.boolean().default(false),
    deviceLocalIp: z.string(),
    devicePublicIp: z.string(),

    // User Details
    userFirstName: z.string(),
    userLastName: z.string(),
    userEmail: z.string().email(),
    userPhone: z.string(),
    userDob: z.string(),
    userPostCode: z.number(),
    userHomeLocationId: z.string(),
    userHomeLocationName: z.string(),

    // Contract Details
    membershipId: z.string(),
    membershipName: z.string(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "acv";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;