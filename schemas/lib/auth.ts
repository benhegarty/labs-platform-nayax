import { z } from "zod";

export const authGroups = z.enum(["hub"]);