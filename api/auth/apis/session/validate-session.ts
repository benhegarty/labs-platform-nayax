import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const ValidateSession = api({
  method: Method.POST,
  path: "/session/validate",
  title: "Validate Session",
  description: "Check if a session is valid",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  bodySchema: z.object({
    token: z.string(),
  }),
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
