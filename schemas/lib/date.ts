import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

export const date = z
  .union([z.string(), z.date()]) // Accepts either a string or a Date object
  .transform((value) => {
    // If it's a string, attempt to parse it into a Date object
    const date = typeof value === "string" ? new Date(value) : value;
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }
    // Convert the Date object to an ISO string
    return date.toISOString();
  }).openapi({
    example: "2024-10-14T10:00:00.000Z",
  });

export const dateYYYYMMDD = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Expected format: YYYY-MM-DD")
  .transform((value) => {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }
    // If you want to keep it as a string in YYYY-MM-DD format, return the value itself
    return value;
  }).openapi({
    example: "1990-01-25",
  });

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

export const duration = z.object({
  value: z.number(),
  unit: z.enum(["DAY", "WEEK", "FORTNIGHT", "MONTH", "YEAR"])
});