import { z } from "zod";
import { cronDate } from "../lib/date";
import {
  promotionFixedPriceDiscount,
  promotionJoiningFee,
  promotionMemberCredit,
  promotionPercentageDiscount
} from "../lib/promotion";


export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string().optional(),

    // Cron
    cronNext: cronDate,
    cronFields: z.array(z.string()).default([
      "prelaunchDateTime",
      "startDateTime",
      "endDateTime"
    ]),

    // Details
    isTemplate: z.boolean().optional(),
    name: z.string(),
    membershipIds: z.array(z.string()),
    description: z.string(),
    modifiers: z.array(z.union([
      promotionPercentageDiscount,
      promotionFixedPriceDiscount,
      promotionJoiningFee,
      promotionMemberCredit
    ])),
    prelaunchDateTime: z.date().transform((date) => date.toISOString()),
    startDateTime: z.date().transform((date) => date.toISOString()),
    endDateTime: z.date().transform((date) => date.toISOString()).optional(),

    // Promo Codes
    promoCode: z.string().optional(),
    promoCodeTotal: z.number().optional(),
    promoCodeRemaining: z.number().optional(),

    // Web
    web: z.object({
      desktopBannerUrl: z.string().optional(),
      mobileBannerUrl: z.string().optional(),
      heading: z.string().optional(),
      subheading: z.string().optional(),
      paragraph: z.string().optional(),
    }),

    // Status
    isArchived: z.boolean().default(false),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "mbp";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;