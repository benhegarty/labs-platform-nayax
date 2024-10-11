import { api, Method, AuthType } from "@labs/core.api";
import { openAPIObjectSchema } from "../types/openapi";

export const OpenAPI = api({
  method: Method.GET,
  path: "/openapi",
  title: "Documentation",
  description: "Get the API documentation in OpenAPI format",
  authType: AuthType.VIVA,
  responseSchema: openAPIObjectSchema
});

// Don't forget to add to ../index.ts