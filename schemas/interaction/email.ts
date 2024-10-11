import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),
    locationId: z.string(),

    // Details
    messageId: z.string(),
    from: z.string().email(),
    to: z.string().email(),
    subject: z.string(),
    body: z.string(),
    provider: z.enum(["SES"]).default("SES"),

    // Migration
    migrationId: z.string().optional(),
    migrationPlatform: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "uie"; // user interaction email
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
