import { backendService } from "@labs/core.backend";

import { Nayax as Service } from "@labs/api";
export default backendService(Service);

import "./apis/staticqr-authorization";
import "./apis/staticqr-cancel";
import "./apis/staticqr-refund";
import "./apis/staticqr-sale";
import "./apis/staticqr-settlement";
import "./apis/staticqr-void";

// Don't forget to add to ../index.ts