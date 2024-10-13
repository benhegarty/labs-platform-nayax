import { z } from "zod";

export const Versions = [
  z.object({ // 0
    name: z.string(),
    features: z.record(z.any()),
    sessionLifeHoursOverride: z.number().optional(),
    permitMultipleSessionsOverride: z.boolean().optional(),
    archived: z.boolean().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "atr";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;