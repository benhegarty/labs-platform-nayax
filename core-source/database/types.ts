export type Filters = { [key: string]: string | boolean | number | null | undefined };

export type Table = {
  _meta: {
    table: string;
    legacy?: boolean;
    primaryKey: string;
    sortKey?: string;
    index?: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export enum SortKeyOperation {
  EQUAL = "=",
  BEGINS_WITH = "begins_with",
  LESS_THAN = "<",
  LESS_THAN_OR_EQUAL = "<=",
  GREATER_THAN = ">",
  GREATER_THAN_OR_EQUAL = ">=",
  BETWEEN = "BETWEEN",
}
