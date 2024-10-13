import { z } from "zod";
import { days } from "../lib/date";

export const Versions = [
  z.object({ // 0
    // Links
    calendarId: z.string(),
    brandId: z.string().optional(),
    locationId: z.string().optional(),

    // Details
    className: z.string(),
    classDescription: z.string(),
    classDuration: z.number(),
    preBookDays: z.number(),
    hasVirtualClass: z.boolean(),
    capacity: z.number().optional(),
    capacityUsed: z.number().optional(),
    capacityWaitlist: z.number().optional(),
    
    // Relative
    isLive: z.boolean().default(false),
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
