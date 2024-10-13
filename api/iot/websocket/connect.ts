import { z } from "zod";
import { AuthType, Method, websocket } from "@labs/core.api";
import { IotDevice } from "@labs/schemas";

export const Connect = websocket({
  method: Method.POST,
  path: "/connect",
  title: "Connect",
  description: "Connect to the websocket",
  authType: AuthType.VIVA,
  querySchema: z.object({
    mac: IotDevice.Schema.shape.macAddress,
    type: IotDevice.Schema.shape.type,
    token: z.string(),
  }),
});

// Don't forget to add to ../index.ts