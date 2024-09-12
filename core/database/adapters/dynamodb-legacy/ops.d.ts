import { SortKeyOperation, Table, Filters } from "../../types";
export declare function get<T = any>(index: Table, query: {
    PK: string;
    SORT?: string;
    SORT2?: string;
    OP?: SortKeyOperation;
} | string, projectedFields?: string[]): Promise<T | null>;
export declare function query<T = any>(index: Table, query: {
    PK: string;
    SORT?: string;
    SORT2?: string;
    OP?: SortKeyOperation;
} | string, projectedFields?: string[], filters?: Filters): Promise<T[]>;
export declare function scan<T = any>(index: Table, query?: string, projectedFields?: string[], filters?: Filters): Promise<T[]>;
