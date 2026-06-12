import { ROUNDS } from "./rounds.js";

const $ = (s) => document.querySelector(s);
// Poll interval is a balance between feeling live and not burning Redis commands
// (the free KV plan is metered per command). 1.8s is plenty for a talk-out-loud
// turn-based game; we also pause entirely when the tab is hidden.
const POLL_MS = 1800;

let roomId = "";
let mySlot = "";
let myName = "";
let room = null;
let pollTimer = null;
let lastRenderKey = "";
let lastVersion = -1;
let warnedStorage = false;

/* ---------- API ---------- */

async function api(body) {
  const r = await fetch("/api/room", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ room: roomId, ...body }),
  });
  return r.json();
}

// Apply a server room object, but drop anything staler than what we've already
// seen. This kills the lobby/game flip-flop caused by reads racing writes.
function applyRoom(next) {
  if (!next) return false;
  if (next.version != null && next.version < lastVersion) return false;
  if (next.version != null) lastVersion = next.version;
  room = next;
  if (next._via) warnStorage(next._via);
  render();
  return true;
}

function warnStorage(via) {
  if (via !== "memory" || warnedStorage) return;
  warnedStorage = true;
  const el = document.createElement("div");
  el.id = "storage-warn";
  el.innerHTML =
    "⚠️ No shared storage detected — add the free <b>Upstash KV</b> integration " +
    "in your Vercel project or the two screens won't stay in sync. (See README.)";
  document.body.appendChild(el);
}

async function poll() {
  try {
    const r = await fetch(`/api/room?room=${encodeURIComponent(roomId)}`);
    const data = await r.json();
    // Room vanished (cold start, memory mode) — quietly rejoin with the same name.
    if (data.state === "none" && mySlot) {
      warnStorage(data._via);
      const j = await api({ action: "join", name: myName });
      if (j.slot) { mySlot = j.slot; lastVersion = -1; applyRoom(j.room); }
    } else {
      applyRoom(data);
    }
  } catch { /* transient network blip — next poll will catch up */ }
}

/* ---------- Wikipedia images ---------- */

const imgCache = {};
function wikiImage(title) {
  imgCache[title] = fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
    { headers: { accept: "application/json" } }
  )
    .then((r) => (r.ok ? r.json() : null))
    // Use thumbnail.source EXACTLY as returned — it's already CDN-cached and
    // always loads. Requesting any other width forces Wikimedia's thumbnailer
    // to generate it on demand, which gets throttled (HTTP 400) under bursts.
    .then((j) => j?.thumbnail?.source || j?.originalimage?.source || null)
    .catch(() => null)
    // Don't cache a failure — let the next attempt (e.g. the reveal) retry.
    .then((src) => { if (!src) delete imgCache[title]; return src; });
  return imgCache[title];
}

async function showItem(bodyEl, captionEl, item) {
  captionEl.textContent = item.label;
  bodyEl.innerHTML = '<div class="waiting">🖼️</div>';
  const fallback = () => {
    bodyEl.innerHTML = `<div class="qmark" style="font-size:2.5rem">${item.label}</div>`;
  };
  const src = await wikiImage(item.wiki);
  if (src) {
    const img = new Image();
    img.alt = item.label;
    img.onload = () => { bodyEl.innerHTML = ""; bodyEl.appendChild(img); };
    // Never leave the 🖼️ placeholder stuck — fall back to the label on error.
    img.onerror = fallback;
    img.src = src;
  } else {
    fallback();
  }
}

/* ---------- rendering ---------- */

function myItem() { return ROUNDS[room.roundIndex % ROUNDS.length].items[mySlot === "p1" ? 0 : 1]; }
function oppItem() { return ROUNDS[room.roundIndex % ROUNDS.length].items[mySlot === "p1" ? 1 : 0]; }

function render() {
  if (!room || !mySlot) return;
  const oppSlot = mySlot === "p1" ? "p2" : "p1";
  const me = room.players?.[mySlot];
  const opp = room.players?.[oppSlot];

  // Expose the game state to CSS so the mobile layout can adapt per state.
  document.body.dataset.state = room.state;

  // Skip re-rendering identical states (keeps images from flickering).
  const key = JSON.stringify([room.state, room.roundIndex, room.winner, me, opp, room.scores]);
  if (key === lastRenderKey) return;
  lastRenderKey = key;

  $("#me-name").textContent = me ? `${me.name} (you)` : "";
  $("#opp-name").textContent = opp ? opp.name : "Waiting for opponent…";

  $("#scorebar").classList.remove("hidden");
  $("#score-me").textContent = `${me?.name ?? "?"} ${room.scores?.[mySlot] ?? 0}`;
  $("#score-opp").textContent = `${room.scores?.[oppSlot] ?? 0} ${opp?.name ?? "?"}`;

  const show = (sel, on) => $(sel).classList.toggle("hidden", !on);
  const theme = room.roundIndex != null ? ROUNDS[room.roundIndex % ROUNDS.length].theme : "";

  if (room.state === "lobby") {
    show("#theme", false);
    show("#ready-btn", true);
    show("#win-btn", false);
    show("#play-btn", true);
    show("#again-btn", false);
    show("#winner-banner", false);

    const readyBtn = $("#ready-btn");
    readyBtn.textContent = me?.ready ? "✔ READY!" : "I'M READY";
    readyBtn.classList.toggle("armed", !!me?.ready);

    const bothReady = me?.ready && opp?.ready;
    $("#play-btn").disabled = !bothReady;
    $("#status").textContent = !opp
      ? "Waiting for your opponent to join…"
      : bothReady
        ? "Let's go! Hit PLAY!"
        : "PLAY unlocks when you're both ready";

    $("#me-body").innerHTML = '<div class="qmark">?</div>';
    $("#me-caption").textContent = "";
    $("#opp-body").innerHTML = `<div class="waiting">${opp?.ready ? "✅" : "👀"}</div>`;
    $("#opp-caption").textContent = opp ? (opp.ready ? "Ready!" : "Not ready yet") : "";
  }

  if (room.state === "playing") {
    show("#theme", true);
    $("#theme").textContent = `💡 ${theme}`;
    show("#ready-btn", false);
    show("#win-btn", true);
    show("#play-btn", false);
    show("#again-btn", false);
    show("#winner-banner", false);

    // Left: the thing my OPPONENT must guess (I can see it, they can't).
    showItem($("#opp-body"), $("#opp-caption"), oppItem());
    // Right: my secret — just a big question mark.
    $("#me-body").innerHTML = '<div class="qmark">?</div>';
    $("#me-caption").textContent = "This is what YOU have to guess!";
    $("#status").textContent = "Take turns asking questions out loud. First to guess wins!";
  }

  if (room.state === "done") {
    show("#theme", true);
    $("#theme").textContent = `💡 ${theme}`;
    show("#ready-btn", false);
    show("#win-btn", false);
    show("#play-btn", false);
    show("#again-btn", true);

    // Reveal both items.
    showItem($("#opp-body"), $("#opp-caption"), oppItem());
    showItem($("#me-body"), $("#me-caption"), myItem());

    const winnerName = room.players?.[room.winner]?.name ?? "Someone";
    const banner = $("#winner-banner");
    banner.classList.remove("hidden");
    banner.textContent = `🏆 ${winnerName} guessed it first!`;
    $("#status").textContent = "";
    if (room.winner === mySlot) confetti();
  }
}

/* ---------- confetti ---------- */

function confetti() {
  const emojis = ["🎉", "✨", "🎊", "⭐", "🏆"];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = 2 + Math.random() * 2 + "s";
    el.style.animationDelay = Math.random() * 0.8 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}

/* ---------- actions ---------- */

async function join() {
  myName = $("#nickname").value.trim();
  roomId = ($("#roomcode").value.trim() || "office").toLowerCase();
  if (!myName) { $("#join-error").textContent = "Pick a nickname first!"; return; }

  const j = await api({ action: "join", name: myName });
  if (j.error) { $("#join-error").textContent = j.error; return; }

  mySlot = j.slot;
  lastVersion = -1;
  localStorage.setItem("guessit", JSON.stringify({ myName, roomId }));

  $("#join").classList.add("hidden");
  $("#game").classList.remove("hidden");
  applyRoom(j.room);
  startPolling();
}

// Only poll a visible tab — a hidden one changes nothing the player can see, so
// polling it just wastes KV commands.
function startPolling() {
  clearInterval(pollTimer);
  pollTimer = document.hidden ? null : setInterval(poll, POLL_MS);
}

document.addEventListener("visibilitychange", () => {
  if (!mySlot) return;
  if (document.hidden) { clearInterval(pollTimer); pollTimer = null; }
  else { poll(); startPolling(); } // snap up to date the moment you look back
});

$("#join-btn").onclick = join;
// NB: returning false from an onkeydown handler cancels the keystroke, so these
// must NOT return the `&&` expression's value — keep the body statement-only.
$("#nickname").onkeydown = (e) => { if (e.key === "Enter") join(); };
$("#roomcode").onkeydown = (e) => { if (e.key === "Enter") join(); };

$("#ready-btn").onclick = async () => {
  const me = room?.players?.[mySlot];
  applyRoom((await api({ action: "ready", slot: mySlot, ready: !me?.ready })).room);
};

$("#play-btn").onclick = async () => {
  applyRoom((await api({ action: "play", total: ROUNDS.length })).room);
};

$("#win-btn").onclick = async () => {
  applyRoom((await api({ action: "win", slot: mySlot })).room);
};

$("#again-btn").onclick = async () => {
  applyRoom((await api({ action: "again" })).room);
};

/* ---------- boot: prefill last session ---------- */

try {
  const saved = JSON.parse(localStorage.getItem("guessit") || "{}");
  if (saved.myName) $("#nickname").value = saved.myName;
  if (saved.roomId) $("#roomcode").value = saved.roomId;
} catch { /* ignore */ }
