import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
import { generateId } from "@labs/id";
wrapOpenApi(z);

export const id = z.string()
  .length(12)
  .regex(/^[0-9A-Za-z$+]{12}$/)
  .openapi({
    example: "3x4MpL3+id$a"
  }).default(generateId);

export const guid = z.string().uuid().openapi({
  example: "acc529d1-2581-4e0d-87ab-32992ab8f798"
});

