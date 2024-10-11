import { backendService } from "@labs/core.backend";

import { Access as Service } from "@labs/api";
export default backendService(Service);

import "./websockets/check-access-code";

// Don't forget to add to ../index.ts