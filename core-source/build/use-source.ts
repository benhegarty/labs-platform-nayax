import { writeFileSync, readFileSync } from "fs";
import { join } from "path";
const packageJsonPath = join(__dirname, "../../package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
const ws = packageJson.workspaces;
for (const w in ws) {
  ws[w] = ws[w].replace("core/", "core-source/");
}
const sc = packageJson.scripts;
sc["dev:be"] = sc["dev:be"].replace("./core/", "./core-source/").replace(".js", ".ts");
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));