import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/contracts",
};

// APIs
import { GetContract } from "./apis/get-contract";

export const API = {
  GetContract
};

// Don't forget to add to ../index.ts