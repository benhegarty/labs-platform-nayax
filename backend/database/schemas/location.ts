import { ops, LocationTable } from "@labs/core.database";
import { Filters } from "@labs/core.database/types";

export async function get(locationId: string, projectedFields?: string[]) {
  return ops.get(LocationTable, locationId, projectedFields);
}

export async function list(projectedFields?: string[], filters?: Filters) {
  return ops.scan(LocationTable, undefined, projectedFields, filters);
}