import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { Location } from "@labs/schemas";
wrapOpenApi(z);

export const PutLocation = api({
  method: Method.PUT,
  path: "/{brandId}",
  title: "Put Location",
  description: "Put a new location",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  responseSchema: z.array(Location.Schema),
});

// Don't forget to add to ../index.ts
