// The Best Advice I Ever Got — make.fun entry.
// Writes one sentence (119 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "The night I wanted to quit school, my father said: never decide your life on your worst day — sleep on it, then decide.";

// Gate: the entry must be 1–200 characters, not only whitespace.
if (SENTENCE.length < 1 || SENTENCE.length > 200 || !SENTENCE.trim()) {
  throw new Error(`entry is ${SENTENCE.length} characters, outside the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(SENTENCE);
