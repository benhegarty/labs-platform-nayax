export enum Index {
  PRIMARY = "PRIMARY",  // ROOT KEY
  STATE = "STATE",        // STATE
  GSI1 = "GSI1",        // MEMBER VIEW
  GSI2 = "GSI2",        // MEMBER TAG
}

export const SchemaType = {
  Brand: "bnd",
  Location: "loc",
  User: "usr",
  Wallet: "wal",
  WalletTransaction: "trw",
  Test: "trx",
  WalletProduct: "wpr",
  WalletTransactionProduct: "wtp",
} as const;

export type SchemaType = typeof SchemaType[keyof typeof SchemaType];

export const schemaNameLookup: { [value: string]: string } = {};
for (const key in SchemaType) {
  const value = SchemaType[key as keyof typeof SchemaType];
  schemaNameLookup[value] = key;
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

export type PopulatedFields = {
  type: SchemaType,
  id: string,
  PK: string,
  updatedAt: string,
  SK?: string,
  GSI1PK?: string,
  GSI1SK?: string,
  GSI2PK?: string,
  GSI2SK?: string,
  GSI3PK?: string,
  GSI3SK?: string,
  GSI4PK?: string,
  GSI4SK?: string,
  GSI5PK?: string,
  GSI5SK?: string
}

export enum PKType {
  SCHEMA,
  ID
}

export type AppFields = {
  id: string,
  updatedAt: string,
}