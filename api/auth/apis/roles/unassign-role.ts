import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const UnassignRole = api({
  method: Method.POST,
  path: "/{userId}/role/{roleId}/unassign",
  title: "Unassign Role",
  description: "Unassign a role from a user",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
