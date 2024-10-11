import {
  OpenAPIRegistry,
  OpenApiGeneratorV31,
  RouteConfig,
  getOpenApiMetadata,
} from "@asteasolutions/zod-to-openapi";
import { RouteParameter } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z, ZodTypeAny } from "zod";

import { APIDefinition, AuthType } from "@labs/core.api/types";
import * as Services from "@labs/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const services: any = Services;

function getUrl(headers: { [key: string]: string }) {
  let fullHost;
  if (headers["X-Forwarded-Host"] || headers["x-forwarded-host"]) {
    const port =
      headers["X-Forwarded-Port"] ||
      headers["x-forwarded-port"];
    const proto =
      headers["X-Forwarded-Proto"] ||
      headers["x-forwarded-proto"];
    const host =
      headers["X-Forwarded-Host"] ||
      headers["x-forwarded-host"];
    fullHost = `${proto}://${host}${port != "443" ? ":" + port : ""}`;
  } else {
    fullHost = `http://${headers["Host"] || headers["host"]}`;
  }
  return fullHost;
}

export async function generateDocs(headers: { [key: string]: string }) {
  const registry = new OpenAPIRegistry();

  for (const s in services) {
    if (!services[s].API) {
      continue;
    }
    let endpoints = services[s].API;
    if (services[s].Websocket) {
      endpoints = {
        ...endpoints,
        ...services[s].Websocket,
      };
    }
    for (const ep in endpoints) {
      if (!endpoints[ep]) {
        continue;
      }
      const api: APIDefinition = endpoints[ep];
      let path = api.path;
      if (services[s].Service.basePath) {
        path = services[s].Service.basePath + path;
      }
      if (!api.tags) api.tags = [];
      const openApiRoute: RouteConfig = {
        method: api.method,
        path: path,
        summary: api.isWebsocket ? `WS: ${api.title}` : api.title,
        description: api.description,
        tags: [s, ...api.tags],
        responses: {},
      };
      openApiRoute.request = {};
      if (api.authType === AuthType.VIVA) {
        openApiRoute.request.headers = z.object({
          ["Authorization"]: z.string().optional().openapi({ example: "eyJraWQiOiJmVFh6MmFEbk1MQ3VvVkNIMlduUllnazN...", description: "Cognito JWT - Required unless testing" }),
        });
      }
      if (api.paramsSchema) {
        openApiRoute.request.params = api.paramsSchema as RouteParameter;
      }
      if (api.querySchema) {
        openApiRoute.request.query = api.querySchema as RouteParameter;
      }
      if (api.bodySchema) {
        openApiRoute.request.body = {
          content: {
            "application/json": {
              schema: api.bodySchema as ZodTypeAny,
            },
          },
        };
      }
      if (api.responseSchema || api.responseFileType) {
        const metadata = getOpenApiMetadata(api.responseSchema as ZodTypeAny);
        const type = api.responseFileType || "application/json";
        openApiRoute.responses[200] = {
          description: metadata.description,
        };
        if (type != "application/json") {
          openApiRoute.responses[200].content = {
            [type]: {
              schema: {
                example: metadata.example,
                type: "string",
                format: "binary",
              }
            }
          };
        } else {
          openApiRoute.responses[200].content = {
            [type]: {
              schema: api.responseSchema as ZodTypeAny
            }
          };
        }
      }
      registry.registerPath(openApiRoute);
    }
  }

  const generator = new OpenApiGeneratorV31(registry.definitions);
  const documentation = generator.generateDocument({
    openapi: "3.1.0",
    info: {
      version: "1.0.0",
      title: "VivaLABS Platform API"
    },
    servers: [
      {
        url: getUrl(headers),
        description: "Development",
      },
      // {
      //   url: "https://w13ufd5z15.execute-api.ap-southeast-2.amazonaws.com/dev",
      //   description: "Serverless Dev",
      // },
      // {
      //   url: "https://sandbox-api.the-hub.ai",
      //   description: "Sandbox",
      // },
      // {
      //   url: "https://api.the-hub.ai",
      //   description: "Production",
      // },
    ],
  });

  return documentation;
}