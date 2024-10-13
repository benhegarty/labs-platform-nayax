import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const Logout = api({
  method: Method.GET,
  path: "/session/logout",
  title: "Logout",
  description: "Logout a user",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
