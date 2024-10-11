import { z } from "zod";

export const Versions = [
  z.object({ // 0
    userId: z.string(),
    balance: z.number(),
    currency: z.string()
  })
];

export const Version = Versions.length - 1;
export const Prefix = "wlt";
export const Schema = Versions[Version];