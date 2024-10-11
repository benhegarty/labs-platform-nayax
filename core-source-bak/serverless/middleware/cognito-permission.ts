import * as httpError from "http-errors";
import { MiddlewareObj } from "@middy/core";
import { Context } from "aws-lambda";

interface CognitoPermissionOptions {
  allowedRoles?: string | string[];
}

function fillLevels(input: string | string[]): string[] {
  const inputArray = Array.isArray(input) ? input : [input];
  const levels = new Set<string>(inputArray);
  for (let i = 1; i <= 5; i++) {
    const level = `L${i}`;
    if (levels.has(level)) {
      for (let j = 1; j <= 5; j++) {
        levels.add(`L${j}`);
      }
    }
  }

  // Convert the set back to an array
  return Array.from(levels);
}

export const cognitoPermission = (
  opts: CognitoPermissionOptions = {}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): MiddlewareObj<unknown, any, Error, Context> => {
  const defaults = {
    allowedRoles: [] as string[]
  };

  const options = { ...defaults, ...opts };

  if (typeof options.allowedRoles === "string") {
    options.allowedRoles = [options.allowedRoles];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const before: MiddlewareObj<unknown, any>["before"] = async (handler) => {
    const allowedRoles = fillLevels(options.allowedRoles) as string[];

    if (allowedRoles.length === 0) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const authorizer = (handler.event as any).requestContext.authorizer || null;

    if (!authorizer) {
      throw new httpError.Unauthorized("Unauthorized");
    }

    let userGroups: string[] = authorizer.jwt.claims["cognito:groups"] ? authorizer.jwt.claims["cognito:groups"].replace("[", "").replace("]", "").split(" ") : [];

    if (typeof userGroups === "string") {
      userGroups = [userGroups];
    }

    if (!userGroups || userGroups.length === 0) {
      throw new httpError.Forbidden("You don't have any role associated with your account");
    }

    // Checking if userGroups contains at least one item from allowedRoles
    if (allowedRoles.length && !userGroups.some((val) => allowedRoles.includes(val))) {
      // user's role is not authorized
      throw new httpError.Forbidden("You don't have the permission to access this resource");
    }
  };

  return {
    before,
  };
};
