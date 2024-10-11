import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/access",
};

// APIs
import { WebsocketConnect } from "./apis/ws-connect";

export const API = {
  WebsocketConnect
};

// Websocket events
import { CheckAccessCode } from "./websocket/check-access-code";

export const Websocket = {
  CheckAccessCode
};

// Don't forget to add to ../index.ts