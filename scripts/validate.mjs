// Validate every wiki title across the scratch batches against the Wikipedia
// summary API. Resumable: results are cached to scratch/title-cache.json, so if
// rate-limiting interrupts a run, just run it again to finish the rest.
//
//   node scripts/validate.mjs          # probe titles, fill the cache
//   node scripts/validate.mjs --build  # write scratch/valid.json from the cache
import fs from "node:fs";

const DIR = new URL("../scratch/", import.meta.url);
const CACHE_PATH = new URL("title-cache.json", DIR);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const UA = "guessit-validator/1.0 (https://github.com/5rob/guessit; office game)";

const batches = fs.readdirSync(DIR).filter((f) => /^batch\d+\.json$/.test(f));
const rounds = batches.flatMap((f) => JSON.parse(fs.readFileSync(new URL(f, DIR))));
const titles = [...new Set(rounds.flatMap((r) => r.items.map((i) => i.wiki)))];

const cache = fs.existsSync(CACHE_PATH) ? JSON.parse(fs.readFileSync(CACHE_PATH)) : {};
const saveCache = () => fs.writeFileSync(CACHE_PATH, JSON.stringify(cache));

// Returns: {ok:true,src} | {ok:false} (definitive: page/thumb missing) | null (throttled — retry later)
async function probe(title) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await fetch(url, { headers: { "user-agent": UA, accept: "application/json" } });
      if (res.status === 404) return { ok: false };          // no such page — definitive
      if (res.status === 429 || res.status >= 500) { await sleep(1500 * (attempt + 1)); continue; }
      const text = await res.text();
      let j;
      try { j = JSON.parse(text); } catch { await sleep(1200 * (attempt + 1)); continue; } // throttled HTML
      if (j.type === "https://mediawiki.org/wiki/HyperSwitch/errors/not_found") return { ok: false };
      const src = j.thumbnail?.source || j.originalimage?.source || null;
      return src ? { ok: true, src } : { ok: false };        // page exists but no image — definitive
    } catch { await sleep(1000 * (attempt + 1)); }
  }
  return null; // exhausted retries — treat as throttled, leave uncached for a later pass
}

if (process.argv.includes("--build")) {
  const valid = new Set(Object.entries(cache).filter(([, v]) => v.ok).map(([t]) => t));
  const seenPair = new Set();
  const kept = [];
  for (const r of rounds) {
    const [a, b] = r.items;
    if (!valid.has(a.wiki) || !valid.has(b.wiki)) continue;     // both must have an image
    if (a.wiki === b.wiki) continue;                            // both panels would show the same image
    if (a.label.toLowerCase() === b.label.toLowerCase()) continue;
    const sig = [a.wiki, b.wiki].sort().join(" :: ");
    if (seenPair.has(sig)) continue;                            // drop duplicate pairings
    seenPair.add(sig);
    kept.push(r);
  }
  fs.writeFileSync(new URL("valid.json", DIR), JSON.stringify(kept, null, 2));
  console.log(`Valid rounds: ${kept.length} (from ${rounds.length} candidates)`);
  process.exit(0);
}

let done = 0, todo = 0;
for (const title of titles) {
  if (cache[title] && (cache[title].ok || cache[title].def)) { done++; continue; } // already settled
  todo++;
  const r = await probe(title);
  if (r === null) { process.stdout.write("?"); }               // throttled — leave for next run
  else { cache[title] = r.ok ? { ok: true } : { ok: false, def: true }; process.stdout.write(r.ok ? "." : "x"); }
  if (todo % 25 === 0) saveCache();
  await sleep(180);
}
saveCache();

const settled = titles.filter((t) => cache[t] && (cache[t].ok || cache[t].def)).length;
const okCount = titles.filter((t) => cache[t]?.ok).length;
console.log(`\nsettled ${settled}/${titles.length} unique titles | with image: ${okCount} | unresolved (rerun): ${titles.length - settled}`);
