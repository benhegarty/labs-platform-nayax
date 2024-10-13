import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/brands",
};

// APIs
import { GetLocation } from "./apis/get-brand";
import { ListLocations } from "./apis/list-brand-locations";

export const API = {
  GetLocation,
  ListLocations
};

// Don't forget to add to ../index.ts