import jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";
import { Request, Response, NextFunction } from "express";
import { default as httpError } from "http-errors";
import { User } from "@labs/api/members/types/user";
import { Role } from "@labs/core.backend";

interface AuthRequest extends Request {
  user?: User;
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

// Helper to fetch and convert the JWK to PEM
const getPemFromIssuer = async () => {
  const response = await fetch(`${process.env.COGNITO_AUTH_URL}/.well-known/jwks.json`);
  if (!response.ok) {
    throw httpError.Unauthorized("Error fetching issuer keys.");
  }

  const { keys } = await response.json();
  const k = keys[0]; // Use the first key (assuming a single key)
  return jwkToPem({
    kty: k.kty,
    n: k.n,
    e: k.e,
  });
};

// Middleware for verifying JWT and setting user object
export const cognitoAuth = (roles: Role[] = []) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      if (res.locals.tunnelAuthBypass) {
        return next();
      }
      return res.status(403).send("No authorization header.");
    }

    const token = authHeader;

    try {
      const pem = await getPemFromIssuer();
      const decoded = jwt.verify(token, pem, { issuer: process.env.COGNITO_AUTH_URL });

      const allowedRoles = fillLevels(roles) as string[];

      if (allowedRoles.length === 0) {
        return res.status(403).send("No roles specified for this resource.");
      }

      // Check permissions based on roles
      const userGroups = decoded["cognito:groups"] || [];
      if (allowedRoles.length && !userGroups.some((group) => allowedRoles.includes(group))) {
        return res.status(403).send("Role has insufficient permissions to access this resource.");
      }

      // Set the user object on the request for downstream use
      req.user = {
        id: decoded["custom:memberId"],
        email: decoded.email,
        brandId: decoded["custom:brandId"],
        groups: decoded["cognito:groups"],
      };

      next();
    } catch (error) {
      console.error("Error verifying token:", error.message);
      if (res.locals.tunnelAuthBypass) {
        return next();
      }
      return res.status(401).send("Unauthorized");
    }
  };
};
