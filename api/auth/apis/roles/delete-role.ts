import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const DeleteRole = api({
  method: Method.DELETE,
  path: "/role/{roleId}",
  title: "Delete Role",
  description: "Delete a role",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
