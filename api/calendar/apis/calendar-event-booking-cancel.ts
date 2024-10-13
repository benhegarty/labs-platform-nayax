import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { CalendarBooking } from "@labs/schemas";
wrapOpenApi(z);

export const CalendarEventBookingCancel = api({
  method: Method.POST,
  path: "/{calendarId}/event/{eventId}/{bookingId}/cancel",
  title: "Cancel Calendar Booking",
  description: "Cancel a calendar booking",
  cors: true,
  authType: AuthType.PUBLIC,
  tags: ["Todo"],
  responseSchema: CalendarBooking.Schema,
});

// Don't forget to add to ../index.ts
