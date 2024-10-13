import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { Membership } from "@labs/schemas";
wrapOpenApi(z);

export const GetLocationMemberships = api({
  method: Method.GET,
  path: "/location/{locationId}",
  title: "Location Memberships",
  description: "Get all active memberships for a location",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: Membership.Schema,
});

// Don't forget to add to ../index.ts
