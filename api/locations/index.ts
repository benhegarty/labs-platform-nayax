import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/locations",
};

// APIs
import { GetLocation } from "./apis/get-location";
import { ListLocations } from "./apis/list-locations";

export const API = {
  GetLocation,
  ListLocations
};

// Don't forget to add to ../index.ts