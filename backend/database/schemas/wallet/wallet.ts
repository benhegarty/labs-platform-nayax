import { z } from "zod";
import { User } from "../user";

export const Versions = [
  z.object({ // 0
    [User.Prefix]: z.string(),
    balance: z.number(),
    currency: z.string()
  })
];

export const Version = Versions.length - 1;
export const Prefix = "wlt";
export const Schema = Versions[Version];