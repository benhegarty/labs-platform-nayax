import { z } from "zod";
import { authGroups } from "../lib/auth";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),

    // Details
    type: z.enum(["email", "sms", "app"]),
    authGroup: authGroups,
    stage: z.enum(["otp", "2fa"]),
    otpCode: z.string().optional(),
    expiry: z.date().transform((date) => date.toISOString()),
    provision2FA: z.boolean().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "ats";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;