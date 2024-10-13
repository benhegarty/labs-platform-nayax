import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const AssignRole = api({
  method: Method.GET,
  path: "/{userId}/role/{roleId}/assign",
  title: "Assign Role",
  description: "Assign a role from a user",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
