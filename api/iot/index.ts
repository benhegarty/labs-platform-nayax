import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/iot",
};

// Websocket events
import { Connect } from "./websocket/connect";
import { CheckCode } from "./websocket/check-code";
import { OfflineDb } from "./websocket/offline-db";

export const Websocket = {
  Connect,
  CheckCode,
  OfflineDb
};

// APIs
import { GetDevices } from "./apis/get-devices";

export const API = {
  GetDevices
};

// Don't forget to add to ../index.ts