import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

import { staticSettRequestSchema } from "../types/nayax-requests";
import { staticSettResponseSchema } from "../types/nayax-responses";

export const Settlement = api({
  method: Method.POST,
  path: "/Cortina/StaticQR/Settlement",
  title: "Static QR Settlement",
  description: "Settle a static QR code transaction.",
  cors: true,
  authType: AuthType.PUBLIC,
  bodySchema: staticSettRequestSchema,
  responseSchema: staticSettResponseSchema
});

// Don't forget to add to ../index.ts