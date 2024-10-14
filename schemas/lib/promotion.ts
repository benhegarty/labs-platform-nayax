import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

export const promotionPercentageDiscount = z.object({
  type: z.string().default("PERCENTAGE"),
  value: z.number().min(0).max(100),
  debitIndexes: z.array(
    z.number()
  ).optional(),
});

export const promotionFixedPriceDiscount = z.object({
  type: z.string().default("FIXED_PRICE"),
  value: z.number(),
  debitIndexes: z.array(
    z.number()
  ).optional(),
});

export const promotionJoiningFee = z.object({
  type: z.string().default("JOINING_FEE"),
  joiningFee1: z.number().default(0),
  joiningFee2: z.number().default(0),
  joiningFee3: z.number().default(0),
});

export const promotionMemberCredit = z.object({
  type: z.string().default("CREDIT"),
  value: z.number().default(0)
});