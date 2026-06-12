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

Just import this repo into [Vercel](https://vercel.com/new) — it's a static page
plus one serverless function (`api/room.js`). No build step, no config.

**Optional but recommended:** room state lives in lambda memory by default, which
works fine for two players but can reset on a cold start (the game just bounces
back to the lobby — players auto-rejoin). For rock-solid state, add the
**Upstash Redis** integration from the Vercel Marketplace to the project; the
function picks up the env vars (`UPSTASH_REDIS_REST_URL` / `KV_REST_API_URL`)
automatically.

## Adding rounds

Edit `rounds.js` — each round is a theme plus two items with their exact English
Wikipedia page titles. Check that every title has an image with:

```sh
node scripts/check-images.mjs
```
