import { z } from "zod";

export const debtCollectionType = z.enum([
  "DISABLED", 
  "ARMA", 
  "EXTERNAL"
]);

