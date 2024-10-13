import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),

    type: z.enum(["CONSENT_FORM", "HEALTH_QUESTIONNAIRE", "INJURY_QUESTIONNAIRE", "OTHER"]),
    questions: z.array(z.object({
      questionId: z.string(),
    }))
  })
];

export const Version = Versions.length - 1;
export const Prefix = "qsr";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;