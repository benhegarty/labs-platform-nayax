import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

import { staticRefundRequestSchema } from "../types/nayax-requests";
import { staticRefundResponseSchema } from "../types/nayax-responses";

export const Refund = api({
  method: Method.POST,
  path: "/Cortina/StaticQR/Refund",
  title: "Static QR Refund",
  description: "Refund a static QR code transaction.",
  cors: true,
  authType: AuthType.PUBLIC,
  bodySchema: staticRefundRequestSchema,
  responseSchema: staticRefundResponseSchema
});

// Don't forget to add to ../index.ts