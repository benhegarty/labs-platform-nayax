import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { User } from "@labs/schemas";
wrapOpenApi(z);

export const bodySchema = z.object({
  migrationPlatform: User.Schema.shape.migrationPlatform,
  dateFormat: z.string().openapi({
    description: "The date commonly used in the migration data",
    example: "YYYY-MM-DD",
  }).optional(),
  users: z.array(User.Schema.pick({ 
    type: true,
  
    homeLocationId: true,
    homeLocationName: true,
    joinLocationId: true,
    joinLocationName: true,
    joinDateTime: true,
  
    firstName: true,
    lastName: true,
  
    email: true,
    phone: true,
    phone2: true,
    dob: true,
    gender: true,
  
    address1: true,
    address2: true,
    suburb: true,
    postcode: true,
    country: true,
  
    primaryPaymentMethodId: true,
    isOverdue: true,
    failedDebitCount: true,
    accountCredit: true,
  
    emergencyContacts: true,
    guardianContact: true,
  
    migrationId: true,
  })),
});

export const responseSchema = z.array(z.object({
  success: z.boolean(),
  errorMessage: z.string().optional(),
  migrationId: User.Schema.shape.migrationId,
  userId: User.Schema.shape.id,
}));

export const PutUser = api({
  method: Method.PUT,
  path: "/user",
  title: "Put User",
  description: "Put a new user",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  bodySchema: bodySchema,
  responseSchema: responseSchema,
});

// Don't forget to add to ../index.ts
