import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
import { guid } from "./id";
import { date } from "./date";
wrapOpenApi(z);

export const migrationMetadataSchema = z.object({
  migrationId: guid.optional().openapi({
    description: "Optional migration ID."
  }),
  migrationDateTime: date.optional().openapi({
    description: "Optional migration date and time in ISO format."
  }),
  migrationPlatform: z.string().optional().openapi({
    example: "OldCRM",
    description: "Platform from which the user migrated."
  })
});

export function nextCronSchema(fields: string[]) {
  return z.object({
    cronNext: date.openapi({
      description: "Next scheduled cron job execution date in ISO format."
    }).optional(),
    cronFields: z.array(z.string()).default(fields).openapi({
      example: fields,
      description: "Fields tracked by the cron job."
    }).optional(),
  });
}

export async function populateLocationName(schema, locationId: string, fieldName: string) {
  return z.preprocess(schema, async (data) => {
    if (data[fieldName]) {
      data[fieldName] = "Test";
    }
    return data;
  });
}