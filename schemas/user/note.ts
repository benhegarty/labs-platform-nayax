import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),
    addedByUserId: z.string(),

    // Details
    note: z.string(),
    addedBy: z.string().default("SYSTEM"),

    // Migration
    migrationId: z.string().optional(),
    migrationPlatform: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "uin"; // user interaction note
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
