import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

export const debtCollectionType = z.enum([
  "DISABLED", 
  "ARMA", 
  "EXTERNAL"
]);

