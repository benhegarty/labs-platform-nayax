import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

export const authGroups = z.enum(["hub"]);