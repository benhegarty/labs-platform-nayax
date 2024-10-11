import { z } from "zod";

export const Versions = [
  z.object({ // 0
    name: z.string(),
    shortName: z.string(),
    signupUrl: z.string().optional(),
    theme: z.record(z.any()).optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "bnd";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;