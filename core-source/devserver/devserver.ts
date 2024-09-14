import * as env from "@labs/be.environment";
process.env = { ...process.env, ...env.dev };

import * as backend from "@labs/be.services";

// It's like a staircase!
import { HandlerEvent, Role } from "@labs/core.backend/types";
import { APIDefinition, AuthType } from "@labs/core.api/types";
import { tunnelAuthBypass } from "./middleware/tunnel-auth-bypass";
import { User } from "@labs/types";
import { cognitoAuth } from "./middleware/cognito";
import { apiKeyAuth } from "./middleware/api-key";
import { validate } from "./middleware/validator";
import bodyParser from "body-parser";
import { ZodTypeAny } from "zod";
import fs from "fs/promises";
import chalk from "chalk";
import cors from "cors";
import util from "util";
import express, {
  Express,
  NextFunction,
  Request,
  Response
} from "express";

if (!process.argv[2]) {
  console.error(chalk.red.bold("Error: No AWS profile provided.\n"));
  console.log("Usage:", chalk.bold("npm run dev:be <AWS_PROFILE>"));
  process.exit(1);
}
process.env.AWS_PROFILE = process.argv[2];

const LABS_LOGO = `
 |       \\    _ )   __| 
 |      _ \\   _ \\ \\__ \\ 
____| _/  _\\ ___/ ____/`;

const app: Express = express();
const port = process.env.PORT || 3000;

function expressPathParams(path: string) {
  return path.replace(/{([^}]+)}/g, ":$1");
}

// Define a generic function to create endpoints
async function createEndpoint<T extends APIDefinition>(
  app: Express,
  api: T,
  serviceName: string,
  path: string,
) {
  const middlewares: Array<
    (req: Request, res: Response, next: NextFunction) => void
  > = [];

  if (api.authType === AuthType.COGNITO) {
    if (api._meta.backend.roles && api._meta.backend.roles.length > 0) {
      // Bypass for local development, still fetches user
      middlewares.push(cognitoAuth(api._meta.backend.roles as Role[]));
    } else {
      console.error(`No roles assigned to ${serviceName} ${api.path}`);
    }
  } else if (api.authType === AuthType.API_KEY) {
    middlewares.push(apiKeyAuth(api._meta.backend.apiKey));
  }

  middlewares.push(
    validate({
      body: api.bodySchema as ZodTypeAny | undefined,
      params: api.paramsSchema as ZodTypeAny | undefined,
      query: api.querySchema as ZodTypeAny | undefined,
      response: api.responseSchema as ZodTypeAny | undefined,
    }),
  );

  // Add the main handler as the last middleware
  middlewares.push(async (req: Request, res: Response) => {
    if (serviceName != "Documentation") console.log(`${chalk.blue.bold(api.method.toUpperCase() + ":")} ${chalk.bold(path)}\n`);
    try {
      const e: HandlerEvent<typeof req.params, typeof req.query, typeof req.body> = {
        params: req.params,
        query: req.query,
        body: req.body,
        user: (req as Request & { user: User }).user,
      };

      let log;
      for (const key in e) {
        if (e[key] && Object.keys(e[key]).length > 0) {
          if (!log) log = {};
          log[key] = e[key];
        }
      }
      if (log && serviceName != "Documentation") {
        console.log(chalk.blue.bold("REQ:"),
          util.inspect(log, {
            depth: 3,
            colors: true,
            compact: false,
          }),
        );
        console.log();
      }

      const result = await api._meta.backend.handler(e, {
        event: req,
        context: {},
      });

      const body = result.body || result;
      const headers = result.headers || {};
      const statusCode = result.statusCode || 200;

      if (api.responseFileType) {
        res.set({
          "Content-Type": api.responseFileType,
        });
      }

      if (serviceName != "Documentation")
        console.log(chalk.blue.bold("RES:"),
          util.inspect(body, {
            depth: 3,
            colors: true,
            compact: false,
            maxArrayLength: 1,
            maxStringLength: 400,
          }),
        );
      res.status(statusCode).set(headers).send(body);
    } catch (error) {
      console.error(chalk.bold("Error:", error.message));
      console.error(error.stack);
      if (error.status) {
        res.status(error.status).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
    if (serviceName != "Documentation") console.log(chalk.bold.blue("\n-------------------------------------------------------------\n"));
  });

  app[api.method](path, ...middlewares);
}

app.use("/public-dev", express.static("./public"));

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

async function main() {
  let tunnel: unknown;
  try {
    tunnel = JSON.parse(
      await fs.readFile("/home/developer/.vscode/cli/code_tunnel.json", "utf-8")
    );
  // eslint-disable-next-line no-empty
  } catch (_) { }

  if (!tunnel || typeof (tunnel as { id?: string }).id !== "string") {
    console.error(chalk.red.bold("Error: This server can only be started from a VS Code tunnel."));
    process.exit(1);
  }

  const tunnelId = (tunnel as { id: string }).id;
  
  app.use(cors());
  app.use(bodyParser.json());
  app.use(tunnelAuthBypass());

  app.get("/", async (req: Request, res: Response) => {
    const url = getUrl(req.headers as { [key: string]: string });
    let index = await fs.readFile("./public/index.html", "utf-8");
    index = index.replace(/{{tunnelUrl}}/g, url);
    res.send(index);
  });

  let endpointCount = 0;
  for (const serviceName in backend) {
    const s = backend[serviceName];
    const apis = Object.keys(s.API).map((a) => s.API[a]).filter((a) => a._meta?.backend).sort((a, b) => b.path.localeCompare(a.path));
    for (const api of apis) {
      let path = expressPathParams(api.path);
      if (s.Service.basePath) path = s.Service.basePath + path;
      createEndpoint(app, api, serviceName, path);
      endpointCount++;
    }
  }

  app.get("*", function(req, res){
    res.status(404).json({ message: "Not Found" });
  });

  const tunnelUrl = `https://${tunnelId}.aue.devtunnels.ms:${port}`;

  console.clear();
  console.log(chalk.blue.bold("------------------------------------------------------------\n"));
  console.log(chalk.bold.white(LABS_LOGO).split("\n").join("\n                  ") + "\n");
  console.log(chalk.gray("                       Platform v1.1\n"));
  console.log(chalk.blue.bold("------------------------------------------------------------\n"));
  console.log(chalk.blue.bold(" AWS Profile: ") + process.env.AWS_PROFILE + chalk.blue.bold(`${" ".repeat(15-process.env.AWS_PROFILE!.length)}Endpoints: `) + endpointCount);
  console.log();
  console.log(chalk.blue(" "+tunnelUrl));
  console.log(chalk.blue.bold("\n------------------------------------------------------------\n"));

  app.listen(port);
}

main();