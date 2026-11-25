import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Checked in for two days: one shared moon, weather that changed hourly without notice, and every local asking if I came in peace — 4 stars, would orbit again.";

function checkEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1 to 200 characters, got ${length}`);
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

checkEntry(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
