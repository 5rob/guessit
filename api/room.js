// Tiny room-state API for the two-player guessing game.
// Storage: Upstash/Vercel KV via REST when env vars exist (REQUIRED on Vercel —
// see HAS_STORE note below). Falls back to per-instance lambda memory, which only
// works for local dev / a single server instance.

const R_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const R_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
// IMPORTANT: lambda memory is per-instance, so on Vercel (many instances) it
// CANNOT share state between requests — that causes the lobby/game flip-flop.
// A shared store (Upstash/Vercel KV) is required for production. `HAS_STORE` is
// surfaced to the client so it can warn when storage isn't configured.
const HAS_STORE = !!(R_URL && R_TOKEN);
const mem = (globalThis.__guessitRooms = globalThis.__guessitRooms || {});
const key = (id) => `guessit:${id}`;

// Upstash REST: send one command as a JSON array to the base URL — no path/URL
// encoding pitfalls with the JSON value or its special characters.
async function redis(cmd) {
  const r = await fetch(R_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${R_TOKEN}`, "content-type": "application/json" },
    body: JSON.stringify(cmd),
  });
  if (!r.ok) throw new Error(`redis ${r.status}`);
  return (await r.json()).result;
}

async function load(id) {
  if (HAS_STORE) {
    const result = await redis(["GET", key(id)]);
    return result ? JSON.parse(result) : null;
  }
  return mem[id] || null;
}

async function save(id, room) {
  if (HAS_STORE) {
    await redis(["SET", key(id), JSON.stringify(room), "EX", "86400"]);
    return;
  }
  mem[id] = room;
}

const newRoom = () => ({
  state: "lobby", // lobby | playing | done
  players: {},    // { p1: {name, ready}, p2: {name, ready} }
  scores: { p1: 0, p2: 0 },
  roundIndex: null,
  used: [],
  winner: null,
  version: 0,     // monotonic — clients ignore any response older than the last seen
});

const cleanId = (v) =>
  String(v || "").toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 24) || "office";

const VIA = HAS_STORE ? "kv" : "memory";

export default async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  try {
    if (req.method === "GET") {
      const room = await load(cleanId(req.query.room));
      return res.json({ ...(room || { state: "none" }), _via: VIA });
    }

    const b = req.body || {};
    const id = cleanId(b.room);
    let room = (await load(id)) || newRoom();

    // Bump the monotonic version + persist; clients drop any staler response.
    const persist = async () => { room.version = (room.version || 0) + 1; await save(id, room); };

    switch (b.action) {
      case "join": {
        const name = String(b.name || "").trim().slice(0, 20) || "Player";
        // Resume an existing slot on refresh (matched by nickname).
        let slot = ["p1", "p2"].find((s) => room.players[s]?.name === name);
        if (!slot) slot = !room.players.p1 ? "p1" : !room.players.p2 ? "p2" : null;
        if (!slot) return res.json({ error: "Room is full — pick another room code." });
        room.players[slot] = { name, ready: room.players[slot]?.ready || false };
        await persist();
        return res.json({ slot, room, _via: VIA });
      }
      case "ready": {
        if (room.players[b.slot]) room.players[b.slot].ready = !!b.ready;
        break;
      }
      case "play": {
        const total = Math.max(1, parseInt(b.total, 10) || 1);
        const bothReady = room.players.p1?.ready && room.players.p2?.ready;
        if (room.state === "lobby" && bothReady) {
          if (room.used.length >= total) room.used = []; // recycle once exhausted
          let idx;
          do { idx = Math.floor(Math.random() * total); } while (room.used.includes(idx));
          room.used.push(idx);
          room.roundIndex = idx;
          room.winner = null;
          room.state = "playing";
        }
        break;
      }
      case "win": {
        if (room.state === "playing" && room.players[b.slot]) {
          room.state = "done";
          room.winner = b.slot;
          room.scores[b.slot]++;
        }
        break;
      }
      case "again": {
        if (room.state === "done") {
          room.state = "lobby";
          room.winner = null;
          room.roundIndex = null;
          for (const s of ["p1", "p2"]) if (room.players[s]) room.players[s].ready = false;
        }
        break;
      }
      case "reset": {
        room = newRoom();
        break;
      }
      default:
        return res.status(400).json({ error: "bad action" });
    }

    await persist();
    return res.json({ room, _via: VIA });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
};
