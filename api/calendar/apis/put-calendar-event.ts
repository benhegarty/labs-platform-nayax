import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { CalendarEvent } from "@labs/schemas";
wrapOpenApi(z);

export const PutCalendarEvent = api({
  method: Method.PUT,
  path: "/{calendarId}/event",
  title: "Put Calendar Event",
  description: "Put a calendar event",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  responseSchema: CalendarEvent.Schema,
});

// Don't forget to add to ../index.ts
