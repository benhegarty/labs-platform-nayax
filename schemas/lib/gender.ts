import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

export const gender = z.enum([
  "MALE", 
  "FEMALE", 
  "NEUTRAL", 
  "PRIVATE"
]);