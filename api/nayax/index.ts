import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/nayax",
};

// APIs
import { Authorization } from "./apis/staticqr-authorization";
import { Sale } from "./apis/staticqr-sale";
import { Refund } from "./apis/staticqr-refund";
import { Cancel } from "./apis/staticqr-cancel";
import { Void } from "./apis/staticqr-void";
import { Settlement } from "./apis/staticqr-settlement";

export const API = {
  Authorization,
  Settlement,
  Cancel,
  Sale,
  Void,
  Refund,
};

// Don't forget to add to ../index.ts