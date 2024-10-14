import { child, index, itemKey, indexes, searchField, schemaKey, fieldKey } from "@labs/core.database/single-table";

import * as s from "@labs/schemas";

export const Indexes = indexes(s, {
  PRIMARY: index("PRIMARY"), // populared during initSchemas with ID PK

  GSI1: index("GSI1", {
    Brand: schemaKey(s.Brand, {
      LocationGroup: child(s.LocationGroup),
      Aggregation: child(s.Aggregation),
      ReferalCode: fieldKey(s.ReferalCode, ["code"]),
    }),
    Location: itemKey(s.Location, {
      AccessPoint: child(s.AccessPoint),

      Aggregation: child(s.Aggregation),

      Calendar: child(s.Calendar, {
        CalendarEvent: child(s.CalendarEvent, {
          CalendarBooking: child(s.CalendarBooking)
        })
      }),

      Contract: child(s.Contract, {
        Suspension: child(s.Suspension),
        DirectDebit: child(s.DirectDebit),
      }),

      Document: child(s.Document),

      Visit: child(s.Visit),

      Audit: child(s.Audit),
      Email: child(s.Email),
      Sms: child(s.Sms),
      InteractionTemplate: child(s.InteractionTemplate),

      IotDevice: child(s.IotDevice),

      LocationMembership: child(s.LocationMembership),

      Transaction: child(s.Transaction),

      DebtCollection: child(s.DebtCollection),
      Note: child(s.Note),
    }),

    PaymentMethod: fieldKey(s.PaymentMethod, ["cardNumber", "cardExpiryDate", "bsb", "accountNumber"]),
    AccessCode: fieldKey(s.AccessCode, ["type", "code"]),
  }),

  GSI2: index("GSI2", {
    Brand: searchField(s.Brand, "name", 2),
    Location: searchField(s.Location, "name", 2),
    User: itemKey(s.User, {
      Contract: child(s.Contract, {
        Suspension: child(s.Suspension),
        DirectDebit: child(s.DirectDebit, {
          Transaction: child(s.Transaction),
        }),
      }),
      Calendar: child(s.Calendar, {
        CalendarEvent: child(s.CalendarEvent, {
          CalendarBooking: child(s.CalendarBooking)
        })
      }),
      Visit: child(s.Visit),
      PaymentMethod: child(s.PaymentMethod),
      AccessCode: child(s.AccessCode),
    }),
  })

});
