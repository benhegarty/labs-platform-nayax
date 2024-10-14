import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

export const auditType = z.enum([
  "CHECKIN",
  "CHECKOUT"
]);