import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { Calendar } from "@labs/schemas";
wrapOpenApi(z);

export const GetCalendar = api({
  method: Method.GET,
  path: "/{calendarId}",
  title: "Get Calendar",
  description: "Get the calendar details",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: Calendar.Schema,
});

// Don't forget to add to ../index.ts
