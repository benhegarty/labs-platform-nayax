import { z } from "zod";

export const ageGroup = z.enum([
  "CHILD",
  "YOUTH",
  "JUNIOR",
  "ADULT",
  "SENIOR",
]);

export const membershipType = z.enum([
  "PIF",
  "FIXED",
  "ONGOING",
]);
