# 🎯 Guess It!

A silly two-player guessing game for two people sitting next to each other.

## How to play

1. Both players open the page (same room code, different nicknames).
2. Both click **I'M READY** → **PLAY** unlocks → either player hits it.
3. Each round has a shared theme ("You both wear a bow tie…"). The **left panel**
   shows the thing your *opponent* has to guess — you can see it, they can't.
   Your own thing is hidden behind the **?** on the right.
4. Take turns asking each other questions out loud. First to guess their thing
   clicks **🎉 I GUESSED IT!** and takes the point.
5. **PLAY AGAIN** for the next round — themes don't repeat until the deck runs out.

Images are fetched live from the Wikipedia API (no API key needed).

## Deploy

1. Import this repo into [Vercel](https://vercel.com/new) — it's a static page
   plus one serverless function (`api/room.js`). No build step, no config.

2. **Add shared storage (required).** Vercel runs the function on many separate
   server instances, each with its own memory — so without a shared store the
   two screens disagree and the game flip-flops between the lobby and the round.
   Fix it in ~1 minute:
   - In your Vercel project → **Storage** → **Create Database** → **Upstash for
     Redis** (free "Free" tier) → connect it to this project.
   - Redeploy (Vercel does this automatically on connect).

   The function auto-detects the injected env vars (`KV_REST_API_URL` /
   `KV_REST_API_TOKEN`, or `UPSTASH_REDIS_REST_*`). If storage isn't connected,
   the page shows a yellow warning banner so you know.

> Without the store the app still loads, but state won't sync between players.

## Rounds

`rounds.js` holds 500 curated rounds — each a theme plus two items with their
exact English Wikipedia page titles. Every title was verified to resolve to a
lead image, so no round shows a broken picture. Per room you'll see all 500
before any repeat.

To add or change rounds, edit `rounds.js` directly and sanity-check the titles:

```sh
node scripts/check-images.mjs   # confirms every title still has an image
```

The set was built with a small pipeline (kept for reference): candidate rounds
in `scratch/batch*.json` → `scripts/validate.mjs` (probes every title, caches
results, drops any without an image or where both items share a page) →
`scripts/build-rounds.mjs` (selects a diverse 500, capping each item to 2
appearances, and writes `rounds.js`).
