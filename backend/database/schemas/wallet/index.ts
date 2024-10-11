export * as Wallet from "./wallet";
export * as WalletTransaction from "./transaction";
export * as WalletProduct from "./product";

// import { dynamoPut, dynamoGet, dynamoQuery } from "@labs/core.database/dynamodb/ops";
// import { WalletType, WalletSchema, WalletDBType } from "./wallet";
// import { lookupKeys, nestItems, populateKeys } from "@labs/core.database/single-table";
// // import { Index, SchemaType } from "../../types";
// import { WalletTransactionDBType, WalletTransactionSchema, WalletTransactionType } from "./transaction";

// export async function putWallet(wallet: WalletType): Promise<WalletDBType> {
//   WalletSchema.schema.parse(wallet);
//   const { index, item } = populateKeys(WalletSchema, wallet);
//   if (!index || !item) {
//     throw new Error("Failed to populate keys");
//   }
//   await dynamoPut<WalletDBType>(index, item);
//   return item;
// }

// export async function putWalletTransaction(transaction: WalletTransactionType): Promise<WalletTransactionDBType | undefined> {
//   WalletTransactionSchema.schema.parse(transaction);
//   const { index, item } = populateKeys(WalletTransactionSchema, transaction);
//   if (!index || !item) return;
//   await dynamoPut<WalletTransactionDBType>(index, item);
//   return item;
// }





// ==========================
// export async function get(memberId: string, projectedFields?: string[]): Promise<Member | null> {
//   return ops.get<Member>(MemberTable, memberId, projectedFields);
// }

// export async function getLocationMembers(locationId: string, projectedFields?: string[], filters?: Filters): Promise<Member[] | null> {
//   return ops.query<Member>(MemberTable.memberByHomeLocationId, locationId, projectedFields, filters);
// }

// export async function getMemberBatchPayments(memberId: string, projectedFields?: string[], filters?: Filters): Promise<Transaction[] | null> {
//   return ops.query<Transaction>(BatchPaymentTable.byMemberId, memberId, projectedFields, filters);
// }

// export async function getMemberRejectionPayments(memberId: string, projectedFields?: string[], filters?: Filters): Promise<Transaction[] | null> {
//   return ops.query<Transaction>(RejectionPaymentTable.byMemberId, memberId, projectedFields, filters);
// }