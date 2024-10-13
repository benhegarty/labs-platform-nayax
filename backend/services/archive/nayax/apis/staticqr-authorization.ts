import { Role, backendFor } from "@labs/core.backend";

// Fetch the service APIs
import { API } from "@labs/api/nayax";

// Define and configure the backend function
export const be = backendFor(API.Authorization);

be.roles = [
  Role.L1
];

be.handler = async (e) => {
  return {
    "Status": {
      "Verdict": "Approved",
      "Code": 0,
      "StatusMessage": "Transaction approved"
    },
    "PaymentInfo": {
      "SrvTranId": "236584335969834429321847829253667359",
      "AuthCode": "333333",
      "AuthAmount": e.body.BasicInfo?.Amount || 0,
      "SettAmount": e.body.BasicInfo?.Amount || 0,
      "RRN": "111111",
      "Token": "Token",
      "AuthDateTime": "230221101009",
      "SettDateTime": "230221101009",
      "TraceNumber": "4444",
      "AuthSource": "55555",
      "IsGatewayTimeout": false
    }
  };
};

// Don't forget to add to ../index.ts