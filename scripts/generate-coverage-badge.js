#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { makeBadge } from 'badge-maker';

const summaryPath = path.resolve('coverage/coverage-summary.json');
if (!fs.existsSync(summaryPath)) {
  console.error('coverage-summary.json not found. Run coverage first.');
  process.exit(1);
}
const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
const pct = summary.total.lines.pct;
const formatPct = pct.toFixed(0);

const badgeSvg = makeBadge({
  label: 'coverage',
  message: `${formatPct}%`,
  color: pct >= 90 ? 'brightgreen' : pct >= 80 ? 'yellow' : 'red',
  style: 'flat'
});

const outDir = path.resolve('coverage');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'coverage-badge.svg');
fs.writeFileSync(outPath, badgeSvg);
console.log('Generated badge at', outPath);
