import { z } from "zod";

export const days = z.enum([
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY"
]);

export const dayHours = z.object({ from: z.string(), to: z.string() });

export const weekHours = z.object({
  mon: z.array(dayHours),
  tue: z.array(dayHours),
  wed: z.array(dayHours),
  thu: z.array(dayHours),
  fri: z.array(dayHours),
  sat: z.array(dayHours),
  sun: z.array(dayHours),
});

export const specificHour = z.date().transform((date) => date.toISOString().substring(0, 13)).optional();