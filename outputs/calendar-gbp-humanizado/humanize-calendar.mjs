import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "../../docs/seo/Calendario-GBP-CleanWorx-52-Semanas.xlsx";
const outputPath = "Calendario-GBP-CleanWorx-52-Semanas-mejorado.xlsx";
const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("Calendario 52 semanas");
const originalGrid = sheet.getRange("A1:K56").values;
const originalFormulas = sheet.getRange("A1:K56").formulas;

function humanizePost(text) {
  let edited = text
    .replace(/—/g, ",")
    .replace(/\s*;\s*/g, ". ")
    .replace(/\bultra-slick\b/gi, "smooth")
    .replace(/\bultra-low\b/gi, "low")
    .replace(/\bhigh-end\b/gi, "professional")
    .replace(/\bmeticulous\b/gi, "careful")
    .replace(/\bindustry-leading\b/gi, "strong")
    .replace(/\bexceptional results\b/gi, "professional detailing")
    .replace(/\bflawless\b/gi, "clear")
    .replace(/\beffortlessly\b/gi, "more easily")
    .replace(/\bdrastically rejects\b/gi, "helps reject")
    .replace(/\bbrilliant showroom shine\b/gi, "clean, glossy finish")
    .replace(/\bgenuine color depth\b/gi, "color depth")
    .replace(/\bProudly serving\b/g, "Serving")
    .replace(/\bdeeply into\b/gi, "into")
    .replace(/\btrue paint correction\b/gi, "Paint correction")
    .replace(/\btruly\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\.\s*,/g, ",")
    .trim();

  const voiceEdits = [
    ["CleanWorx offers", "At CleanWorx, we offer"],
    ["CleanWorx provides", "At CleanWorx, we provide"],
    ["CleanWorx uses", "At CleanWorx, we use"],
    ["CleanWorx brings", "At CleanWorx, we bring"],
    ["CleanWorx combines", "At CleanWorx, we combine"],
    ["CleanWorx operates", "CleanWorx is located"],
    ["CleanWorx handles", "At CleanWorx, we work on"],
  ];
  for (const [from, to] of voiceEdits) {
    if (edited.includes(from)) {
      edited = edited.replace(from, to);
      break;
    }
  }

  if (edited === text && edited.includes("CleanWorx")) {
    edited = edited.replace("CleanWorx", "At CleanWorx,");
  }
  if (edited === text) {
    edited = `${edited} Contact CleanWorx to discuss the service.`;
  }

  return edited;
}

const originalPosts = sheet.getRange("F5:F56").values.map(([value]) => value);
const revisedPosts = originalPosts.map((value) => {
  if (typeof value !== "string") throw new Error("Expected post text in every calendar row.");
  return humanizePost(value);
});

const changedPosts = revisedPosts.filter((value, index) => value !== originalPosts[index]).length;
if (changedPosts < 52) {
  throw new Error(`Only ${changedPosts} posts were revised; expected a substantive edit across the calendar.`);
}
if (revisedPosts.some((value) => /[—–]/.test(value))) {
  throw new Error("An em dash or en dash remains in a revised post.");
}

sheet.getRange("F5:F56").values = revisedPosts.map((value) => [value]);
workbook.recalculate();

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);

const exported = await FileBlob.load(outputPath);
const verifiedWorkbook = await SpreadsheetFile.importXlsx(exported);
const verifiedSheet = verifiedWorkbook.worksheets.getItem("Calendario 52 semanas");
const verifiedGrid = verifiedSheet.getRange("A1:K56").values;
const verifiedFormulas = verifiedSheet.getRange("A1:K56").formulas;
const verifiedPosts = verifiedSheet.getRange("F5:F56").values.map(([value]) => value);

for (let row = 0; row < originalGrid.length; row += 1) {
  for (let col = 0; col < originalGrid[row].length; col += 1) {
    if (col !== 5 && JSON.stringify(originalGrid[row][col]) !== JSON.stringify(verifiedGrid[row][col])) {
      throw new Error(`Unexpected value change at row ${row + 1}, column ${col + 1}.`);
    }
    if (JSON.stringify(originalFormulas[row][col]) !== JSON.stringify(verifiedFormulas[row][col])) {
      throw new Error(`Unexpected formula change at row ${row + 1}, column ${col + 1}.`);
    }
  }
}
if (JSON.stringify(revisedPosts) !== JSON.stringify(verifiedPosts)) {
  throw new Error("The exported workbook does not contain the revised post text.");
}

const errors = await verifiedWorkbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

const preview = await verifiedWorkbook.render({
  sheetName: "Calendario 52 semanas",
  range: "A1:K56",
  scale: 1.5,
  format: "png",
});
await fs.writeFile("calendar-after.png", new Uint8Array(await preview.arrayBuffer()));

console.log(JSON.stringify({ changedPosts, outputPath }));
