import { backendFor } from "@labs/core.backend";

// Fetch the service APIs
import { Websocket } from "@labs/api/iot";

// Define and configure the backend function
export const be = backendFor(Websocket.Connect);

be.handler = async (e) => {
  console.log(e.body);
  return {
    connected: true,
  };
};

// Don't forget to add to ../index.ts
