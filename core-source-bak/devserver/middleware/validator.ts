import { NextFunction, Request, Response } from "express";
import { default as httpError } from "http-errors";
import { ZodTypeAny, ZodError } from "zod";

export function validate(schemas: {
  body?: ZodTypeAny;
  params?: ZodTypeAny;
  query?: ZodTypeAny;
  response?: ZodTypeAny;
}) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schemas.body) {
        const bodyResult = schemas.body.safeParse(req.body);
        if (!bodyResult.success) {
          throwInputError(bodyResult.error, "body");
        }
      }
      if (schemas.params) {
        const paramsResult = schemas.params.safeParse(req.params);
        if (!paramsResult.success) {
          throwInputError(paramsResult.error, "params");
        }
      }
      if (schemas.query) {
        const queryResult = schemas.query.safeParse(req.query);
        if (!queryResult.success) {
          throwInputError(queryResult.error, "query");
        }
      }
    } catch (error) {
      res.set("Content-Type","text/plain").status(error.status).send(error.message);
      return;
    }
    const originalSend = res.send;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res.send = function(body: any): any {
      const bodyString = body;
      try {
        body = JSON.parse(body);
        if (body.body) body = body.body;
      } catch (_) {
        return originalSend.call(this, bodyString);
      }
      try {
        if (schemas.response) {
          const bodyResult = schemas.response.safeParse(body);
          if (!bodyResult.success) {
            throwOutputError(bodyResult.error, "response");
          }
        }
      } catch (error) {
        console.log(error);
        res.status(error.status);
        return originalSend.call(this, error.message);
      }
      originalSend.call(this, bodyString);
    };
    next();
  };
}

function getPath(p: (string | number)[]) {
  if (p.length === 0) return "";
  return p.reduce((acc, e) => {
    if (typeof e === "string") {
      return `${acc}.${e}`;
    } else {
      return `${acc}[${e}]`;
    }
  }, "");
}

function throwInputError(zodErrors: ZodError, basePath: string) {
  const errorString = zodErrors.errors.reduce((acc, e) => {
    return `${acc} - ${basePath}${getPath(e.path)}:\t${e.message}\n`;
  }, `Invalid ${basePath}:\n`);
  throw httpError.BadRequest(errorString);
}
function throwOutputError(zodErrors: ZodError, basePath: string) {
  const errorString = zodErrors.errors.reduce((acc, e) => {
    return `${acc} - ${basePath}${getPath(e.path)}:\t${e.message}\n`;
  }, "Response didn't match the configured schema\n");
  console.error(errorString);
}