import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { CalendarEvent } from "@labs/schemas";
wrapOpenApi(z);

export const GetCalendarEvents = api({
  method: Method.GET,
  path: "/{calendarId}/events",
  title: "Get Calendar Events",
  description: "Get the calendar events",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  responseSchema: z.array(CalendarEvent.Schema),
});

// Don't forget to add to ../index.ts
