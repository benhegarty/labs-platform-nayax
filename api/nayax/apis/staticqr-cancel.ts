import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

import { staticCancelRequestSchema } from "../types/nayax-requests";
import { staticCancelResponseSchema } from "../types/nayax-responses";

export const Cancel = api({
  method: Method.POST,
  path: "/Cortina/StaticQR/Cancel",
  title: "Static QR Cancel",
  description: "Cancel a static QR code transaction.",
  cors: true,
  authType: AuthType.PUBLIC,
  bodySchema: staticCancelRequestSchema,
  responseSchema: staticCancelResponseSchema
});

// Don't forget to add to ../index.ts