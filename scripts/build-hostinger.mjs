import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

import fs from "node:fs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextCli = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");

const result = spawnSync(process.execPath, [nextCli, "build"], {
  cwd: projectRoot,
  env: { ...process.env, HOSTINGER_STATIC_EXPORT: "1" },
  stdio: "inherit",
});

if (result.error) {
  console.error(result.error);
}

if (result.status === 0) {
  const serviceAreasHtml = path.join(projectRoot, "out", "service-areas.html");
  const serviceAreasDir = path.join(projectRoot, "out", "service-areas");
  if (fs.existsSync(serviceAreasHtml) && fs.existsSync(serviceAreasDir)) {
    fs.copyFileSync(serviceAreasHtml, path.join(serviceAreasDir, "index.html"));
  }
}

process.exit(result.status ?? 1);
