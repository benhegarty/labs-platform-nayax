import { backendService } from "@labs/core.backend";

import { Documentation as Service } from "@labs/api";
export default backendService(Service);

import "./apis/documentation";

// Don't forget to add to ../index.ts