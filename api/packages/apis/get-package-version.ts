import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

import { packageVersionSchema } from "../types/version";

export const GetPackageVersion = api({
  method: Method.GET,
  path: "/{package}/{version}",
  title: "Package Version",
  description: "Get the information about the package version",
  cors: true,
  authType: AuthType.COGNITO,
  responseSchema: packageVersionSchema
});

// Don't forget to add to ../index.ts