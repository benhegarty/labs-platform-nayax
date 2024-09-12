import { ops, MemberContractTable, MemberContractBillingTable } from "@labs/core.database";
import { Contract } from "@labs/api/contracts/types/contract";
import { Filters } from "@labs/core.database/types";

export async function get(contractId: string, projectedFields?: string[]): Promise<Contract | null> {
  return ops.get<Contract>(MemberContractTable, contractId, projectedFields);
}

export async function getLocationContracts(locationId: string, projectedFields?: string[], filters?: Filters): Promise<Contract[] | null> {
  return ops.query<Contract>(MemberContractTable.byLocationId, locationId, projectedFields, filters);
}

export async function getMemberContracts(memberId: string, projectedFields?: string[], filters?: Filters): Promise<Contract[] | null> {
  return ops.query<Contract>(MemberContractTable.byMemberId, memberId, projectedFields, filters);
}

export async function getContractBilling(contractId: string, projectedFields?: string[], filters?: Filters) {
  return ops.query(MemberContractBillingTable.byMemberContractId, contractId, projectedFields, filters);
}