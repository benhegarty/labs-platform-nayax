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

export enum Index {
  PRIMARY = "PRIMARY",
  GSI1 = "GSI1",
  GSI2 = "GSI2",
  GSI3 = "GSI3",
  GSI4 = "GSI4",
  GSI5 = "GSI5",
}

export type PopulatedFields = {
  schemaType: string,
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

export type Query = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  index: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  path: Record<string, any>[],
  getChildren?: boolean,
  projectedFields?: string[]
}