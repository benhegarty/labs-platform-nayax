import { NextFunction, Request, Response } from "express";

export function apiKeyAuth(apiKey: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (res.locals.tunnelAuthBypass) {
      return next();
    }
    const reqApiKey =
      req.headers["Authorization"] ||
      req.query["authorization"];
    if (reqApiKey !== apiKey) {
      res.status(401).send("Unauthorized");
      return;
    }
    next();
  };
}