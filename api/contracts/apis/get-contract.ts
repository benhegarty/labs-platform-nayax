import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
import { Contract } from "@labs/schemas";
wrapOpenApi(z);

export const GetContract = api({
  method: Method.GET,
  path: "/{contractId}",
  title: "Get Contract",
  description: "Get the contract details",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  responseSchema: Contract.Schema,
});

// Don't forget to add to ../index.ts
