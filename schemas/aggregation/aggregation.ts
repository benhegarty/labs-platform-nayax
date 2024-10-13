import { z } from "zod";
import { Prefix as Brand } from "../brand/brand";
import { Prefix as CalendarBooking } from "../calendar/calendar-booking";
import { Prefix as DebtCollection } from "../payments/debt-collection";
import { Prefix as Location } from "../brand/location";
import { Prefix as Membership } from "../membership/membership";
import { Prefix as Suspension } from "../contract/suspension";
import { Prefix as Transaction } from "../payments/transaction";
import { Prefix as User } from "../user/user";
import { Prefix as Visit } from "../access/visit";

export const Versions = [
  z.object({ // 0
    // Links
    brandId: z.string().optional(),
    locationId: z.string().optional(),
    userId: z.string(),
    
    type: z.enum([
      // Brand
      `${Brand}.${User}.active`, // live
      `${Brand}.${User}.suspended`, // live
      `${Brand}.${User}.future`, // live
      `${Brand}.${Membership}.active`, // live
      
      `${Brand}.${User}.joined`,
      `${Brand}.${User}.expired`,
      `${Brand}.${User}.cancelled`,
      `${Brand}.${Transaction}.count`,
      `${Brand}.${Transaction}.balance`,
      `${Brand}.${CalendarBooking}.booked`,
      `${Brand}.${CalendarBooking}.attendance`,
      `${Brand}.${Visit}`,

      // Location
      `${Location}.${User}.active`, // live
      `${Location}.${User}.suspended`, // live
      `${Location}.${User}.future`, // live
      `${Location}.${Membership}.active`, // live
      `${Location}.${User}.joined`,
      `${Location}.${User}.expired`,
      `${Location}.${User}.cancelled`,
      `${Location}.${Visit}`,
      `${Location}.${Visit}.${User}`, // Get user visits for location
      `${Location}.${Transaction}.count`,
      `${Location}.${Transaction}.balance`,
      `${Location}.${DebtCollection}.count`,
      `${Location}.${DebtCollection}.outstanding`,
      `${Location}.${DebtCollection}.recovered`,
      `${Location}.${CalendarBooking}.booked`,
      `${Location}.${CalendarBooking}.attendance`,

      // User
      `${User}.${Visit}`,
      `${User}.${Suspension}.days`,
    ]),
    resolution: z.enum(["hr", "dy", "wk", "mn", "yr", "lv"]),
    start: z.string().optional(),
    data: z.record(z.any()).optional()
  })
];

export const Version = Versions.length - 1;
export const Prefix = "agg";
export const Schema = Versions[Version];
export type Type = z.input<typeof Schema>;
export type OutType = z.output<typeof Schema>;
