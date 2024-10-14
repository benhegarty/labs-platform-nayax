import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { Calendar } from "@labs/schemas";
wrapOpenApi(z);

export const PutCalendar = api({
  method: Method.PUT,
  path: "/",
  title: "Put Calendar",
  description: "Put a new calendar",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  responseSchema: Calendar.Schema,
});

// Don't forget to add to ../index.ts
