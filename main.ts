// The Best Advice I Ever Got — make.fun entry.
// Writes one sentence (119 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "The night I wanted to quit school, my father said: never decide your life on your worst day — sleep on it, then decide.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(SENTENCE);
