import { backendService } from "@labs/core.backend";

import { Iot as Service } from "@labs/api";
export default backendService(Service);

import "./websocket/connect";
import "./websocket/check-code";
import "./websocket/offline-db";

import "./apis/get-devices";

// Don't forget to add to ../index.ts