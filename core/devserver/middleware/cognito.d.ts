import { Request, Response, NextFunction } from "express";
import { User } from "@labs/api/members/types/user";
import { Role } from "@labs/core.backend";
interface AuthRequest extends Request {
    user?: User;
}
export declare const cognitoAuth: (roles?: Role[]) => (req: AuthRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export {};
