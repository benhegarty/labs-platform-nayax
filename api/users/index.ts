import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/users",
};

// APIs
import { GetUser } from "./apis/get-user";
import { GetLocationNewUsers } from "./apis/location/location-new-users";
import { JoinInitial } from "./apis/joining/join-1-initial";
import { JoinMembership } from "./apis/joining/join-2-membership";
import { JoinDetails } from "./apis/joining/join-3-details";

export const API = {
  GetUser,
  GetLocationNewUsers,
  JoinInitial,
  JoinMembership,
  JoinDetails
};

// Don't forget to add to ../index.ts