import { backendFor } from "@labs/core.backend";

// Fetch the service APIs
import { API } from "@labs/api/iot";

// Define and configure the backend function
export const be = backendFor(API.GetDevices);

be.handler = async (_) => {
  return {
    hello: "world"
  };
};

// Don't forget to add to ../index.ts
