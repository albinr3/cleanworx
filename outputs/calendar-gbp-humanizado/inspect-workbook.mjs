import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "../../docs/seo/Calendario-GBP-CleanWorx-52-Semanas.xlsx";
const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const calendarSheet = workbook.worksheets.getItem("Calendario 52 semanas");
const startRow = Number.parseInt(process.argv[2] ?? "1", 10);
const count = Number.parseInt(process.argv[3] ?? "10", 10);
const calendarValues = calendarSheet.getRange(`A${startRow}:K${startRow + count - 1}`).values;
console.log(JSON.stringify({ kind: "calendarValues", values: calendarValues }));

const preview = await workbook.render({
  sheetName: "Calendario 52 semanas",
  range: "A1:K56",
  scale: 1.5,
  format: "png",
});
await fs.writeFile("calendar-before.png", new Uint8Array(await preview.arrayBuffer()));
