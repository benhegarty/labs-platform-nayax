import { ServiceDefinition, Platform, AuthType } from "@labs/core.api";

// Service
export const Service: ServiceDefinition = {
  platforms: [Platform.SERVERLESS],
  defaultAuthType: AuthType.PUBLIC,
  basePath: "/auth",
};

// Features
import { ListAuthGroupFeatures } from "./apis/features/list-authgroup-features";
import { ListFeatures } from "./apis/features/list-features";

// Roles
import { AssignRole } from "./apis/roles/assign-role";
import { DeleteRole } from "./apis/roles/delete-role";
import { ListRoles } from "./apis/roles/list-roles";
import { PutRole } from "./apis/roles/put-role";
import { UnassignRole } from "./apis/roles/unassign-role";
import { UpdateRole } from "./apis/roles/update-role";

// Session
import { CompleteCrossLogin } from "./apis/session/complete-cross-login";
import { CreateCrossLogin } from "./apis/session/create-cross-login";
import { Login } from "./apis/session/login";
import { Logout } from "./apis/session/logout";
import { Provision2FA } from "./apis/session/provision-2fa";
import { Submit2FA } from "./apis/session/submit-2fa";
import { SubmitOTP } from "./apis/session/submit-otp";
import { ValidateSession } from "./apis/session/validate-session";

export const API = {
  // Features
  ListAuthGroupFeatures,
  ListFeatures,

  // Roles
  AssignRole,
  DeleteRole,
  ListRoles,
  PutRole,
  UnassignRole,
  UpdateRole,

  // Session
  CompleteCrossLogin,
  CreateCrossLogin,
  Login,
  Logout,
  Provision2FA,
  Submit2FA,
  SubmitOTP,
  ValidateSession
};

// Don't forget to add to ../index.ts