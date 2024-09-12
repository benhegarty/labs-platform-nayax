import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);
 
// Inferred Types
export type OpenAPIObject = z.infer<typeof openAPIObjectSchema>;

// Schemas
export const contactObjectSchema = z.object({
  name: z.string().optional().openapi({
    example: "John Doe",
    description: "The identifying name of the contact."
  }),
  url: z.string().url().optional().openapi({
    example: "https://www.example.com",
    description: "A URL to the contact's webpage."
  }),
  email: z.string().email().optional().openapi({
    example: "john.doe@example.com",
    description: "The email address of the contact."
  }),
});

export const licenseObjectSchema = z.object({
  name: z.string().openapi({
    example: "MIT",
    description: "The name of the license."
  }),
  identifier: z.string().optional().openapi({
    example: "MIT",
    description: "An identifier for the license."
  }),
  url: z.string().url().optional().openapi({
    example: "https://opensource.org/licenses/MIT",
    description: "A URL to the license."
  }),
});

export const infoObjectSchema = z.object({
  title: z.string().openapi({
    example: "Sample API",
    description: "The title of the API."
  }),
  description: z.string().optional().openapi({
    example: "This is a sample API",
    description: "A short description of the API."
  }),
  termsOfService: z.string().url().optional().openapi({
    example: "https://www.example.com/terms/",
    description: "A URL to the terms of service for the API."
  }),
  contact: contactObjectSchema.optional().openapi({
    description: "The contact information for the API."
  }),
  license: licenseObjectSchema.optional().openapi({
    description: "The license information for the API."
  }),
  version: z.string().openapi({
    example: "1.0.0",
    description: "The version of the API."
  }),
});

export const serverObjectSchema = z.object({
  url: z.string().openapi({
    example: "https://api.example.com",
    description: "A URL to the server."
  }),
  description: z.string().optional().openapi({
    example: "Main API Server",
    description: "A description of the server."
  }),
});

export const pathsObjectSchema = z.record(
  z.string(),
  z.object({
    summary: z.string().optional().openapi({
      example: "Get all items",
      description: "A short summary of what the operation does."
    }),
    description: z.string().optional().openapi({
      example: "Returns a list of items.",
      description: "A detailed description of the operation."
    }),
  })
).openapi({
  description: "The available paths and operations for the API."
});

export const componentsObjectSchema = z.object({
  schemas: z.record(z.string(), z.any()).optional().openapi({
    description: "A map of schema names to schema definitions."
  }),
  responses: z.record(z.string(), z.any()).optional().openapi({
    description: "A map of response names to response definitions."
  }),
}).optional();

export const securityRequirementObjectSchema = z.record(
  z.string(),
  z.array(z.string())
).optional().openapi({
  description: "The security requirements for the API."
});

export const tagObjectSchema = z.object({
  name: z.string().openapi({
    example: "User",
    description: "The name of the tag."
  }),
  description: z.string().optional().openapi({
    example: "Operations related to users.",
    description: "A short description of the tag."
  }),
});

export const externalDocumentationObjectSchema = z.object({
  description: z.string().optional().openapi({
    example: "Find more info here.",
    description: "A description of the external documentation."
  }),
  url: z.string().url().openapi({
    example: "https://www.example.com/docs",
    description: "A URL to the external documentation."
  }),
});

export const openAPIObjectSchema = z.object({
  openapi: z.string().openapi({
    example: "3.0.0", 
    description: "The version of the OpenAPI Specification being used."
  }),
  info: infoObjectSchema.openapi({
    description: "The information about the API."
  }),
  servers: z.array(serverObjectSchema).optional().openapi({
    description: "A list of servers available for the API."
  }),
  paths: pathsObjectSchema.optional().openapi({
    description: "The available paths and operations for the API."
  }),
  components: componentsObjectSchema.optional().openapi({
    description: "The components of the API."
  }),
  security: z.array(securityRequirementObjectSchema).optional().openapi({
    description: "The security requirements for the API."
  }),
  tags: z.array(tagObjectSchema).optional().openapi({
    description: "A list of tags used by the API."
  }),
  externalDocs: externalDocumentationObjectSchema.optional().openapi({
    description: "Additional external documentation."
  }),
  webhooks: pathsObjectSchema.optional().openapi({
    description: "The webhook paths and operations for the API."
  }),
});
