import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const internationalPhone = z.string().refine((phoneNumber) => {
  const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber);
  return parsedPhoneNumber ? parsedPhoneNumber.isValid() : false;
}, {
  message: "Invalid phone number format or structure",
});