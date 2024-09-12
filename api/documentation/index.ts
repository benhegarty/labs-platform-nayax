import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/docs",
};

// APIs
import { OpenAPI } from "./apis/openapi";

export const API = {
  OpenAPI
};

// Don't forget to add to ../index.ts