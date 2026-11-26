// The Moon Gets One Star — a one-star review of the Moon, 120 chars at most.
// Writes the review to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt)
// and verifies it against the gate before exiting.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. It only works nights, never answers emails, and still gets called beautiful. Worst coworker ever.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, REVIEW, "utf8");

const written = readFileSync(outFile, "utf8");
const chars = [...written].length;
if (chars < 1 || chars > 120 || written.trim().length === 0) {
  console.error(`Gate failed: entry is ${chars} characters, must be 1-120.`);
  process.exit(1);
}
console.log(`Wrote ${chars}-character review to ${outFile}`);
