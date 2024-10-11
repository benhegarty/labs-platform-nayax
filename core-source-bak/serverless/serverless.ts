import {
  APIDefinition,
  AuthType,
  EndpointType,
  ServiceDefinition
} from "@labs/core.api/types";

import {
  defaultPre,
  defaultPost,
  validation,
  cognitoPermission,
} from "./middleware/middleware";

import type {
  Event,
  Response,
  APIGatewayProxyResultJSON,
  ServerlessFunctionConfig,
  HttpEvent,
  WebsocketEvent
} from "./types";

import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

import middy, { MiddlewareObj } from "@middy/core";
import { AWS } from "@serverless/typescript";
export { default as httpError } from "http-errors";
import { ZodTypeAny } from "zod";
import fs from "fs";

import { dev } from "@labs/be.environment";
const environment = dev;

// Lambda handler
export function lambdeHandler(
  lambdaFunc,
  ...middleware: middy.MiddlewareObj[]
) {
  const allMiddleware = [...defaultPre, ...middleware, ...defaultPost];

  return middy<APIGatewayProxyEvent, APIGatewayProxyResult>().handler(async function (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event: Event<any>,
    context: Context,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<Response<any>> {
    try {
      let user;
      console.log(event.requestContext?.authorizer);
      console.log(context);
      if (event.requestContext?.authorizer?.jwt?.claims) {
        const claims = event.requestContext.authorizer.jwt.claims;
        const groups = claims["cognito:groups"] ? claims["cognito:groups"].replace("[", "").replace("]", "").split(" ") : [];
        user = {
          id: claims["custom:memberId"],
          email: claims.email,
          brandId: claims["custom:brandId"],
          groups: groups,
        };
      }

      // Call the lambda function and return the response
      const result = await lambdaFunc(
        {
          params: event.pathParameters,
          query: event.queryStringParameters,
          body: event.body,
          user: user,
        },
        { event, context },
      );
      console.log(result);
      return success(result);
    } catch (error) {
      if (error.statusCode != 500) {
        return {
          statusCode: error.statusCode,
          body: { message: error.message },
        };
      } else {
        return {
          statusCode: 500,
          body: { message: "Internal Server Error" },
        };
      }
    }
  }).use(allMiddleware);
}

// Success response
export function success<T>(body: T): APIGatewayProxyResultJSON<T> {
  return { statusCode: 200, body };
}

export function slsHandler(api: APIDefinition) {
  if (!api._meta.backend.handler) {
    console.error("No handler found for API definition" + api);
    return;
  }

  const cognitoMiddleware: MiddlewareObj[] = [];
  if (api.authType == AuthType.COGNITO) {
    cognitoMiddleware.push(cognitoPermission({ allowedRoles: api._meta.backend.roles }));
  }

  return lambdeHandler(
    api._meta.backend.handler,
    validation({
      params: api.paramsSchema as ZodTypeAny,
      query: api.querySchema as ZodTypeAny,
      body: api.bodySchema as ZodTypeAny,
      response: api.responseSchema as ZodTypeAny,
    }),
    ...cognitoMiddleware,
  );
}

export function slsPackageJson(serviceName) {
  return {
    name: serviceName.toLowerCase(),
    version: "1.0.0",
    main: "handler.js",
    license: "ISC",
    devDependencies: {
      "@types/node": "~22.3.0",
      "serverless-iam-roles-per-function": "~3.2.0",
      "serverless-prune-versions": "~1.0.4",
      "http-errors": "^2.0.0",
      jsonwebtoken: "^9.0.2",
      "jwk-to-pem": "^2.0.6",
    },
  };
}

export function slsFunctionFile(functionName: string, serviceKey: string) {
  const template = fs.readFileSync("./function-template.ts", "utf-8");
  return template.replace(/Members/g, serviceKey).replace(/GetMember/g, functionName);
}

export function slsDefinition(serviceName, version, stage, awsProfile, cognitoIssuerUrl, cognitoClientId, Service: {
  Service: ServiceDefinition;
  API: { [key: string]: APIDefinition };
  Websocket: { [key: string]: APIDefinition };
}): AWS & {
  build: {
    esbuild: {
      minify: boolean;
    };
  };
  stages: {
    [stage: string]: {
      observability?: string;
    };
  };
} {
  let endpoints = Service.API;
  endpoints = {
    ...endpoints,
    ...Service.Websocket,
  };
  return {
    org: "vivaleisure",
    app: "labs-platform",
    service: serviceName,
    frameworkVersion: version,
    plugins: [
      "serverless-prune-versions",
      "serverless-iam-roles-per-function",
    ],
    build: {
      esbuild: {
        minify: true,
      },
    },
    custom: {
      prune: {
        automatic: true,
      },
    },
    package: {
      individually: true,
    },
    stages: {
      dev: {
        observability: "dashboard"
      }
    },
    provider: {
      name: "aws",
      runtime: "nodejs20.x",
      region: "ap-southeast-2",
      stage: stage,
      profile: awsProfile,
      httpApi: {
        authorizers: {
          cognitoAuthorizer: {
            type: "jwt",
            identitySource: "$request.header.Authorization",
            issuerUrl: cognitoIssuerUrl,
            audience: [cognitoClientId]
          }
        },
      },
      environment: {
        ...environment,
      },
    },
    functions: slsFunctions(serviceName, endpoints),
  };
}

export function slsFunctions(serviceName: string, apis: { [key: string]: APIDefinition }): Record<string, ServerlessFunctionConfig> {
  const ret: Record<string, ServerlessFunctionConfig> = {};

  // Sort APIs by path to ensure path param paths are last
  const apisSorted = Object.keys(apis).map((key) => {
    return { key, ...apis[key] };
  }).sort((a, b) => b.path.localeCompare(a.path));

  for (const api of apisSorted) {
    ret[api.key] = {
      handler: `functions/${api.key}.${api.key}Handler`,
      timeout: 29,
      events: [],
    };
    if (api._meta.backend.endpointType == EndpointType.HTTPS) {
      const event: HttpEvent = {
        httpApi: {
          method: api.method.toLowerCase(),
          path: api.path,
        },
      };
      if (api.authType == AuthType.COGNITO) {
        event.httpApi.authorizer = {
          name: "cognitoAuthorizer"
        };
      }
      ret[api.key].events!.push(event);
    } else if (api._meta.backend.endpointType == EndpointType.WEBSOCKET) {
      const event: WebsocketEvent = {
        websocket: {
          route: api.path.substring(1).toLowerCase()
        }
      };
      if (api._meta.backend.enableWebsocketReponse) {
        event.websocket.routeResponseSelectionExpression = "$default";
      }
      ret[api.key].events!.push(event);
    }

    if (api._meta.backend.tables && api._meta.backend.tables.length > 0) {
      const SUFFIX = environment.DYNAMODB_LEGACY_TABLE_SUFFIX;
      for (const table of api._meta.backend.tables) {
        ret[api.key].iamRoleStatementsName = `lp-role-${serviceName}.${api.key}`;
        ret[api.key].iamRoleStatements = [
          {
            Effect: "Allow",
            Action: [
              "dynamodb:DescribeTable",
              "dynamodb:Query",
              "dynamodb:Scan",
              "dynamodb:GetItem",
              "dynamodb:BatchGetItem",
              "dynamodb:PutItem",
              "dynamodb:UpdateItem",
              "dynamodb:DeleteItem",
              "dynamodb:BatchWriteItem",
            ],
            Resource: [
              `arn:aws:dynamodb:\${opt:region, self:provider.region}:*:table/${table._meta.table}${SUFFIX}`,
              `arn:aws:dynamodb:\${opt:region, self:provider.region}:*:table/${table._meta.table}${SUFFIX}/**`,
            ],
          },
        ];
      }
    }
  }
  return ret;
}
