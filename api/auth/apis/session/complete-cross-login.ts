import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const CompleteCrossLogin = api({
  method: Method.POST,
  path: "/session/cross-login/complete",
  title: "Complete Cross Login",
  description: "Complete a cross login session to allow a user to login to another system",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  bodySchema: z.object({
    crossLoginToken: z.string(),
  }),
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
