import { Role, backendFor } from "@labs/core.backend";

// Fetch the service APIs
import { API } from "@labs/api/nayax";
import { getSuspensionsForUserContract, putSuspension, Suspension } from "@labs/be.database/schemas/suspension";
import { User } from "@labs/be.database/schemas/user";
import { Contract } from "@labs/be.database/schemas/contract";
import { Location } from "@labs/be.database/schemas/location";

// Define and configure the backend function
export const be = backendFor(API.StartAuthorization);

be.roles = [Role.L1];
be.apiKey = "nayax";

be.handler = async (_) => {
  
  const dateTo = new Date();
  dateTo.setDate(dateTo.getDate() + 1);

  const suspension: Suspension.Type = {
    [User.Prefix]: "4fAavZ3T71Vf",
    [Contract.Prefix]: "4fAazEudl+Lb",
    [Location.Prefix]: "4fEykx$Lc8Eq",
    from: new Date(),
    to: dateTo,
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
