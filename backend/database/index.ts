import { child, index, itemKey, schemaKey, indexes } from "@labs/core.database/single-table";

import {
  Brand,
  User,
  Location,
  Contract,
  Suspension
} from "./schemas";
import { validateSchemas } from "./validate";

export const Indexes = indexes({

  PRIMARY: index("PRIMARY", {
    Brand: schemaKey(Brand, {
      Location: child(Location)
    }),
    User: schemaKey(User),
    Location: itemKey(Location, {
      Contract: child(Contract),
      Suspension: child(Suspension)
    }),
  }),

  GSI1: index("GSI1", {
    User: itemKey(User, {
      Contract: child(Contract, {
        Suspension: child(Suspension)
      })
    }),
  })

});

validateSchemas();