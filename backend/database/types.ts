
export enum Key {
  PRIMARY = "PRIMARY",  // ROOT KEY
  LSI1 = "LSI1",        // STATE
  GSI1 = "GSI1",        // MEMBER VIEW
  GSI2 = "GSI2",        // MEMBER TAG
}

export enum SchemaType {
  BRAND = "bnd",
  LOCATION = "loc",
  USER = "usr",
  WALLET = "wal",
  WALLET_TRANSACTION = "trw",
  WALLET_PRODUCT = "wpr",
  WALLET_TRANSACTIONPRODUCT = "wtp"
}

export enum Status {
  // GOOD
  APPROVED = "0",
  ACTIVE = "1",
  OPEN = "2",
  SUSPENDED = "3",

  // FINE
  PENDING = "a",
  PRESALE = "b",
  FUTURE = "c",

  // ALMOST BAD
  CANCELING = "d",
  EXPIRING_30DAYS = "e",
  EXPIRING_7DAYS = "f",
  OVERDUE_1 = "g",
  OVERDUE_2 = "h",
  OVERDUE_3 = "i",

  // BAD
  DECLINED = "A",
  CLOSED = "B",
  INACTIVE = "C",
  CANCELLED = "D",
  CANCELLED_OVERDUE = "E",
  EXPIRED = "F",
  BANNED = "G",
  EMPTY = "H",
}

// export type Schema = {
//   type: SchemaType;
//   version: number;
//   schema: ZodType;
//   extensions?: Record<string, Schema>;
//   children?: Record<string, Schema>;
// };