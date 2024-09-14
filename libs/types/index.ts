import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

// Inferred Types
export type User = z.infer<typeof userSchema>;

// Schemas
export const userSchema = z.object({
  id: z.string().length(36).openapi({
    example: "a4590c33-dc07-4b74-897c-690f2f52bed6",
    description: "Unique identifier for the user."
  }),
  email: z.string().email().openapi({
    example: "john.doe@example.com",
    description: "Email address of the user."
  }),
  brandId: z.string().length(36).openapi({
    example: "6dec4e5f-7a07-4a7e-a809-2c0c1df01366",
    description: "ID of the brand associated with the user."
  }),
  groups: z.array(z.string()).openapi({
    example: ["admin", "L5"],
    description: "List of groups the user belongs to."
  })
});