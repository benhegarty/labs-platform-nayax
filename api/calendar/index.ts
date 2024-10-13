import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/calendar",
};

// APIs
import { CalendarEventBooking } from "./apis/calendar-booking";
import { CalendarEventBookingCancel } from "./apis/calendar-event-booking-cancel";
import { GetCalendarEvents } from "./apis/get-calendar-events";
import { GetCalendar } from "./apis/get-calendar";
import { PutCalendarEvent } from "./apis/put-calendar-event";
import { PutCalendar } from "./apis/put-calendar";

export const API = {
  CalendarEventBooking,
  CalendarEventBookingCancel,
  GetCalendarEvents,
  GetCalendar,
  PutCalendarEvent,
  PutCalendar
};

// Don't forget to add to ../index.ts