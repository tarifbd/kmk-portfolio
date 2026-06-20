/* ============================================================
   main.js — Lenis + GSAP / ScrollTrigger
   Glassmorphic white edition. Splendid, performant motion.
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------------------
   1. LENIS SMOOTH SCROLL
   ------------------------------------------------------------ */
let lenis;
if (!prefersReduced) {
  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    lerp: 0.1,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* In-page anchor links via Lenis. */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { duration: 1.4 });
    else target.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  });
});

/* ============================================================
   2. (A) CLIP-PATH STAGGERED TEXT REVEAL
   ============================================================ */
function initTextReveals() {
  gsap.utils.toArray('[data-line]').forEach((l) => gsap.set(l, { yPercent: 100 }));

  gsap.utils.toArray('h1, h2').forEach((heading) => {
    const lines = heading.querySelectorAll('[data-line]');
    if (!lines.length) return;
    gsap.to(lines, {
      yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.12,
      scrollTrigger: { trigger: heading, start: 'top 88%' },
    });
  });

  gsap.utils.toArray('.reveal-fade, [data-split]').forEach((el) => {
    gsap.from(el, {
      y: 24, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 92%' },
    });
  });
}

/* ============================================================
   3. BACKGROUND ORBS — scroll parallax + gentle drift
   The light behind the glass keeps moving so frosted surfaces
   feel alive as you scroll.
   ============================================================ */
function initOrbs() {
  gsap.utils.toArray('[data-orb]').forEach((orb, i) => {
    const depth = parseFloat(orb.dataset.orb) || 0.1;

    // Parallax tied to whole-page scroll.
    gsap.to(orb, {
      yPercent: -depth * 100 * 6,
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.2 },
    });

    // Slow organic drift.
    gsap.to(orb, {
      xPercent: i % 2 ? 8 : -8,
      duration: 10 + i * 2,
      ease: 'sine.inOut',
      repeat: -1, yoyo: true,
    });
  });
}

/* ============================================================
   4. STATS COUNT-UP
   ============================================================ */
function initStats() {
  gsap.utils.toArray('[data-stat]').forEach((el) => {
    const end = parseFloat(el.dataset.stat);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: end, duration: 1.6, ease: 'power2.out',
      onUpdate: () => { el.textContent = Math.round(obj.v); },
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });
}

/* ============================================================
   5. (B) PINNED HORIZONTAL PROJECTS + (C) PARALLAX
   ============================================================ */
function initHorizontal() {
  const section = document.querySelector('[data-projects]');
  const track = document.querySelector('[data-track]');
  if (!section || !track) return;

  const amount = () => track.scrollWidth - window.innerWidth;

  const tween = gsap.to(track, {
    x: () => -amount(),
    ease: 'none',
    scrollTrigger: {
      trigger: section, start: 'top top', end: () => '+=' + amount(),
      pin: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true,
    },
  });

  gsap.utils.toArray('[data-parallax]').forEach((img) => {
    gsap.fromTo(img,
      { scale: 1.25, xPercent: -6 },
      { scale: 1, xPercent: 6, ease: 'none',
        scrollTrigger: {
          trigger: img.closest('[data-card]'), containerAnimation: tween,
          start: 'left right', end: 'right left', scrub: true,
        },
      });
  });

  const countEl = document.querySelector('[data-count]');
  if (countEl) {
    ScrollTrigger.create({
      trigger: section, start: 'top top', end: () => '+=' + amount(),
      onUpdate: (self) => {
        const n = Math.min(3, Math.max(1, Math.ceil(self.progress * 3)));
        countEl.textContent = String(n).padStart(2, '0') + ' — 03';
      },
    });
  }
}

/* ============================================================
   6. MAGNETIC BUTTONS + 3D TILT (pointer-driven, desktop)
   ============================================================ */
function initPointerFX() {
  if (window.matchMedia('(hover: none)').matches) return;

  // Magnetic pull toward cursor.
  gsap.utils.toArray('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.4);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
    });
    el.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
  });

  // Subtle 3D tilt on glass cards.
  gsap.utils.toArray('[data-tilt]').forEach((el) => {
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3' });
    const ry = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3' });
    gsap.set(el, { transformPerspective: 900, transformOrigin: 'center' });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      ry(px * 10); rx(-py * 10);
    });
    el.addEventListener('mouseleave', () => { rx(0); ry(0); });
  });
}

/* ============================================================
   7. (D) FULL-SCREEN MENU TIMELINE
   ============================================================ */
const menu = document.querySelector('[data-menu]');
gsap.set('.menu__link', { y: 30 });
const menuTl = gsap.timeline({
  paused: true, defaults: { ease: 'power4.inOut' },
  onStart: () => { menu.classList.add('is-open'); menu.setAttribute('aria-hidden', 'false'); if (lenis) lenis.stop(); },
  onReverseComplete: () => { menu.classList.remove('is-open'); menu.setAttribute('aria-hidden', 'true'); if (lenis) lenis.start(); },
});
menuTl
  .to(menu, { clipPath: 'inset(0 0 0% 0)', duration: 0.8 })
  .to('.menu__close', { opacity: 1, duration: 0.4 }, '-=0.4')
  .to('.menu__link', { opacity: 1, y: 0, duration: 0.6, stagger: 0.07 }, '-=0.3')
  .to('.menu__col--info > *', { opacity: 1, duration: 0.5, stagger: 0.06 }, '-=0.5');

function openMenu() { menuTl.timeScale(1).play(); }
function closeMenu() { if (menu.classList.contains('is-open')) menuTl.timeScale(1.5).reverse(); }
document.querySelector('[data-menu-open]').addEventListener('click', openMenu);
document.querySelector('[data-menu-close]').addEventListener('click', closeMenu);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

/* ============================================================
   8. REQUEST-A-MEETING FORM (static: validate + mailto)
   ============================================================ */
function initMeetingForm() {
  const form = document.querySelector('[data-meet-form]');
  if (!form) return;

  let meetingType = 'Online';
  const toggle = form.querySelector('[data-toggle]');
  if (toggle) {
    toggle.querySelectorAll('.toggle__btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        toggle.querySelectorAll('.toggle__btn').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        meetingType = btn.dataset.type;
      });
    });
  }

  const status = form.querySelector('[data-meet-status]');
  const submit = form.querySelector('[data-meet-submit]');
  const val = (k) => (form.querySelector(`[data-f="${k}"]`)?.value || '').trim();

  submit.addEventListener('click', () => {
    status.className = 'meet__status';
    status.textContent = '';

    const name = val('name'), email = val('email'), phone = val('phone'),
      org = val('org'), purpose = val('purpose'), message = val('message');

    if (!name || !email || !phone || !org || !purpose || !message) {
      status.classList.add('err');
      status.textContent = 'Please fill in all required fields.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.classList.add('err');
      status.textContent = 'Please enter a valid email address.';
      return;
    }

    const subject = `Meeting Request — ${name} (${purpose})`;
    const body =
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nOrganization: ${org}\n` +
      `Purpose: ${purpose}\nMeeting Type: ${meetingType}\nPreferred Time: ${val('time') || '—'}\n\n` +
      `Message:\n${message}`;

    window.location.href =
      `mailto:khadimul@inception23.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.classList.add('ok');
    status.textContent = 'Opening your email app to send the request…';
  });
}

/* ============================================================
   9. BOOT
   ============================================================ */
function init() {
  if (!prefersReduced) {
    initTextReveals();
    initOrbs();
    initStats();
    initHorizontal();
    initPointerFX();
  }
  initMeetingForm();
  ScrollTrigger.refresh();
}

if (document.fonts && document.fonts.ready) document.fonts.ready.then(init);
else window.addEventListener('load', init);

window.addEventListener('resize', () => ScrollTrigger.refresh());
