import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const ListAuthGroupFeatures = api({
  method: Method.GET,
  path: "/features/{authGroupId}",
  title: "AuthGroup Features",
  description: "List all features for an AuthGroup",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
