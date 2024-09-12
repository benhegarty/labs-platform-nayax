import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
export declare function validate(schemas: {
    body?: ZodTypeAny;
    params?: ZodTypeAny;
    query?: ZodTypeAny;
    response?: ZodTypeAny;
}): (req: Request, res: Response, next: NextFunction) => void;
