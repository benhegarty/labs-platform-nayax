import { APIDefinition, AuthType, ServiceDefinition } from "@labs/core.api/types";
import type { BackEndAPI, BackEndService } from "./types";
export { default as httpError } from "http-errors";
export * from "./types";

export function backendService<
  APIs extends Record<string, APIDefinition>,
>(service: { Service: ServiceDefinition; API: APIs }): BackEndService<APIs> {
  return service;
}

export function backendFor<
  API extends APIDefinition,
>(api: API, config?: {apiKey?: string}): BackEndAPI<API> {
  if (api._meta?.backend) return api._meta.backend;

  if (api.authType === AuthType.API_KEY && !config?.apiKey) {
    throw new Error(`API ${api.path} requires an API key.`);
  } else if (api.authType !== AuthType.API_KEY && config?.apiKey) {
    throw new Error(`API ${api.path} does not require an API key.`);
  }

  const be: BackEndAPI<API> = {
    apiKey: config?.apiKey
  };

  if (!api._meta) api._meta = {};
  api._meta.backend = be;
  
  return be;
}
