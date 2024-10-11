import { z } from "zod";

export const auditType = z.enum([
  "CHECKIN",
  "CHECKOUT"
]);