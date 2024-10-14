import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

export const ageGroupPricing = z.object({
  name: z.string(),
  staffedHoursOnly: z.boolean().optional(),
  peakHoursOnly: z.boolean().optional(),
  requireConsent: z.boolean().optional(),
  age: z.object({
    min: z.number(),
    max: z.number().optional(),
  }),
  cost: z.object({ 
    paymentAmount: z.number(),
    joiningFee1: z.number().optional(),
    joiningFee2: z.number().optional(),
    joiningFee3: z.number().optional(),
  })
});

export const membershipType = z.enum([
  "PIF",
  "FIXED",
  "ONGOING",
  "VISIT_PASS",
  "BOOKING_PASS",
  "TRIAL",
]);
