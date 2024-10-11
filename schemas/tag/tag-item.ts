import { z } from "zod";
import { tagCategory } from "../lib/tag";

export const Prefix = "tgi";

export const Versions = [
  z.object({ // 0
    // Links
    tagId: z.string(),
    userId: z.string().optional(),
    locationId: z.string().optional(),
    
    // Details
    category: tagCategory,
    metadata: z.record(z.string()).optional(),
  })
];

export const Version = Versions.length - 1;
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
