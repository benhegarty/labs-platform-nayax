import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

import { staticAuthRequestSchema } from "../types/nayax-requests";
import { staticAuthResponseSchema } from "../types/nayax-responses";

export const Authorization = api({
  method: Method.POST,
  path: "/Cortina/StaticQR/Authorization",
  title: "Static QR Authorization",
  description: "Authorize a static QR code.",
  cors: true,
  authType: AuthType.COGNITO,
  bodySchema: staticAuthRequestSchema,
  responseSchema: staticAuthResponseSchema
});

// Don't forget to add to ../index.ts
