import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),

    // Details
    name: z.string(),
    description: z.string(),
    features: z.array(z.string()),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "mbp";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;