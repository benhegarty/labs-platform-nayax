import { z } from "zod";

export const Versions = [
  z.object({ // 0
    usrId: z.string(),
    locId: z.string(),
    authorizationConfirmed: z.boolean().default(false),
    settled: z.boolean().default(false),
    cancelled: z.boolean().default(false),

    amount: z.number(),
    currency: z.string(),
    currencyNumeric: z.number(),

    siteId: z.number(),
    machineId: z.string(),
    machineName: z.string(),
    groupId: z.string(),
    operatorId: z.string(),
    zipCode: z.number(),
    country: z.string()
  })
];

export const Version = Versions.length - 1;
export const Prefix = "txw";
export const Schema = Versions[Version];