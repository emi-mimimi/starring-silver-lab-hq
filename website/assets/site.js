/* Shared behaviour: nav, "coming next" toast, sparkle background. */
(function(){
  const S = window.SITE;
  const STAR = "M12 2.5C12.6 9 15 11.4 21.5 12 15 12.6 12.6 15 12 21.5 11.4 15 9 12.6 2.5 12 9 11.4 11.4 9 12 2.5z";
  const spark = (cls = "") => `<svg class="spark ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${STAR}"/></svg>`;
  const byId = id => S.pages.find(p => p.id === id);

  /* ---------- nav ---------- */
  function renderNav(current){
    const nav = document.getElementById("nav");
    if (!nav) return;
    const link = p => `<li><a href="${p.href}" data-page="${p.id}" class="${p.id === "work" ? "ask" : ""}" style="--c:${p.color}" ${p.id === current ? 'aria-current="page"' : ""}>${p.id === "work" ? "" : spark()}${p.name}</a></li>`;
    nav.innerHTML = `
      <div class="nav-in">
        <a class="logo" href="index.html" aria-label="${S.name} home">${spark()}${S.name}</a>
        <ul class="nav-links">${S.pages.map(link).join("")}</ul>
        <button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10"/></svg>Pages
        </button>
      </div>
      <div class="menu" id="menu" hidden>
        ${S.pages.map((p, i) => `<a href="${p.href}" data-page="${p.id}" style="--c:${p.color}" ${p.id === current ? 'aria-current="page"' : ""}>${spark()}<b>${p.name}</b><small>${String(i + 1).padStart(2, "0")}</small></a>`).join("")}
      </div>`;
    const btn = document.getElementById("menu-btn"), menu = document.getElementById("menu");
    btn.addEventListener("click", () => { const open = menu.hidden; menu.hidden = !open; btn.setAttribute("aria-expanded", String(open)); });
    addEventListener("keydown", e => { if (e.key === "Escape" && !menu.hidden){ menu.hidden = true; btn.setAttribute("aria-expanded", "false"); btn.focus(); } });
  }


  /* ---------- previous / next page ---------- */
  function renderPager(current){
    const el = document.getElementById("pager");
    if (!el) return;
    const P = S.pager, seq = [{id: "home", href: "index.html", name: P.home, color: "var(--accent)"}, ...S.pages];
    const i = seq.findIndex(p => p.id === current);
    const prev = seq[i - 1], next = seq[i + 1];
    const left = '<svg class="arw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';
    const right = '<svg class="arw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    el.innerHTML =
      (prev ? `<a class="prev" href="${prev.href}" data-page="${prev.id}">${left}<span><small>${P.prev}</small>${prev.name}</span></a>` : "<span></span>") +
      (next ? `<a class="next" href="${next.href}" data-page="${next.id}" style="--c:${next.color}"><span><small>${P.next}</small>${next.name}</span>${spark("dot")}${right}</a>` : "");
  }

  /* ---------- pages not built yet ---------- */
  let toastTimer;
  function toast(msg){
    let t = document.getElementById("toast");
    if (!t){ t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.innerHTML = spark() + msg; t.hidden = false;
    t.style.animation = "none"; void t.offsetWidth; t.style.animation = "";
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
  }
  document.addEventListener("click", e => {
    const a = e.target.closest("a[data-page]");
    if (!a || a.dataset.page === "home") return;
    const p = byId(a.dataset.page);
    if (p && !p.ready){ e.preventDefault(); toast(`${p.name} is the next page we build`); }
  });

  /* ---------- sparkle background (same as the roadmap) ---------- */
  function sparkles(){
    const cv = document.getElementById("sparkles");
    if (!cv) return;
    const ctx = cv.getContext("2d");
    let pts = [];
    const rnd = n => { const x = Math.sin(n * 91.7) * 10000; return x - Math.floor(x); };
    function size(){
      const dpr = Math.min(devicePixelRatio || 1, 2);
      cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(innerWidth * innerHeight / 4200);
      const COLORS = ["#FFFFFF", "#FFFFFF", "#FFE6A3", "#FFD0E6", "#D2E1FF"];
      pts = Array.from({length: n}, (_, k) => { const big = rnd(k + 1500) < .12; return {x: rnd(k + 1) * innerWidth, y: rnd(k + 300) * innerHeight, r: big ? 5 + rnd(k + 700) * 3.5 : 1.2 + rnd(k + 700) * 2.6, big, c: COLORS[Math.floor(rnd(k + 1900) * COLORS.length)], p: rnd(k + 900) * 6.28, s: (big ? .35 : .5) + rnd(k + 1100), ox: 0, oy: 0}; });
    }
    function drawSpark(x, y, r){ const k = r * .16; ctx.beginPath(); ctx.moveTo(x, y - r); ctx.bezierCurveTo(x + k, y - k, x + k, y - k, x + r, y); ctx.bezierCurveTo(x + k, y + k, x + k, y + k, x, y + r); ctx.bezierCurveTo(x - k, y + k, x - k, y + k, x - r, y); ctx.bezierCurveTo(x - k, y - k, x - k, y - k, x, y - r); ctx.fill(); }
    let mx = -9999, my = -9999;
    addEventListener("pointermove", e => { if (e.pointerType === "mouse"){ mx = e.clientX; my = e.clientY; } });
    document.addEventListener("pointerleave", () => { mx = my = -9999; });
    let shoot = null, nextShoot = 3000 + Math.random() * 5000;
    function drawShoot(t, B){
      if (!shoot && t > nextShoot){
        const a = Math.random() * Math.PI * 2, sp = .17 + Math.random() * .08;
        shoot = {x: innerWidth * (.1 + Math.random() * .8), y: innerHeight * (.1 + Math.random() * .8), ux: Math.cos(a), uy: Math.sin(a), sp, t0: t, life: 2900 + Math.random() * 800};
      }
      if (!shoot) return;
      const k = t - shoot.t0;
      if (k > shoot.life){ shoot = null; nextShoot = t + 7000 + Math.random() * 9000; return; }
      const hx = shoot.x + shoot.ux * shoot.sp * k, hy = shoot.y + shoot.uy * shoot.sp * k;
      if (B.some(b => hx > b.l && hx < b.r && hy > b.t && hy < b.b)) return;
      const len = 150 * Math.min(1, k / 750), tx = hx - shoot.ux * len, ty = hy - shoot.uy * len;
      const g = ctx.createLinearGradient(tx, ty, hx, hy);
      g.addColorStop(0, "rgba(255,230,170,0)"); g.addColorStop(1, "rgba(255,255,255,0.95)");
      ctx.globalAlpha = Math.sin(Math.PI * k / shoot.life); ctx.strokeStyle = g; ctx.lineWidth = 1.8; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(hx, hy); ctx.stroke();
      ctx.fillStyle = "#FFFFFF"; ctx.shadowColor = "#FFE6A3"; ctx.shadowBlur = 12;
      drawSpark(hx, hy, 4.5); ctx.shadowBlur = 0;
    }
    function draw(t){
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      /* keep anything marked data-clear free of sparkles */
      const B = [...document.querySelectorAll("[data-clear]")].map(e => { const r = e.getBoundingClientRect(); return {l: r.left - 16, t: r.top - 16, r: r.right + 16, b: r.bottom + 16}; });
      for (const p of pts){
        const dx = p.x + p.ox - mx, dy = p.y + p.oy - my, d = Math.hypot(dx, dy);
        if (d < 140 && d > 0){ const f = (140 - d) / 140 * 2.2; p.ox += dx / d * f; p.oy += dy / d * f; }
        p.ox *= .94; p.oy *= .94;
        const x = p.x + p.ox, y = p.y + p.oy;
        if (B.some(b => x > b.l && x < b.r && y > b.t && y < b.b)) continue;
        ctx.globalAlpha = .12 + .5 * (.5 + .5 * Math.sin(p.p + t * .0012 * p.s));
        ctx.fillStyle = p.c;
        if (p.big){ ctx.shadowColor = p.c; ctx.shadowBlur = 10; }
        drawSpark(x, y, p.r);
        if (p.big) ctx.shadowBlur = 0;
      }
      drawShoot(t, B);
      ctx.globalAlpha = 1;
    }
    size();
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rz; addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => { size(); if (still) draw(0); }, 150); });
    if (still) draw(0); else { const loop = t => { draw(t); requestAnimationFrame(loop); }; requestAnimationFrame(loop); }
  }

  window.SSL = { spark, STAR, renderNav, renderPager, toast, sparkles, byId };
})();
