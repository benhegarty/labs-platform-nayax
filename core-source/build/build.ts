import { exec as execCallback } from "child_process";
import { promisify } from "util";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { minify } from "terser";
import { minify as minifyHtml } from "html-minifier";
import { join } from "path";
import fs from "fs/promises";
import JavaScriptObfuscator from "javascript-obfuscator";
import CleanCSS from "clean-css";
import chalk from "chalk";

const exec = promisify(execCallback);

const MODULES = [
  { name: "api" },
  { name: "backend" },
  { name: "database" },
  { name: "docs" },
  {
    name: "devserver",
    copyDirs: ["public"],
  },
];
const DIST_DIR = "../../core";
const CORE_DIR = "..";

const runCommand = async (command: string) => {
  try {
    await exec(command);
  } catch (error) {
    console.error(`Error while running command: ${command}`);
    console.log(error);
    process.exit(1);
  }
};

const minifyAndObfuscateFiles = async (filesToProcess: string[]) => {
  for (const filePath of filesToProcess) {
    if (existsSync(filePath)) {
      const fileContent = readFileSync(filePath, "utf-8");

      // Minify the JavaScript file
      const minified = await minify(fileContent, {
        mangle: true,
        compress: true,
        output: {
          comments: false,
        },
      });

      // Obfuscate the minified JavaScript code
      const obfuscated = JavaScriptObfuscator.obfuscate(minified.code || "", {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        // debugProtection: true,
        identifierNamesGenerator: "hexadecimal",
        selfDefending: true,
        stringArray: true,
        stringArrayThreshold: 0.75,
      });

      // Write the obfuscated file back to the output directory
      writeFileSync(filePath, obfuscated.getObfuscatedCode(), "utf-8");
    }
  }
};

const minifyCss = async (filesToProcess: string[]) => {
  for (const filePath of filesToProcess) {
    if (existsSync(filePath)) {
      const fileContent = readFileSync(filePath, "utf-8");
      const minified = new CleanCSS({}).minify(fileContent);
      writeFileSync(filePath, minified.styles, "utf-8");
    }
  }
};

function formatFileList(files: string[]) {
  return files.map((file) => chalk.green(`- ${file.replace("../../core/", "")}`)).join("\n");
}

const buildModule = async (module: { name: string; copyDirs?: string[], justCopy?: boolean }) => {
  console.log(chalk.blue.bold(`---------- Building module: ${module.name}`));
  const inDir = join(CORE_DIR, module.name);
  const outDir = join(DIST_DIR, module.name);

  if (module.justCopy) {
    await runCommand(`cp -r ${inDir} ${outDir}`);
    console.log("Copied raw source.\n");
    return;
  }

  // Get the main file from package.json or fallback to index.ts
  const packageJsonPath = join(inDir, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

  console.log("Building TypeScript...");
  await runCommand(`ln -sf ${CORE_DIR}/build/tsconfig.json ${inDir}/tsconfig.json`);
  await runCommand(`cd ${inDir}; tsc --outDir "${outDir}" --rootDir "${inDir}"`);
  await runCommand(`rm ${inDir}/tsconfig.json`);

  // Copy necessary directories to the dist folder
  if (module.copyDirs) {
    for (const dir of module.copyDirs) {
      console.log(`Copying folder: ${chalk.green(dir)}...`);
      const theDir = join(inDir, dir);
      await runCommand(`cp -r ${theDir} ${outDir}`);
    }
  }

  // Find all .js and .html files in the dist directory
  const jsToMinify: string[] = [];
  const htmlToMinify: string[] = [];
  const cssToMinify: string[] = [];
  const findFiles = async (dir: string) => {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const filePath = join(dir, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        await findFiles(filePath);
      } else if (filePath.endsWith(".js") && !filePath.endsWith(".min.js")) {
        jsToMinify.push(filePath);
      } else if (filePath.endsWith(".html") || filePath.endsWith(".svg")) {
        htmlToMinify.push(filePath);
      } else if (filePath.endsWith(".css") && !filePath.endsWith(".min.css")) {
        cssToMinify.push(filePath);
      }
    }
  };

  await findFiles(outDir);
  if (jsToMinify.length > 0) console.log("Minifying JS...\n" + formatFileList(jsToMinify));

  // Minify and obfuscate JavaScript files
  await minifyAndObfuscateFiles(jsToMinify);

  // Minify HTML and SVG files
  if (htmlToMinify.length > 0) console.log("Minifying HTML and SVG...\n" + formatFileList(htmlToMinify));
  for (const filePath of htmlToMinify) {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const minified = minifyHtml(fileContent, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    });
    await fs.writeFile(filePath, minified, "utf-8");
  }

  // Minify CSS files
  if (cssToMinify.length > 0) console.log("Minifying CSS...\n" + formatFileList(cssToMinify));
  await minifyCss(cssToMinify);

  // Copy package.json to dist directory
  delete packageJson.scripts;
  packageJson.main = packageJson.main.replace(".ts", ".js"); // or dynamically determine based on the module
  writeFileSync(join(outDir, "package.json"), JSON.stringify(packageJson, null, 2), "utf-8");

  console.log();
};

async function main() {
  for (const module of MODULES) {
    await buildModule(module);
  }
  console.log(chalk.blue.bold("----------  Done\n"));
}

main();
