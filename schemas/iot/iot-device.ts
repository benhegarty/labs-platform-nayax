import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string(),

    // Details
    name: z.string(),
    type: z.enum(["ACCESS", "BEACON", "RADIO"]),
    macAddress: z.string().optional(),
    authToken: z.string().optional(),
    firmwareVersion: z.string().optional(),
    hardwareVersion: z.string().optional(),

    // Connection
    isOnline: z.boolean().default(false),
    lastSeen: z.date().transform((date) => date.toISOString()).optional(),
    connectionId: z.string().optional(),
    connectionIp: z.string().optional(),

    // Migration
    migrationId: z.string().optional(),
    migrationPlatform: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "iot";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;