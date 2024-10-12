import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string(),
    deviceId: z.string(),

    // Details
    name: z.string(),
    namePublic: z.string(),
    nameShort: z.string().optional(),
    geoLat: z.number().optional(),
    geoLng: z.number().optional(),
    locationName: z.string(),
    swipeMessageText: z.string().optional(),
    errorMessageText: z.string().optional(),
    doorImageUrl: z.string().optional(),

    isEnabled: z.boolean().default(true),
    isPublicWatch: z.boolean().default(false),
    isPublicApp: z.boolean().default(false),

    relays: z.array(z.object({
      name: z.string(),
      relayNumber: z.string().optional(),
      triggerUrl: z.string().optional(),
      triggerTimeMs: z.boolean().optional(),
    })).optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "acp";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
