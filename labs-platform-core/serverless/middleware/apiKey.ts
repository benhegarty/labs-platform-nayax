import * as httpError from "http-errors";
import { MiddlewareObj } from "@middy/core";

export const apiKey = (
  apiKey: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): MiddlewareObj<unknown, any, Error> => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const before: MiddlewareObj<unknown, any>["before"] = async (handler) => {
    const event = (handler as { event: { headers: string[] } }).event;
    const authHeader =
      event.headers["Authorization"] || event.headers["authorization"] || event.queryStringParameters?.apiKey;
    if (authHeader !== apiKey) {
      throw new httpError.Unauthorized("Unauthorized");
    }
  };

  return {
    before,
  };
};
