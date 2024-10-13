import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const JoinMembership = api({
  method: Method.POST,
  path: "/join/membership",
  title: "Join Membership",
  description: "The add the membership to the joiner.",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  bodySchema: z.object({
    email: z.string().email().openapi({ 
      description: "Email", 
      example: "john@doe.com"
    }),
    membershipId: z.string().openapi({ 
      description: "Location ID", 
      example: "4bwvZqfaqTlr"
    }),
    voucherCode: z.string().openapi({ 
      description: "Voucher code", 
      example: "ABC123"
    }),
  }),
  responseSchema: z.object({
    success: z.literal(true),
  }),
});

// Don't forget to add to ../index.ts
