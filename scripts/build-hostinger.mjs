import path from "node:path";

import fs from "node:fs";

const projectRoot = path.resolve(import.meta.dirname, "..");
const outputDirectory = path.join(projectRoot, "out");
const standaloneDirectory = path.join(projectRoot, ".next", "standalone");
const staticDirectory = path.join(projectRoot, ".next", "static");

if (!fs.existsSync(standaloneDirectory) || !fs.existsSync(staticDirectory)) {
  throw new Error("Next.js standalone output is missing. Run `npm run build` before packaging for Hostinger.");
}

fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.cpSync(standaloneDirectory, outputDirectory, { recursive: true });
fs.mkdirSync(path.join(outputDirectory, ".next"), { recursive: true });
fs.cpSync(staticDirectory, path.join(outputDirectory, ".next", "static"), { recursive: true });
fs.cpSync(path.join(projectRoot, "public"), path.join(outputDirectory, "public"), { recursive: true });

const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, "package.json"), "utf8"));
fs.writeFileSync(
  path.join(outputDirectory, "package.json"),
  `${JSON.stringify({ private: true, scripts: { start: "node server.js" } }, null, 2)}\n`,
);
fs.writeFileSync(path.join(outputDirectory, ".node-version"), `${packageJson.engines.node.replace(">=", "")}\n`);
