import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { Location } from "@labs/schemas";
wrapOpenApi(z);

export const GetLocation = api({
  method: Method.GET,
  path: "/{locationId}",
  title: "Get Location",
  description: "Get the location details",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: Location.Schema,
});

// Don't forget to add to ../index.ts
