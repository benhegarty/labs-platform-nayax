import jsonBodyParser from "@middy/http-json-body-parser";
import httpErrorHandler from "@middy/http-error-handler";
import inputOutputLogger from "@middy/input-output-logger";
import httpResponseSerializer from "@middy/http-response-serializer";
import cors from "@middy/http-cors";
import { middyZodValidator } from "middy-kneel-before-zod";
import { ZodTypeAny, ZodError } from "zod";
import { InternalServerError, BadRequest } from "http-errors";
import util from "util";

export { cognitoPermission } from "./cognito-permission";

export const defaultPre = [
  jsonBodyParser({ disableContentTypeError: true }),
  httpErrorHandler(),
  cors(),
  httpResponseSerializer({
    serializers: [
      {
        regex: /^application\/json$/,
        serializer: ({ body }) => JSON.stringify(body),
      },
      {
        regex: /^text\/plain$/,
        serializer: ({ body }) => body,
      },
    ],
    defaultContentType: "application/json",
  }),
];

export const defaultPost = [
  inputOutputLogger({
    logger: (request) => {
      if (request.event?.multiValueHeaders) delete request.event.multiValueHeaders;
      if (request.event?.multiValueQueryStringParameters) delete request.event.multiValueQueryStringParameters;
      if (request.response?.multiValueHeaders) delete request.response.multiValueHeaders;
      if (request.response?.multiValueQueryStringParameters) delete request.response.multiValueQueryStringParameters;
      console.log(
        util.inspect(request.event ?? request.response, {
          depth: null,
          colors: true,
          compact: false,
        }),
      );

      // console.log(util.inspect(toLog, { depth: null, colors: true }));
      // console.log(JSON5.stringify(request.event, null, 2) ?? JSON5.stringify(request.response, null, 2));
      // const child = logger.child(request.context);
      // child.info(request.event ?? request.response);
    },
    awsContext: true,
  }),
];

// Validator
type Validator = {
  params?: ZodTypeAny;
  query?: ZodTypeAny;
  body?: ZodTypeAny;
  response?: ZodTypeAny;
};
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
function throwInputError(zodErrors: ZodError) {
  const errorString = zodErrors.errors.reduce((acc, e) => {
    return `${acc} - body${getPath(e.path)}:\t${e.message}\n`;
  }, "Invalid body:\n");
  throw BadRequest(errorString);
}
function throwOutputError(zodErrors: ZodError) {
  const errorString = zodErrors.errors.reduce((acc, e) => {
    return `${acc} - body${getPath(e.path)}:\t${e.message}\n`;
  }, "Invalid response not sent:\n");
  console.error(errorString);
  throw InternalServerError(
    "The function attempted to send an invalid response.",
  );
}
export function validation(schema: Validator) {
  return middyZodValidator({
    inputPathParametersSchema: schema.params,
    inputQueryStringParametersSchema: schema.query,
    inputBodySchema: schema.body,
    outputBodySchema: schema.response,
    inputErrorHandler: throwInputError,
    outputErrorHandler: throwOutputError,
  });
}
