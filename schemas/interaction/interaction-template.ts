import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string().optional(),

    // Details
    subject: z.string().optional(),
    body: z.string(),
    emailTemplateFileKey: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "uit";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
