import { api, Method, AuthType } from "@labs/core.api";

export const WebsocketConnect = api({
  method: Method.GET,
  path: "/connect",
  title: "Connect",
  description: "Connect to the websocket",
  authType: AuthType.VIVA,
});

// Don't forget to add to ../index.ts