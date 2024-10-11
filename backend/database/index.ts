import { child, index, itemKey, schemaKey, indexes } from "@labs/core.database/single-table";

import * as s from "@labs/schemas";

export const Indexes = indexes({
  PRIMARY: index("PRIMARY"), // populared during initSchemas with ID PK

  GSI1: index("GSI1", {
    Brand: schemaKey(s.Brand, {
      Location: child(s.Location)
    }),
    User: schemaKey(s.User),
    Location: itemKey(s.Location, {
      Calendar: child(s.Calendar, {
        CalendarEvent: child(s.CalendarEvent, {
          CalendarBooking: child(s.CalendarBooking)
        })
      }),
      Visit: child(s.Visit),
      Contract: child(s.Contract, {
        Suspension: child(s.Suspension),
        DirectDebit: child(s.DirectDebit),
      }),
      Transaction: child(s.Transaction),
      AccessPoint: child(s.AccessPoint),
    }),
    PaymentMethod: child(s.PaymentMethod),
    AccessCode: child(s.AccessCode),
  }),

  GSI2: index("GSI2", {
    User: itemKey(s.User, {
      Contract: child(s.Contract, {
        Suspension: child(s.Suspension)
      })
    }),
  })

});
