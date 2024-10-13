import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string(),

    studioName: z.string(),
    description: z.string(),
    isArchived: z.boolean().default(false),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "lcr";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
