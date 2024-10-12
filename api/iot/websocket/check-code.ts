import { z } from "zod";
import { AuthType, Method, websocket } from "@labs/core.api";

export const CheckCode = websocket({
  method: Method.POST,
  path: "/code",
  title: "Check Code",
  description: "Check if the access code is valid",
  authType: AuthType.VIVA,
  bodySchema: z.object({
    t: z.literal("code"),
    code: z.string().max(32),
    hasImage: z.boolean().optional(),
    offline: z.boolean().optional(),
    seq: z.number().int(),
  }).strict(),
  responseSchema: z.object({
    t: z.literal("code"),
    allow: z.boolean(),
    putUrl: z.string().max(256).optional(),
    seq: z.number().int(),
  })
});

// Don't forget to add to ../index.ts