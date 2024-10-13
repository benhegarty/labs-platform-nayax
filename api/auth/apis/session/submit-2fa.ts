import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const Submit2FA = api({
  method: Method.POST,
  path: "/login/{loginId}/2fa/submit",
  title: "Submit 2FA",
  description: "Submit 2FA for verification",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  bodySchema: z.object({
    code: z.string().length(6),
  }),
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
