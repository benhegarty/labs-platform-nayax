import { z } from "zod";
import { tagCategory } from "../lib/tag";

export const Prefix = "tgt";

export const Versions = [
  z.object({ // 0
    // Links
    userId: z.string().optional(),
    locationId: z.string().optional(),
    
    // Details
    name: z.string().optional(),
    color: z.string().optional(),
    category: tagCategory,
  })
];

export const Version = Versions.length - 1;
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
