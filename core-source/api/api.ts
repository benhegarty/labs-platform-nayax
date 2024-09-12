import { z as zod, ZodTypeAny } from "zod";
import type { APIDefinition } from "./types";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

export const z = zod;
export const wrapOpenApi = extendZodWithOpenApi;

export * from "./types";

function createZodSchemaFromPath(path: string) {
  const regex = /\{(\w+)\}/g;
  const matches = [...path.matchAll(regex)];

  if (matches.length === 0) {
    return undefined;
  }
  
  const schemaObject: Record<string, ZodTypeAny> = {};
  
  matches.forEach(match => {
    const key = match[1];
    schemaObject[key] = z.string();
  });

  return z.object(schemaObject);
}

export function api<
  ParamsSchema extends ZodTypeAny,
  QuerySchema extends ZodTypeAny,
  BodySchema extends ZodTypeAny,
  ResponseSchema extends ZodTypeAny,
>(
  api: APIDefinition & {
    paramsSchema?: ParamsSchema | ZodTypeAny;
    querySchema?: QuerySchema | ZodTypeAny;
    bodySchema?: BodySchema | ZodTypeAny;
    responseSchema?: ResponseSchema | ZodTypeAny;
  },
) {
  if (!api.paramsSchema) {
    api.paramsSchema = createZodSchemaFromPath(api.path);
  }
  return api as APIDefinition & {
    paramsSchema: ParamsSchema;
    querySchema: QuerySchema;
    bodySchema: BodySchema;
    responseSchema: ResponseSchema;
  };
}