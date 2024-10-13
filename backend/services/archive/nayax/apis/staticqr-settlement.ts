import { Role, backendFor } from "@labs/core.backend";

// Fetch the service APIs
import { API } from "@labs/api/nayax";

// Define and configure the backend function
export const be = backendFor(API.Settlement);

be.roles = [
  Role.L1
];

be.handler = async (_) => {
  return {
    "Status": {
      "Verdict": "Approved",
      "Code": 0,
      "StatusMessage": "Transaction approved"
    }
  };
};

// Don't forget to add to ../index.ts