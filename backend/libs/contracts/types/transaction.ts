export enum PaymentTimeframe {
  HISTORY,
  FUTURE
}

export type Transaction = {
  id: string;
  acquirerCode: string;
  acquirerMessage: string;
  agreementId: string;
  amount: number | string;
  batchBrandId: string;
  batchId: string;
  batchPaymentId?: string;
  billingCredit?: number;
  brandId?: string;
  brandShortName?: string;
  card: string;
  createdAt: string;
  currency: string;
  DDFailureCount: number;
  debitDate: string;
  gatewayCode: string;
  isProcessed: boolean;
  locationId: string;
  locationShortName?: string;
  memberContractBillingId: string;
  memberContractId: string;
  memberId: string;
  membershipAmount: number;
  outstandingBalance?: number;
  paymentType: string;
  rejectionCount?: number;
  rejectionFee: number;
  settlementDate: string;
  statementDescriptorName: string;
  status: string;
  token: string;
  transactionReceipt: string;
  uniqueIdentifier: string;
  updatedAt: string;
  vivaPaymentInformationId?: string;
  __typename: "RejectionPayment" | "BatchPayment";
};
