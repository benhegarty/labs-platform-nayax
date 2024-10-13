import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string().optional(),
    locationId: z.string().optional(),
    roomId: z.string().optional(),
    userId: z.string().optional(),
    
    // Details
    name: z.string(),
    type: z.enum(["GROUP_FITNESS"])
  })
];

export const Version = Versions.length - 1;
export const Prefix = "cal";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
