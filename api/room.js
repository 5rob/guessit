// Tiny room-state API for the two-player guessing game.
// Storage: Upstash/Vercel KV via REST if env vars exist, otherwise lambda memory
// (fine for two office players — clients auto-rejoin if a cold start wipes it).

const R_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const R_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const mem = (globalThis.__guessitRooms = globalThis.__guessitRooms || {});

async function load(id) {
  if (R_URL) {
    const r = await fetch(`${R_URL}/get/guessit:${id}`, {
      headers: { Authorization: `Bearer ${R_TOKEN}` },
    });
    const j = await r.json();
    return j.result ? JSON.parse(j.result) : null;
  }
  return mem[id] || null;
}

async function save(id, room) {
  if (R_URL) {
    await fetch(`${R_URL}/set/guessit:${id}?EX=86400`, {
      method: "POST",
      headers: { Authorization: `Bearer ${R_TOKEN}` },
      body: JSON.stringify(room),
    });
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
});

const cleanId = (v) =>
  String(v || "").toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 24) || "office";

export default async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  try {
    if (req.method === "GET") {
      const room = await load(cleanId(req.query.room));
      return res.json(room || { state: "none" });
    }

    const b = req.body || {};
    const id = cleanId(b.room);
    let room = (await load(id)) || newRoom();

    switch (b.action) {
      case "join": {
        const name = String(b.name || "").trim().slice(0, 20) || "Player";
        // Resume an existing slot on refresh (matched by nickname).
        let slot = ["p1", "p2"].find((s) => room.players[s]?.name === name);
        if (!slot) slot = !room.players.p1 ? "p1" : !room.players.p2 ? "p2" : null;
        if (!slot) return res.json({ error: "Room is full — pick another room code." });
        room.players[slot] = { name, ready: room.players[slot]?.ready || false };
        await save(id, room);
        return res.json({ slot, room });
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

    await save(id, room);
    return res.json({ room });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
};
