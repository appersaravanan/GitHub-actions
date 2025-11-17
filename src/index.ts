#!/usr/bin/env node
import { sum } from './math/sum.js';

function main() {
  const a = Number(process.argv[2] ?? 2);
  const b = Number(process.argv[3] ?? 3);
  const result = sum(a, b);
  // Minimal CLI output
  console.log(`${a} + ${b} = ${result}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main };
