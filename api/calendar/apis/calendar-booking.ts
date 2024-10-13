import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { CalendarBooking } from "@labs/schemas";
wrapOpenApi(z);

export const CalendarEventBooking = api({
  method: Method.POST,
  path: "/{calendarId}/event/{eventId}/book",
  title: "Book Calendar Event",
  description: "Book a calendar event",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  responseSchema: CalendarBooking.Schema,
});

// Don't forget to add to ../index.ts
