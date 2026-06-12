// Select a diverse TARGET set of validated rounds and write rounds.js.
// Caps how many times any single item (wiki title) may appear, so the pool
// doesn't lean on a handful of repeated subjects.
//   node scripts/build-rounds.mjs
import fs from "node:fs";

const TARGET = 500;
const DIR = new URL("../scratch/", import.meta.url);
const rounds = JSON.parse(fs.readFileSync(new URL("valid.json", DIR)));

// Deterministic-ish shuffle (seeded) so reruns are stable.
let seed = 1337;
const rand = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
const shuffled = rounds.map((r) => r).sort(() => rand() - 0.5);

function pick(cap) {
  const use = {};
  const out = [];
  for (const r of shuffled) {
    if (out.length >= TARGET) break;
    const [a, b] = r.items;
    if ((use[a.wiki] || 0) >= cap || (use[b.wiki] || 0) >= cap) continue;
    use[a.wiki] = (use[a.wiki] || 0) + 1;
    use[b.wiki] = (use[b.wiki] || 0) + 1;
    out.push(r);
  }
  return out;
}

// Tighten the per-item cap as far as we can while still hitting TARGET.
let chosen = [];
for (const cap of [1, 2, 3, 4]) {
  chosen = pick(cap);
  if (chosen.length >= TARGET) { console.log(`per-item cap ${cap} → ${chosen.length} rounds`); break; }
  console.log(`per-item cap ${cap} → only ${chosen.length}, loosening`);
}
chosen = chosen.slice(0, TARGET);

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const body = chosen
  .map((r) => {
    const [a, b] = r.items;
    return (
      `  { theme: "${esc(r.theme)}", items: [\n` +
      `    { label: "${esc(a.label)}", wiki: "${esc(a.wiki)}" },\n` +
      `    { label: "${esc(b.label)}", wiki: "${esc(b.wiki)}" } ] },`
    );
  })
  .join("\n");

const out = `// Each round: a shared theme + two things to guess (one per player).
// \`wiki\` is the exact English Wikipedia page title used to fetch the image.
// Generated/curated set — every title was verified to resolve to a lead image.
// To regenerate after editing scratch batches: node scripts/build-rounds.mjs
export const ROUNDS = [
${body}
];
`;

fs.writeFileSync(new URL("../rounds.js", import.meta.url), out);
console.log(`Wrote ${chosen.length} rounds to rounds.js`);
