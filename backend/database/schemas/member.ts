import { ops, MemberTable, BatchPaymentTable, RejectionPaymentTable } from "@labs/core.database";
import { Member } from "@labs/api/members/types/member";
import { Transaction } from "@labs/be.contracts/types/transaction";
import { Filters } from "@labs/core.database/types";

export async function get(memberId: string, projectedFields?: string[]): Promise<Member | null> {
  return ops.get<Member>(MemberTable, memberId, projectedFields);
}

export async function getLocationMembers(locationId: string, projectedFields?: string[], filters?: Filters): Promise<Member[] | null> {
  return ops.query<Member>(MemberTable.memberByHomeLocationId, locationId, projectedFields, filters);
}

export async function getMemberBatchPayments(memberId: string, projectedFields?: string[], filters?: Filters): Promise<Transaction[] | null> {
  return ops.query<Transaction>(BatchPaymentTable.byMemberId, memberId, projectedFields, filters);
}

export async function getMemberRejectionPayments(memberId: string, projectedFields?: string[], filters?: Filters): Promise<Transaction[] | null> {
  return ops.query<Transaction>(RejectionPaymentTable.byMemberId, memberId, projectedFields, filters);
}