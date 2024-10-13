import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { gender } from "@labs/schemas/lib/gender";
import { internationalPhone } from "@labs/schemas/lib/phone";
wrapOpenApi(z);

export const JoinDetails = api({
  method: Method.POST,
  path: "/join/details",
  title: "Join Details",
  description: "The add the details to the joiner.",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  bodySchema: z.object({
    email: z.string().email().openapi({ 
      description: "Email", 
      example: "john@doe.com"
    }),
    address: z.string().openapi({
      description: "Address",
      example: "123 Main St"
    }),
    postcode: z.string().openapi({
      description: "Postcode",
      example: "12345"
    }),
    suburb: z.string().openapi({
      description: "Suburb",
      example: "Anytown"
    }),
    state: z.string().openapi({
      description: "State",
      example: "QLD"
    }),
    gender: gender,
    hasInjuries: z.boolean().openapi({
      description: "Has injuries",
      example: false
    }),
    healthAnswers: z.array(z.object({
      questionId: z.string().openapi({
        description: "Question ID",
        example: "4bwvZqfaqTlr"
      }),
      answer: z.boolean().openapi({
        description: "Answer",
        example: true
      }),
    })).openapi({
      description: "Health question answers"
    }).optional(),
    aggreeToTerms: z.boolean().openapi({
      description: "Agree to terms",
      example: true
    }),
    confirmedPreExerciseChecklist: z.boolean().openapi({
      description: "Confirmed pre exercise checklist",
      example: true
    }),
    emergencyName: z.string().openapi({ 
      description: "Emergency name", 
      example: "Jane Doe"
    }),
    emergencyRelation: z.string().openapi({ 
      description: "Emergency relation", 
      example: "Friend"
    }),
    emergencyPhone: internationalPhone.openapi({ 
      description: "Emergency phone number", 
      example: "+61404040404"
    }),
  }),
  responseSchema: z.object({
    success: z.literal(true),
  }),
});

// Don't forget to add to ../index.ts
