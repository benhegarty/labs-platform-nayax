import { z } from "zod";
import { AuthType, Method, websocket } from "@labs/core.api";
import { AccessPoint, IotDevice } from "@labs/schemas";

export const Config = websocket({
  method: Method.POST,
  path: "/config",
  title: "Config",
  description: "Fetch configuration",
  authType: AuthType.VIVA,
  bodySchema: z.object({
    t: z.literal("config"),
    seq: z.number().int(),
  }).strict(),
  responseSchema: z.object({
    t: z.literal("config"),
    id: z.string(),
    authToken: IotDevice.Schema.shape.authToken,
    type: IotDevice.Schema.shape.type,
    mac: IotDevice.Schema.shape.macAddress,
    access: z.object({
      nameShort: AccessPoint.Schema.shape.nameShort,
      locationName: AccessPoint.Schema.shape.locationName,
      isDisabled: AccessPoint.Schema.shape.isDiabled,
      relays: AccessPoint.Schema.shape.relays,
    }),
    seq: z.number().int(),
  })
});

// Don't forget to add to ../index.ts