import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

import { packageInfoSchema } from "../types/package";

export const GetPackage = api({
  method: Method.GET,
  path: "/{package}",
  title: "Get Package",
  description: "Get the information about the package",
  cors: true,
  authType: AuthType.COGNITO,
  responseSchema: packageInfoSchema
});

// Don't forget to add to ../index.ts