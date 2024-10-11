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
    message: z.string(),
    provider: z.enum(["SMSGLOBAL"]).default("SMSGLOBAL"),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "sms";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
