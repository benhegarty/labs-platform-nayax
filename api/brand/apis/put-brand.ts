import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { Brand } from "@labs/schemas";
wrapOpenApi(z);

export const PutBrand = api({
  method: Method.PUT,
  path: "/",
  title: "Put Brand",
  description: "Put a new brand",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  responseSchema: z.array(Brand.Schema),
});

// Don't forget to add to ../index.ts
