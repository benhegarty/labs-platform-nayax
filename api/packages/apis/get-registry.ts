import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

import { registryInfoSchema } from "../types/registry";

export const GetRegistry = api({
  method: Method.GET,
  path: "/",
  title: "Get Registry",
  description: "Get the information about the registry",
  cors: true,
  authType: AuthType.VIVA,
  responseSchema: registryInfoSchema
});

// Don't forget to add to ../index.ts