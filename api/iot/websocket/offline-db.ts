import { z } from "zod";
import { AuthType, Method, websocket } from "@labs/core.api";

export const OfflineDb = websocket({
  method: Method.POST,
  path: "/offline-db",
  title: "Offline DB",
  description: "Download the offline database",
  authType: AuthType.VIVA,
  bodySchema: z.object({
    t: z.literal("offline-db"),
    filter: z.string().length(1),
    seq: z.number().int(),
  }).strict(),
  responseSchema: z.object({
    t: z.literal("offline-db"),
    filter: z.string().length(1),
    dbUrl: z.string().max(256),
    seq: z.number().int(),
  })
});

// Don't forget to add to ../index.ts