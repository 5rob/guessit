import { ROUNDS } from "./rounds.js";

const $ = (s) => document.querySelector(s);
const POLL_MS = 1200;

let roomId = "";
let mySlot = "";
let myName = "";
let room = null;
let pollTimer = null;
let lastRenderKey = "";

/* ---------- API ---------- */

async function api(body) {
  const r = await fetch("/api/room", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ room: roomId, ...body }),
  });
  return r.json();
}

async function poll() {
  try {
    const r = await fetch(`/api/room?room=${encodeURIComponent(roomId)}`);
    const data = await r.json();
    // Lambda memory got wiped (cold start) — quietly rejoin with the same name.
    if (data.state === "none" && mySlot) {
      const j = await api({ action: "join", name: myName });
      if (j.slot) { mySlot = j.slot; room = j.room; }
    } else {
      room = data;
    }
    render();
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
    .then((j) => {
      const src = j?.thumbnail?.source || j?.originalimage?.source || null;
      return src ? src.replace(/\/(\d+)px-/, "/640px-") : null;
    })
    .catch(() => null)
    // Don't cache a failure — let the next attempt (e.g. the reveal) retry.
    .then((src) => { if (!src) delete imgCache[title]; return src; });
  return imgCache[title];
}

async function showItem(bodyEl, captionEl, item) {
  captionEl.textContent = item.label;
  bodyEl.innerHTML = '<div class="waiting">🖼️</div>';
  const src = await wikiImage(item.wiki);
  if (src) {
    const img = new Image();
    img.src = src;
    img.alt = item.label;
    img.onload = () => { bodyEl.innerHTML = ""; bodyEl.appendChild(img); };
  } else {
    bodyEl.innerHTML = `<div class="qmark" style="font-size:2.5rem">${item.label}</div>`;
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
  room = j.room;
  localStorage.setItem("guessit", JSON.stringify({ myName, roomId }));

  $("#join").classList.add("hidden");
  $("#game").classList.remove("hidden");
  render();
  clearInterval(pollTimer);
  pollTimer = setInterval(poll, POLL_MS);
}

$("#join-btn").onclick = join;
// NB: returning false from an onkeydown handler cancels the keystroke, so these
// must NOT return the `&&` expression's value — keep the body statement-only.
$("#nickname").onkeydown = (e) => { if (e.key === "Enter") join(); };
$("#roomcode").onkeydown = (e) => { if (e.key === "Enter") join(); };

$("#ready-btn").onclick = async () => {
  const me = room?.players?.[mySlot];
  const j = await api({ action: "ready", slot: mySlot, ready: !me?.ready });
  if (j.room) { room = j.room; render(); }
};

$("#play-btn").onclick = async () => {
  const j = await api({ action: "play", total: ROUNDS.length });
  if (j.room) { room = j.room; render(); }
};

$("#win-btn").onclick = async () => {
  const j = await api({ action: "win", slot: mySlot });
  if (j.room) { room = j.room; render(); }
};

$("#again-btn").onclick = async () => {
  const j = await api({ action: "again" });
  if (j.room) { room = j.room; render(); }
};

/* ---------- boot: prefill last session ---------- */

try {
  const saved = JSON.parse(localStorage.getItem("guessit") || "{}");
  if (saved.myName) $("#nickname").value = saved.myName;
  if (saved.roomId) $("#roomcode").value = saved.roomId;
} catch { /* ignore */ }
