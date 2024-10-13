import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { User } from "@labs/schemas";
wrapOpenApi(z);

export const GetUser = api({
  method: Method.GET,
  path: "/user/{userId}",
  title: "Get User",
  description: "Get the user details",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: User.Schema,
});

// Don't forget to add to ../index.ts
