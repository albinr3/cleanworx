import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imageDirectory = path.resolve("public/images/autodetail");
const stagingDirectory = path.join(imageDirectory, ".optimized-staging");
const apply = process.argv.includes("--apply");
const supported = new Set([".webp", ".jpg", ".jpeg", ".png"]);
const entries = await readdir(imageDirectory, { withFileTypes: true });
const files = entries.filter((entry) => entry.isFile() && supported.has(path.extname(entry.name).toLowerCase())).map((entry) => entry.name);

if (!apply) {
  await rm(stagingDirectory, { recursive: true, force: true });
  await mkdir(stagingDirectory, { recursive: true });
}

const results = [];
for (const name of files) {
  const source = path.join(imageDirectory, name);
  const ext = path.extname(name).toLowerCase();
  const targetName = ext === ".png" ? `${path.basename(name, ext)}.webp` : name;
  const target = apply ? path.join(imageDirectory, targetName) : path.join(stagingDirectory, targetName);
  const original = await readFile(source);
  let output;
  if (ext === ".png") output = await sharp(original).webp({ quality: 84, effort: 5 }).toBuffer();
  else if (ext === ".webp") output = await sharp(original).webp({ quality: 84, effort: 5 }).toBuffer();
  else output = await sharp(original).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
  const reduced = output.byteLength < original.byteLength;
  if (!apply) await writeFile(target, reduced ? output : original);
  else if (reduced) await writeFile(target, output);
  if (apply && ext === ".png" && targetName !== name && reduced) await rm(source);
  results.push({ source: name, target: targetName, before: original.byteLength, after: reduced ? output.byteLength : original.byteLength, reduced });
}

if (apply) await rm(stagingDirectory, { recursive: true, force: true });
else await writeFile(path.join(stagingDirectory, "manifest.json"), JSON.stringify(results, null, 2));

const before = results.reduce((total, result) => total + result.before, 0);
const after = results.reduce((total, result) => total + result.after, 0);
console.table(results);
console.log(`Optimized ${results.length} images: ${before} bytes → ${after} bytes (${Math.round((1 - after / before) * 100)}% reduction).`);
