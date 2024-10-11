import fs from "fs/promises";
import path, { dirname } from "path";
import { spawn } from "child_process";
import JSON5 from "json5";

import * as Services from "@labs/be.services";
import { BackEndService } from "@labs/core.backend";
import {
  slsDefinition,
  slsPackageJson,
  slsFunctionFile,
} from "@labs/core.serverless";

const TEMP_DIR = path.resolve(dirname("."), ".temp");
const SERVERLESS_VERSION = "4.3.2";
const SERVICE_NAME_PREFIX = "labs-platform-";
const SERVERLESS_LICENSE_KEY = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJzY3JpcHRpb25JZCI6IjQ3Mzg1OTY2LTZkZDktNDAzYS04MmMxLTVlZjNmYzM0MmMxMCIsIm9yZ0lkIjoiZmYxYjYwYWQtZWUyNi00N2U2LThlOWItNDE0M2VkYjdiOTZlIiwiaWF0IjoxNzI2MDQxNTUyLCJleHAiOjE3NTc1Nzc1NTIsImlzcyI6ImFwcC5zZXJ2ZXJsZXNzLmNvbSJ9.Ln-Y-4FIXqoKZP12nVvK9NVkp6k8Q3VORP4xwfNGz0tOWACC8XLvTKiQqhU_ZtC3iupNUiw3o-r8Pdb4OeY_1RpXdJovm98TyMAEOQ4Do8qufe4ieCpMLsjjJUONjXz54DRVdpX5bpX5ezTbykjvZaIas35arZHYHw3uOrQVnk5RyiN45mMDDPBvkBmRvuS6jbDB876JpcgFdofVZ0FsYxz2_7K8exQAwPeybEw2pYyZzewDEFt_XKZJw-KelSFwO-IyhivRLeimu_-bTA-T54MZHwc4kQ7riuxUUUcGBixgvuMS_nZ0NsXG-RuMEYMigjG7ZXoSJS1YqZ8ufOFPgA";
const SERVERLESS_ACCESS_KEY = "AKfh5L5PXtIwdg85gL1aavDNxKnqBuIC0RMIyyrGwX0II";

if (!process.env.NODE_ENV) process.env.NODE_ENV = "dev";
import * as appEnvironment from "@labs/be.environment";
const environment = appEnvironment[process.env.NODE_ENV];
console.log(process.env.NODE_ENV);

export async function createTempDir(): Promise<string> {
  await fs.mkdir(TEMP_DIR, { recursive: true }).catch();
  return TEMP_DIR;
}

interface Service {
  path: string;
}

interface ComposeServices {
  services: {
    [key: string]: Service;
  }
}
export const serverlessCompose: ComposeServices = {
  services: {},
};

export function getService(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  services: { [key: string]: BackEndService<any> },
  serviceName: string,
) {
  if (!serviceName) {
    throw new Error("Include a service name. eg. npm run dev <service-name>");
  }
  const service = Object.keys(services).find(
    (key) => key.toLowerCase() === serviceName.toLowerCase(),
  );
  if (!service) {
    throw new Error(`Service ${serviceName} not found.`);
  }
  return {
    serviceKey: service,
    service: services[service],
  };
}

export async function run(
  command: string,
  directory: string = process.cwd(),
): Promise<void> {
  return new Promise((resolve, reject) => {
    const shellProcess = spawn(command, {
      cwd: directory,
      stdio: "inherit",
      shell: true,
    });

    shellProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    shellProcess.on("error", (err) => {
      reject(err);
    });
  });
}

async function main() {
  const awsProfile = process.argv[2];
  if (!awsProfile) {
    throw new Error(
      "Include an AWS profile. eg. npm run sls:deploy <aws-profile>",
    );
  }

  const deployService = process.argv[3];

  const tmpDirPath = await createTempDir();

  let lastServiceDir;
  for (const serviceName in Services) {
    if (deployService && serviceName.toLocaleLowerCase() !== deployService.toLocaleLowerCase()) {
      continue;
    }
    const service = Services[serviceName];
    const serviceFullName = SERVICE_NAME_PREFIX + serviceName;

    // create service directory
    const serviceDir = `${tmpDirPath}/${serviceFullName}`;
    lastServiceDir = serviceDir;
    const functionsDir = `${serviceDir}/functions`;

    serverlessCompose.services[serviceFullName] = {
      path: `./${serviceFullName}`
    };

    // delete existing service dir
    try {
      await fs.rm(functionsDir, { recursive: true });
      // eslint-disable-next-line no-empty
    } catch (_) {}

    await fs.mkdir(`${functionsDir}`, { recursive: true });

    // create package.json
    await fs.writeFile(
      `${serviceDir}/package.json`,
      JSON.stringify(slsPackageJson(serviceName), null, 2),
    );

    // create serverless.ts
    const definition = slsDefinition(
      serviceFullName,
      SERVERLESS_VERSION,
      process.env.NODE_ENV,
      awsProfile,
      environment.COGNITO_AUTH_URL,
      environment.COGNITO_CLIENT_ID,
      service,
    );
    const serverlessTs = `export default ${JSON5.stringify(definition, null, 2)};`;
    await fs.writeFile(`${serviceDir}/serverless.ts`, serverlessTs);

    // create handlers
    for (const key in service.API) {
      const functionName = key;
      await fs.writeFile(
        `${functionsDir}/${key}.ts`,
        slsFunctionFile(functionName, serviceName),
      );
    }

    // run npm install on serverless dir
    await run("npm install", serviceDir);
  }
  const composeTs = `export default ${JSON5.stringify(serverlessCompose, null, 2)};`;
  await fs.writeFile(`${tmpDirPath}/serverless-compose.ts`, composeTs);

<<<<<<< Updated upstream
  process.env.SERVERLESS_LICENSE_KEY = SERVERLESS_LICENSE_KEY;
  process.env.SERVERLESS_ACCESS_KEY = SERVERLESS_ACCESS_KEY;
  process.env.AWS_PROFILE = awsProfile;
  await run("sls deploy", TEMP_DIR);
=======
  if (!lastServiceDir) {
    throw new Error(`${deployService} not found.`);
  }
  if (deployService) {
    await run("sls deploy", lastServiceDir);
    return;
  } else {
    await run("sls deploy", TEMP_DIR);
  }
  
>>>>>>> Stashed changes
}
main();
