// Quick smoke test for api/room.js using mock req/res (no server needed).
// Usage: node scripts/test-api.mjs
import handler from "../api/room.js";

function call(method, body, query = {}) {
  return new Promise((resolve) => {
    const res = {
      headers: {},
      statusCode: 200,
      setHeader(k, v) { this.headers[k] = v; },
      status(c) { this.statusCode = c; return this; },
      json(data) { resolve({ status: this.statusCode, data }); },
    };
    handler({ method, body, query }, res);
  });
}

let failures = 0;
function check(label, cond) {
  console.log(`${cond ? "✔" : "✘"} ${label}`);
  if (!cond) failures++;
}

const ROOM = "test";

// fresh room
let r = await call("GET", null, { room: ROOM });
check("unknown room → state none", r.data.state === "none");

// two players join
r = await call("POST", { action: "join", room: ROOM, name: "Rob" });
check("p1 joins", r.data.slot === "p1");
r = await call("POST", { action: "join", room: ROOM, name: "Sam" });
check("p2 joins", r.data.slot === "p2");

// third player rejected, refresh resumes
r = await call("POST", { action: "join", room: ROOM, name: "Intruder" });
check("third player rejected", !!r.data.error);
r = await call("POST", { action: "join", room: ROOM, name: "Rob" });
check("refresh resumes same slot", r.data.slot === "p1");

// play blocked until both ready
r = await call("POST", { action: "play", room: ROOM, total: 42 });
check("play blocked when not ready", r.data.room.state === "lobby");
await call("POST", { action: "ready", room: ROOM, slot: "p1", ready: true });
r = await call("POST", { action: "ready", room: ROOM, slot: "p2", ready: true });
check("both ready", r.data.room.players.p1.ready && r.data.room.players.p2.ready);

r = await call("POST", { action: "play", room: ROOM, total: 42 });
check("play starts round", r.data.room.state === "playing");
const firstIdx = r.data.room.roundIndex;
check("round index in range", firstIdx >= 0 && firstIdx < 42);

// second play call (other player racing) is a no-op
r = await call("POST", { action: "play", room: ROOM, total: 42 });
check("racing play is idempotent", r.data.room.roundIndex === firstIdx);

// win
r = await call("POST", { action: "win", room: ROOM, slot: "p2" });
check("win → done + score", r.data.room.state === "done" && r.data.room.winner === "p2" && r.data.room.scores.p2 === 1);

// again resets readiness, keeps scores
r = await call("POST", { action: "again", room: ROOM });
check("again → lobby, unready, scores kept",
  r.data.room.state === "lobby" && !r.data.room.players.p1.ready && r.data.room.scores.p2 === 1);

// rounds don't repeat
await call("POST", { action: "ready", room: ROOM, slot: "p1", ready: true });
await call("POST", { action: "ready", room: ROOM, slot: "p2", ready: true });
r = await call("POST", { action: "play", room: ROOM, total: 42 });
check("second round differs from first", r.data.room.roundIndex !== firstIdx);

// reset wipes everything
r = await call("POST", { action: "reset", room: ROOM });
check("reset wipes room", Object.keys(r.data.room.players).length === 0);

// version increases monotonically on every mutation (the anti-flicker guard)
r = await call("POST", { action: "join", room: "ver", name: "A" });
const v1 = r.data.room.version;
r = await call("POST", { action: "join", room: "ver", name: "B" });
const v2 = r.data.room.version;
r = await call("POST", { action: "ready", room: "ver", slot: "p1", ready: true });
const v3 = r.data.room.version;
check("version is monotonic", v1 < v2 && v2 < v3);

// responses advertise the storage mode so the client can warn
r = await call("GET", null, { room: "ver" });
check("GET advertises storage mode (_via)", r.data._via === "memory" || r.data._via === "kv");

console.log(failures ? `\n${failures} test(s) failed` : "\nAll API tests passed ✔");
process.exit(failures ? 1 : 0);
