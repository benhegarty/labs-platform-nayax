import { z as zod, ZodTypeAny } from "zod";
import type { APIDefinition } from "./types";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
export declare const z: typeof zod;
export declare const wrapOpenApi: typeof extendZodWithOpenApi;
export * from "./types";
export declare function api<ParamsSchema extends ZodTypeAny, QuerySchema extends ZodTypeAny, BodySchema extends ZodTypeAny, ResponseSchema extends ZodTypeAny>(api: APIDefinition & {
    paramsSchema?: ParamsSchema | ZodTypeAny;
    querySchema?: QuerySchema | ZodTypeAny;
    bodySchema?: BodySchema | ZodTypeAny;
    responseSchema?: ResponseSchema | ZodTypeAny;
}): APIDefinition & {
    paramsSchema: ParamsSchema;
    querySchema: QuerySchema;
    bodySchema: BodySchema;
    responseSchema: ResponseSchema;
};
