import { z } from "zod";

export const tagCategory = z.enum([
  "PROMOTION",
  "RELATIONSHIP",
  "PHONE"
]);

export const tagMemberMetadata = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  address1: z.string().optional(),
  address2: z.string().optional(),
  suburb: z.string().optional(),
  state: z.string().optional(),
  postcode: z.number().optional(),
  country: z.string().optional(),
});