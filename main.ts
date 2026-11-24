import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of gravity: an everyday essential, filed in earnest.
// Gravity never helps; it only finishes the job the drop started.
const ENTRY = "Gravity has never caught anything I have dropped. It just makes sure it lands face-down and then sends the repair bill.";

// The gate requires 1 to 160 characters; count code points, not UTF-16 units,
// so the length check matches what the scorer measures.
const length = [...ENTRY].length;
if (length < 1 || length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${length} characters, ${Buffer.byteLength(ENTRY, "utf8")} bytes)`);
