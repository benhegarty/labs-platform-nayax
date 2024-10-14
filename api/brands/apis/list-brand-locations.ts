import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { Location } from "@labs/schemas";
wrapOpenApi(z);

export const responseSchema = z.array(Location.Schema.pick({
  name: true,
  shortName: true,
  emailPublic: true,
  phoneNumberPublic: true,
  isOpen: true,
  hasGroupFitness: true,
  is24Hours: true,
  address1: true,
  address2: true,
  suburb: true,
  state: true,
  postcode: true,
  country: true,
  geoLat: true,
  geoLng: true,
  timezone: true,
  hours: true,
}));

export const ListLocations = api({
  method: Method.GET,
  path: "/{brandId}",
  title: "List Brand Locations",
  description: "Get all brand locations",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  responseSchema: responseSchema,
});

// Don't forget to add to ../index.ts
