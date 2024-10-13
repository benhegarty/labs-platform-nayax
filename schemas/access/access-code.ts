import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),

    // Details
    type: z.enum(["fob", "app", "pas"]),
    code: z.string(),
    isLost: z.boolean().optional(),
    lostReason: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "acc";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
