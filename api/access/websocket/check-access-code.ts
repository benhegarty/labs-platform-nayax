import { AuthType, Method, websocket } from "@labs/core.api";

export const CheckAccessCode = websocket({
  method: Method.POST,
  path: "/code",
  title: "Check Code",
  description: "Check if the access code is valid",
  authType: AuthType.VIVA
  // responseSchema: openAPIObjectSchema
});

// Don't forget to add to ../index.ts