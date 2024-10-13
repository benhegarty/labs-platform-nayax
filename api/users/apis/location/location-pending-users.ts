import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { User } from "@labs/schemas";
wrapOpenApi(z);

export const GetLocationNewUsers = api({
  method: Method.GET,
  path: "/location/{locationId}/pending",
  title: "Location Pending Users",
  description: "Get the pending users at a location",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: User.Schema,
});

// Don't forget to add to ../index.ts
