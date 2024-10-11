import { generateId } from "@labs/id";
import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),
    locationId: z.string(),

    // Details
    messageId: z.string(),
    from: z.string(),
    to: z.string(),
    body: z.string(),
    provider: z.enum(["SMSGLOBAL"]).default("SMSGLOBAL"),
    publicId: z.string().default(generateId()),

    // Migration
    migrationId: z.string().optional(),
    migrationPlatform: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "uis"; // user interaction sms
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
