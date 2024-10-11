import { z } from "zod";
import { days } from "../lib/date";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string(),
    calendarId: z.string(),
    templateId: z.string().optional(),
    
    // Relative
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    weekCycle: z.number().optional(),
    day: days.optional(),

    // Absolute
    startDateTime: z.string().optional(),
    endDateTime: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "cae";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
