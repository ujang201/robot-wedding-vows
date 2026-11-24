// One-Line Robot Wedding Vows — entry writer.
//
// The entry is a single line of wedding vows for a robot couple. The line is
// assembled here from two parts: a solemn promise clause, and a punchline
// clause that pays the joke off in the last few words. Nothing is random:
// the same program always writes the same line, byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The promise: a wedding vow, machine-specific (updates, crashes, battery).
const PROMISE =
  "I vow to love you through every update, every crash, and every low-battery warning";

// The turn: the payoff lands on the final words, as the judge's brief asks.
const PAYOFF = "and if a factory reset ever wipes me, I'll fall for you all over again.";

const VOW = `${PROMISE} — ${PAYOFF}`;
// The em dash joins the two clauses into one breath, so the line reads aloud
// as a single vow with the punchline arriving at the very end.

const MIN_CHARS = 1;
const MAX_CHARS = 160;

function main(): void {
  const chars = [...VOW].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `vow is ${chars} characters, outside the allowed ${MIN_CHARS}–${MAX_CHARS} range`,
    );
  }
  if (VOW.trim().length === 0) {
    throw new Error("vow must not be only whitespace");
  }
  if (VOW.includes("\n")) {
    throw new Error("vow must fit on one line");
  }

  const outDir = resolve(process.env.OUTPUT_DIR ?? "/output");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), VOW + "\n", "utf8");
}

main();
