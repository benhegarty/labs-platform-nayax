import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    
    // Details
    name: z.string(),
    staffOnly: z.boolean().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "acg";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
