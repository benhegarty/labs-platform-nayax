import { backendFor } from "@labs/core.backend";

// Fetch the service APIs
import { Websocket } from "@labs/api/iot";

// Define and configure the backend function
export const be = backendFor(Websocket.CheckCode);

be.handler = async (e) => {
  console.log(e.body);
  return {
    t: "code",
    allow: true,
    putUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    seq: e.body.seq,
  };
};

// Don't forget to add to ../index.ts
