import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

// Inferred Types
export type RegistryInfo = z.infer<typeof registryInfoSchema>;

// Schemas
export const registryInfoSchema = z.object({
  db_name: z.string().openapi({
    example: "registry",
    description: "The name of the registry."
  }),
  doc_count: z.number().openapi({
    example: 399172,
    description: "The number of documents in the registry."
  }),
  doc_del_count: z.number().openapi({
    example: 354,
    description: "The number of deleted documents in the registry."
  }),
  update_seq: z.number().openapi({
    example: 3351374,
    description: "The current update sequence for the registry."
  }),
  purge_seq: z.number().openapi({
    example: 0,
    description: "The purge sequence number of the registry."
  }),
  compact_running: z.boolean().openapi({
    example: false,
    description: "Indicates whether compaction is currently running."
  }),
  disk_size: z.number().openapi({
    example: 2118398075,
    description: "The total disk size used by the registry, in bytes."
  }),
  data_size: z.number().openapi({
    example: 1600835750,
    description: "The size of the actual data stored in the registry, in bytes."
  }),
  instance_start_time: z.string().openapi({
    example: "1475135224217333",
    description: "The time the registry instance was started, represented as a timestamp."
  }),
  disk_format_version: z.number().openapi({
    example: 6,
    description: "The version of the disk format used by the registry."
  }),
  committed_update_seq: z.number().openapi({
    example: 3351374,
    description: "The committed update sequence number."
  })
});
