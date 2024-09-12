import { Role, backendFor } from "@labs/core.backend";
import { generateDocs } from "@labs/core.docs";

// Fetch the service APIs
import { API } from "@labs/api/documentation";

// Define and configure the backend function
export const be = backendFor(API.OpenAPI);

be.roles = [
  Role.L1
];

be.handler = async (_, raw) => {
  return generateDocs(raw.event.headers);
};

// Don't forget to add to ../index.ts