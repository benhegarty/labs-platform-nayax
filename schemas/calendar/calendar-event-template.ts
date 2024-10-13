import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string(),

    // Details
    isActive: z.boolean(),
    className: z.string(),
    classDescription: z.string(),
    classDuration: z.number(),
    preBookDays: z.number(),
    hasVirtualClass: z.boolean(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "cat";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
