import { z } from "zod";
import { auditType } from "../lib/audit";

export const Versions = [
  z.object({ // 0
    // Links
    locationId: z.string(),
    memberId: z.string(),

    // Details
    type: auditType,
  })
];

export const Version = Versions.length - 1;
export const Prefix = "aud";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
