import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const PutRole = api({
  method: Method.PUT,
  path: "/role",
  title: "Create a Role",
  description: "Create a new role",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
