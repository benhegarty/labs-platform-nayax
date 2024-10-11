import { z } from "zod";

export const Versions = [
  z.object({ // 0
    nayaxCode: z.number(),
    name: z.string(),
    amount: z.number(),
    currency: z.string()
  })
];

export const Version = Versions.length - 1;
export const Prefix = "wpt";
export const Schema = Versions[Version];