import { Role, backendFor } from "@labs/core.backend";

// Fetch the service APIs
import { API } from "@labs/api/nayax";
import { User, Contract, Suspension } from "@labs/schemas";
import { putSuspension, getSuspensionsForUserContract } from "@labs/be.database/suspension";

// Define and configure the backend function
export const be = backendFor(API.StartAuthorization);

be.roles = [Role.L1];
be.apiKey = "nayax";

be.handler = async (_) => {
  
  const dateTo = new Date();
  dateTo.setDate(dateTo.getDate() + 1);

  const suspension: Suspension.Type = {
    userId: "4fAavZ3T71Vf",
    contractId: "4fAazEudl+Lb",
    locationId: "4fEykx$Lc8Eq",
    fromDateTime: new Date(),
    toDateTime: dateTo,
    suspendedByUserId: "4fAavZ3T71Vf",
    periodDays: 1
  };
  
  const suspensionItem = await putSuspension(suspension);
  const gotSuspension = await getSuspensionsForUserContract(suspension[User.Prefix], suspension[Contract.Prefix], ["from"]);
  
  return {
    authorizationId: "nabil",
    suspensionItem,
    gotSuspension
  };
};

// Don't forget to add to ../index.ts
