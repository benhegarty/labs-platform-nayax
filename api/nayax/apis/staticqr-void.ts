import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

import { staticVoidRequestSchema } from "../types/nayax-requests";
import { staticVoidResponseSchema } from "../types/nayax-responses";

export const Void = api({
  method: Method.POST,
  path: "/Cortina/StaticQR/Void",
  title: "Static QR Void",
  description: "Void a static QR code transaction.",
  cors: true,
  authType: AuthType.PUBLIC,
  bodySchema: staticVoidRequestSchema,
  responseSchema: staticVoidResponseSchema
});

// Don't forget to add to ../index.ts