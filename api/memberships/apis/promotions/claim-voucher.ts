import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const ClaimVoucher = api({
  method: Method.GET,
  path: "/location/{locationId}/claim-voucher/{voucherCode}",
  title: "Claim Voucher",
  description: "Claim a voucher",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  responseSchema: z.object({
    success: z.boolean().openapi({
      description: "If the user can join",
      example: true
    }),
    alreadyJoined: z.boolean().openapi({
      description: "If the user has already joined",
      example: false
    }),
  }),
});

// Don't forget to add to ../index.ts
