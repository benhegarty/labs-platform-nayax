import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),

    // Details
    type: z.enum(["CONSENT_FORM", "HEALTH_QUESTIONNAIRE", "INJURY_QUESTIONNAIRE", "OTHER"]),
    question: z.string(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "qsn";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;