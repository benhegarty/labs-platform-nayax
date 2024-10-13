import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const Provision2FA = api({
  method: Method.GET,
  path: "/login/{loginId}/2fa/provision",
  title: "Provision 2FA",
  description: "Provision 2FA for a user",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
