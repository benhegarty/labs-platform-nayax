import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { Location } from "@labs/schemas";
wrapOpenApi(z);

export const GetLocationVisits = api({
  method: Method.GET,
  path: "/{locationId}/visits",
  title: "Location Visits",
  description: "Get the location visits",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  querySchema: z.object({
    startDate: z.string(),
    endDate: z.string(),
  }),
  responseSchema: Location.Schema,
});

// Don't forget to add to ../index.ts
