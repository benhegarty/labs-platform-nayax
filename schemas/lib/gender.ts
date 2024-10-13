import { z } from "zod";

export const gender = z.enum(["MALE", "FEMALE", "NEUTRAL", "PRIVATE"]);