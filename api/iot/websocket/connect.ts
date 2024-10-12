import { AuthType, Method, websocket } from "@labs/core.api";

export const Connect = websocket({
  method: Method.POST,
  path: "/connect",
  title: "Connect",
  description: "Connect to the websocket",
  authType: AuthType.VIVA
});

// Don't forget to add to ../index.ts