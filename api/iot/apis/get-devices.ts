import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const GetDevices = api({
  method: Method.POST,
  path: "/devices",
  title: "Get Devices",
  description: "Get all IoT devices.",
  cors: true,
  authType: AuthType.VIVA,
});

// Don't forget to add to ../index.ts
