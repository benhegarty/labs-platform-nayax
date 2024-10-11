import { NextFunction, Request, Response } from "express";

export function tunnelAuthBypass() {
  return (req: Request, res: Response, next: NextFunction) => {
    res.locals.tunnelAuthBypass = true;
    next();
  };
}