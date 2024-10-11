import { z } from "zod";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string(),
    locationId: z.string().optional(),
    userId: z.string().optional(),
    contractId: z.string().optional(),
    transactionId: z.string().optional(),
    settlementReportId: z.string().optional(),

    // Details
    name: z.string(),
    description: z.string().optional(),
    type: z.enum(["DOCUMENT", "MEDIA"]).optional(),
    bucketKey: z.string().optional(),
    tags: z.array(z.string()).optional(),

    // Migration
    migrationId: z.string().optional(),
    migrationPlatform: z.string().optional(),
  })
];

export const Version = Versions.length - 1;
export const Prefix = "doc";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
