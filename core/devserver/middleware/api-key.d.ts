import { NextFunction, Request, Response } from "express";
export declare function apiKeyAuth(apiKey: string): (req: Request, res: Response, next: NextFunction) => void;
