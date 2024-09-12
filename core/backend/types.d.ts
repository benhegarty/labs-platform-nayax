import { User } from "@labs/api/members/types/user";
import { APIDefinition, ServiceDefinition } from "@labs/core.api/types";
import { ZodTypeAny, infer as ZodInfer } from "zod";
type Infer<T> = T extends ZodTypeAny ? ZodInfer<T> : unknown;
export type EnvironmentVariables = Record<string, string>;
export type Table = {
    _meta: {
        table: string;
    };
};
export declare enum Role {
    L1 = "L1",
    L2 = "L2",
    L3 = "L3",
    L4 = "L4",
    L5 = "L5"
}
export type HandlerEvent<Params, Query, Body> = {
    params: Params;
    query: Query;
    body: Body;
    user?: User;
};
export type BackEndService<APIs extends Record<string, APIDefinition>> = {
    Service: ServiceDefinition;
    API: APIs;
    environment?: EnvironmentVariables;
};
export type BackEndAPI<API extends APIDefinition> = {
    tables?: Table[];
    roles?: Role[];
    apiKey?: string;
    handler?: (event: HandlerEvent<Infer<API["paramsSchema"]>, Infer<API["querySchema"]>, Infer<API["bodySchema"]>>, raw?: any) => Promise<Infer<API["responseSchema"]> | {
        statusCode?: number;
        body: Infer<API["responseSchema"]>;
        headers?: Record<string, string>;
    }>;
};
export type BackendAPIs<APIs extends Record<string, APIDefinition>> = {
    [K in keyof APIs]?: BackEndAPI<APIs[K]>;
};
export {};
