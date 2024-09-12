import { httpError } from "@labs/core.backend";
import * as db from "@labs/be.database";

import { Payment, PaymentType } from "@labs/api/contracts/types/payments";
import { PaymentTimeframe, Transaction } from "./types/transaction";

const paymentFields = [
  "memberId",
  "status",
  "id",
  "memberContractBillingId",
  "actualDebitAmount",
  "paymentType",
  "debitDate",
  "settlementDate",
  "gatewayCode",
  "membershipAmount",
  "rejectionFee",
  "billingCredit"
];

export async function getContractPayments(contractId: string, timeframe: PaymentTimeframe): Promise<Payment[]> {
  const billings = await db.Contract.getContractBilling(contractId);
  if (!billings || billings.length === 0) {
    throw httpError.NotFound("No billings found found contract.");
  }

  // Get the batch and rejection transactions
  let txns: Transaction[] = [];
  if (timeframe == PaymentTimeframe.HISTORY) {
    const memberId = billings[0].memberId;
    const filter = { memberContractId: contractId };
    let [batchPayments = [], rejectionPayments] = await Promise.all([
      db.Member.getMemberBatchPayments(memberId, paymentFields, filter),
      db.Member.getMemberRejectionPayments(memberId, paymentFields, filter)
    ]);

    if (!batchPayments) batchPayments = [];
    if (!rejectionPayments) rejectionPayments = [];

    txns = [...batchPayments, ...rejectionPayments];
  }

  // Format the response
  return billings
    .filter(b => b.isProcessed === (timeframe === PaymentTimeframe.HISTORY))
    .sort((a, b) => new Date(a.debitDate).getTime() - new Date(b.debitDate).getTime())
    .map((b) => {
      const billing: Payment = {
        id: b.id,
        paymentType: b.paymentType,
        debitDate: b.debitDate,
        amount: {
          membership: b.membershipAmount,
          rejectionFee: b.rejectionFee || 0,
          adjustment: (b.membershipAmount - parseFloat(b.actualDebitAmount)) || 0,
          charged: parseFloat(b.actualDebitAmount) || 0,
        }
      };
      if (txns.length > 0) {
        billing.details = txns.map((p) => {
          return {
            id: p.id,
            paymentType: p.paymentType as PaymentType,
            debitDate: p.debitDate,
            paymentDate: p.settlementDate,
            status: p.gatewayCode,
            amount: {
              membership: p.membershipAmount,
              credit: p.billingCredit || 0,
              rejectionFee: p.rejectionFee || 0,
              adjustment: 0,
              charged: p.membershipAmount + (p.rejectionFee || 0) + (p.billingCredit || 0),
            }
          };
        });
      }
      return billing;
    });
}