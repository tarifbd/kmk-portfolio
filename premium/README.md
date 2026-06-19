# Premium Portfolio — K M Khadimul Hasan

Standalone, high-end editorial portfolio. Vanilla **HTML + CSS + JS**, animated
with **GSAP + ScrollTrigger** and **Lenis** smooth scroll. No build step.

## Theme
Black (`#141312`) on very light yellow (`#F7F2DD`), thin `1px` borders, Fraunces
serif display + Inter body + Space Grotesk mono labels.

## Run locally
Just open `index.html` in a browser, or serve the folder:
```bash
npx serve premium       # or:  python -m http.server -d premium 5500
```

## Deploy as the MAIN site on Vercel
This folder is a pure static site. In the Vercel project settings:

1. **Settings → Build & Development Settings**
   - **Framework Preset:** `Other`
   - **Root Directory:** `premium`
   - **Build Command:** *(leave empty)*
   - **Output Directory:** *(leave empty / `.`)*
2. Redeploy. Vercel will serve `index.html` directly — no Turbo/Next build.

> The Next.js app in `apps/web` is left untouched; switching the Root Directory
> to `premium` makes this the deployed site.

## Animations (main.js)
- **A** — Clip-path staggered text reveal (`.line-mask` + `power4.out`)
- **B** — Pinned horizontal projects (ScrollTrigger pin + scrub)
- **C** — Parallax image scale tied to the horizontal track (`containerAnimation`)
- **D** — Reversible full-screen menu timeline

## Swap in real images
In `styles.css`, replace the gradient on `.card__img--1/2/3` with:
```css
.card__img--1 { background: url('/images/tin-checker.jpg') center/cover; }
```
or change the `<div class="card__img">` to an `<img>` and keep `data-parallax`.
