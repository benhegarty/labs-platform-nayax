import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/packages",
};

// APIs
import { GetRegistry } from "./apis/get-registry";
import { GetPackage } from "./apis/get-package";
import { GetPackageVersion } from "./apis/get-package-version";

export const API = {
  GetRegistry,
  GetPackage,
  GetPackageVersion
};

// Don't forget to add to ../index.ts