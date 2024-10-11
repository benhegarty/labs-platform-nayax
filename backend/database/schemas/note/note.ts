import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string(),
    addedByUserId: z.string(),

    // Details
    note: z.string(),
    addedBy: z.string(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "ptm";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
