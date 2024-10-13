import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const CreateCrossLogin = api({
  method: Method.GET,
  path: "/session/cross-login/{authGroupId}",
  title: "Create Cross Login",
  description: "Create a cross login session to allow a user to login to another system",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
