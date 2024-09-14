import { generateId } from "@labs/id";

import { WalletType, WalletTransactionSchema, WalletTransactionType, WalletSchema } from "./schemas/wallet";
import { UserSchema } from "./schemas/user";
import { Key } from "./types";
import { LocationSchema } from "./schemas/location";

const wallet: WalletType = {
  balance: 0,
  amount: 0,
  currency: "USD",
  updatedAt: new Date(),
};

const transaction: WalletTransactionType = {
  authorizationConfirmed: false,
  settled: false,
  cancelled: false,
  amount: 0,
  currency: "USD",
  currencyNumeric: 0,
  siteId: 0,
  machineId: "",
  machineName: "",
  groupId: "",
  operatorId: "",
  zipCode: 0,
  country: "",
  updatedAt: new Date()
};

function populateKeys<T>(schema, item: T) {
  const att: {[key: string] : string} = {
    id: generateId()
  };
  for (const key in schema.keys) {
    const keyParts = schema.keys[key];

    if (keyParts.length > 2) {
      console.error("PK/SK can only have 2 values");
      return;
    }

    const valPrefix = key == Key.PRIMARY ? "" : key;

    for (const p in keyParts) {
      const partKey = valPrefix + p; // PK, SK, GSI1PK, GSI1SK, etc.

      if (!att[partKey]) att[partKey] = "";
      for (const keyVal of keyParts[p]) {
        let id;

        // if it's a string, it's a static value
        if (typeof keyVal === "string") {
          id = `${keyVal}#`;

          // if it's itself
        } else if (!keyVal.type) {
          id = `${schema.type}.${schema.version}.${att.id}#`;

          // if it's a reference to another schema
        } else {
          const idKey = keyVal.type + "Id";
          id = `${keyVal.type}.${keyVal.version}.${item[idKey]}#`;
        }
        att[partKey] += id;
      }
    }
  }
  return {
    ...att,
    ...item
  };
}

const keys = populateKeys<WalletType>(WalletSchema, wallet);
console.log(keys);