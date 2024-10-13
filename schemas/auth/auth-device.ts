import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),

    // Details
    name: z.string().optional(),
    identifier: z.string().optional(),

    lastLogin: z.date().transform((date) => date.toISOString()),
    registrationDate: z.date().transform((date) => date.toISOString()),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "atd";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;