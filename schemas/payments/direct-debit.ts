import { z } from "zod";
import { date } from "../lib/date";

import { Schema as Location } from "../brand/location";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string(),
    userId: z.string(),
    contractId: z.string(),
    payMethodId: z.string(),
    settlementReportId: z.string().optional(),

    // Cron
    cronNext: date,
    cronFields: z.array(z.string()).default([
      "debitDate",
    ]),

    // Details
    aliasUserId: z.string(),
    debitDate: z.date().transform((date) => date.toISOString()),
    contractDebitIndex: z.number(),
    status: z.enum(["SCHEDULED", "PROCESSING", "PAID", "FAILED"]),
    locationName: Location.shape.name,
    locationShortName: Location.shape.shortName,

    // Amounts
    amountTotal: z.number(),
    amountContract: z.number().optional(),
    amountOverdueRecovery: z.number().optional(),
    amountAccountCredit: z.number().optional(),
    amountSuspensionAdjustment: z.number().optional(),
    amountCancellationFee: z.number().optional(),
    amountRejectionFee: z.number().optional(),
    amountJoiningFee: z.number().optional(),
    amountOther: z.number().optional(),

    // Migration
    migrationId: z.string().optional(),
    migrationPlatform: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "txd";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;