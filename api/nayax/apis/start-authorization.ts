import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

import { generateId, getIdTimestamp } from "@labs/id";

const ID = generateId();

export const StartAuthorization = api({
  method: Method.POST,
  path: "start-authorization",
  title: "Start Authorization",
  description: "Start authorization of a static QR code.",
  cors: true,
  authType: AuthType.API_KEY,
  bodySchema: z.object({
    userId: z.string().openapi({ description: "The user ID.", example: ID }),
  }),
  responseSchema: z.object({
    authorizationId: z.string().openapi({ description: "The authorization ID.", example: getIdTimestamp(ID).toISOString() }),
  }),
});

// Don't forget to add to ../index.ts
