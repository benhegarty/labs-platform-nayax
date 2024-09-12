import { APIDefinition, ServiceDefinition } from "@labs/core.api/types";
import type { BackEndAPI, BackEndService } from "./types";
export { default as httpError } from "http-errors";
export * from "./types";
export declare function backendService<APIs extends Record<string, APIDefinition>>(service: {
    Service: ServiceDefinition;
    API: APIs;
}): BackEndService<APIs>;
export declare function backendFor<API extends APIDefinition>(api: API, config?: {
    apiKey?: string;
}): BackEndAPI<API>;
