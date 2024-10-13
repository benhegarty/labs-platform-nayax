import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/memberships",
};

// APIs
import { GetLocationMemberships } from "./apis/get-location-memberships";
import { ClaimVoucher } from "./apis/promotions/claim-voucher";

export const API = {
  GetLocationMemberships,
  ClaimVoucher,
};

// Don't forget to add to ../index.ts