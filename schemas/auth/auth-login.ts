import { z } from "zod";
import { authGroups } from "../lib/auth";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),

    // Details
    type: z.enum(["email", "sms", "app"]),
    authGroup: authGroups,
    expiry: z.date().transform((date) => date.toISOString()),
    crossLoginAuthGroup: z.string().optional(),
    crossLoginToken: z.string().optional(),
    crossLoginExpiry: z.date().transform((date) => date.toISOString()),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "atl";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;