import { backendService } from "@labs/core.backend";

import { Users as Service } from "@labs/api";
export default backendService(Service);

import "./apis/migrations/put-user";

// Don't forget to add to ../index.ts