export type Filters = {
    [key: string]: string | boolean | number | null | undefined;
};
export type Table = {
    _meta: {
        table: string;
        primaryKey: string;
        sortKey?: string;
        index?: string;
    };
    [key: string]: any;
};
export declare enum SortKeyOperation {
    EQUAL = "=",
    BEGINS_WITH = "begins_with",
    LESS_THAN = "<",
    LESS_THAN_OR_EQUAL = "<=",
    GREATER_THAN = ">",
    GREATER_THAN_OR_EQUAL = ">=",
    BETWEEN = "BETWEEN"
}
