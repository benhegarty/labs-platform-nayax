import { Role, backendFor } from "@labs/core.backend";

// Fetch the service APIs
import { API } from "@labs/api/nayax";
import { getWalletAndTransactions } from "@labs/be.database/schemas/wallet";

// Define and configure the backend function
export const be = backendFor(API.StartAuthorization);

be.roles = [Role.L1];
be.apiKey = "nayax";

// const locationId = "4bwvZqfazzZZ";

be.handler = async (e) => {
  // let wallet = await getWallet(e.body.userId);
  // if (!wallet) {
  //   const newWallet: WalletType = {
  //     usrId: e.body.userId,
  //     balance: 0,
  //     currency: "AUD"
  //   };
  //   wallet = await putWallet(newWallet);
  // }
  // const newTransaction: WalletTransactionType = {
  //   usrId: e.body.userId,
  //   locId: locationId,
  //   authorizationConfirmed: false,
  //   settled: false,
  //   cancelled: false,
  //   amount: 2,
  //   currency: "AUD",
  //   currencyNumeric: 36,
  //   siteId: 0,
  //   machineId: "123",
  //   machineName: "Ben",
  //   groupId: "something",
  //   operatorId: "benny",
  //   zipCode: 2602,
  //   country: "Australia"
  // };
  // const transaction = await putWalletTransaction(newTransaction);
  // console.log(wallet);
  // console.log(transaction);
  const walletAndTransactions = await getWalletAndTransactions(e.body.userId);
  console.log(JSON.stringify(walletAndTransactions, null, 2));
  return {
    authorizationId: "abc",
  };
};

// Don't forget to add to ../index.ts
