import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

import { internationalPhone } from "@labs/schemas/lib/phone";

export const JoinInitial = api({
  method: Method.POST,
  path: "/join/initial",
  title: "Join Initial",
  description: "The initial step to join.",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  bodySchema: z.object({
    locationId: z.string().openapi({ 
      description: "Location ID", 
      example: "4bwvZqfaqTlr"
    }),
    firstName: z.string().openapi({ 
      description: "First name", 
      example: "John"
    }),
    lastName: z.string().openapi({ 
      description: "Last name", 
      example: "Doe"
    }),
    email: z.string().email().openapi({ 
      description: "Email", 
      example: "john@doe.com"
    }),
    phone: internationalPhone.openapi({ 
      description: "Phone number", 
      example: "+15555555555"
    }),
  }),
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
