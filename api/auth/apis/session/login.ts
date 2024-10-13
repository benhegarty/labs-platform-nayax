import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const Login = api({
  method: Method.POST,
  path: "/login",
  title: "Login",
  description: "Login to the HUB",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  bodySchema: z.object({
    contact: z.string(),
  }),
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
