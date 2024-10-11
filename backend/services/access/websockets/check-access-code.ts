import { backendFor } from "@labs/core.backend";

// Fetch the service APIs
import { Websocket } from "@labs/api/access";

// Define and configure the backend function
export const be = backendFor(Websocket.CheckAccessCode);

be.enableWebsocketReponse = true;

be.handler = async (e) => {
  console.log("Got websocket message:", e.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

// Don't forget to add to ../index.ts
