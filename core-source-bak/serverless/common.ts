import fs from "fs/promises";
import path, { dirname } from "path";
import { spawn } from "child_process";

const TEMP_DIR = path.resolve(dirname("."), ".temp");

export async function createTempDir(): Promise<string> {
  await fs.mkdir(TEMP_DIR, { recursive: true }).catch();
  return TEMP_DIR;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getService(services: any, serviceName: string) {
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
      stdio: "inherit", // Inherit terminal's input/output
      shell: true, // Use shell mode to run the full command as a string
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
