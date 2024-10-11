import { slsHandler } from "@labs/core.serverless";
import { Members } from "@labs/be.services"; 
export const GetMemberHandler = slsHandler(Members.API.GetMember);