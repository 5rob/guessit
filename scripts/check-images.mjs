// Sanity-check that every wiki title in rounds.js resolves to a thumbnail.
// Throttled + retried so Wikipedia doesn't rate-limit us.
// Usage: node scripts/check-images.mjs
import { ROUNDS } from "../rounds.js";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const titles = [...new Set(ROUNDS.flatMap((r) => r.items.map((i) => i.wiki)))];
const bad = [];

async function probe(title) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "user-agent": "guessit-check/1.0 (office game)", accept: "application/json" },
      });
      if (res.status === 429) { await sleep(1500 * (attempt + 1)); continue; }
      const text = await res.text();
      let j;
      try { j = JSON.parse(text); }
      catch { await sleep(1200 * (attempt + 1)); continue; } // non-JSON = throttled, retry
      if (!res.ok) return `MISSING PAGE (${res.status})`;
      if (!j.thumbnail?.source) return "NO THUMBNAIL";
      return null;
    } catch (e) {
      await sleep(1000 * (attempt + 1));
    }
  }
  return "UNREACHABLE (after retries)";
}

for (const title of titles) {
  const problem = await probe(title);
  if (problem) { console.log(`${problem.padEnd(26)}: ${title}`); bad.push(title); }
  else process.stdout.write(".");
  await sleep(250); // be polite
}

console.log("");
console.log(bad.length ? `\n${bad.length}/${titles.length} titles need fixing` : `\nAll ${titles.length} titles have images ✔`);
process.exit(bad.length ? 1 : 0);
