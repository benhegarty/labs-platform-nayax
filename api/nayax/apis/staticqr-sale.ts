import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

import { staticSaleRequestSchema } from "../types/nayax-requests";
import { staticSaleResponseSchema } from "../types/nayax-responses";

export const Sale = api({
  method: Method.POST,
  path: "/Cortina/StaticQR/Sale",
  title: "Static QR Sale",
  description: "Sale of a static QR code transaction.",
  cors: true,
  authType: AuthType.PUBLIC,
  bodySchema: staticSaleRequestSchema,
  responseSchema: staticSaleResponseSchema
});

// Don't forget to add to ../index.ts