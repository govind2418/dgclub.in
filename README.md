# Dg Club — dgclub.in

Premium, mobile-first promotional website for Dg Club. Next.js 15 (App Router) + TypeScript +
Tailwind CSS + Framer Motion + GSAP, built as a fully static export for Cloudflare Pages.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

This produces a static site in `out/` (via `output: "export"` in `next.config.ts`).

## Deploy to Cloudflare Pages

1. Push this repo to GitHub/GitLab and connect it in the Cloudflare Pages dashboard, **or** deploy directly with Wrangler:
   ```bash
   npx wrangler pages deploy out --project-name=dgclub
   ```
2. Build settings (if connecting a git repo in the dashboard):
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/`
3. No environment variables or server runtime are required — this is a 100% static export.

## Before going live — checklist

- [x] Hero visual set at `public/hero-banner.png` (referenced in `src/components/home/Hero.tsx`) — swap the file directly if it changes later.
- [ ] Replace `LICENSE_PLACEHOLDER` in `src/lib/constants.ts` with the real license/registration text (shown in the Footer, Terms and Responsible Gaming pages).
- [ ] Replace `EXTERNAL_REGISTER_URL`, `EXTERNAL_LOGIN_URL`, `APK_DOWNLOAD_URL`, `TELEGRAM_URL` and `CONTACT_EMAIL` in `src/lib/constants.ts` with the real destinations.
- [ ] Have counsel review the Privacy Policy, Terms, Responsible Gaming and Disclaimer pages (`src/app/{privacy-policy,terms,responsible-gaming,disclaimer}`) — the shipped copy is a reasonable template, not legal advice.
- [ ] Update `SITE_URL` in `src/lib/constants.ts` if the production domain changes.
- [ ] Swap the Google Search Console verification code in `src/app/layout.tsx` (`metadata.verification.google`) if ownership changes.

## Project structure

```
src/
  app/            Route segments (one folder per page) + sitemap.ts, robots.ts, opengraph-image.tsx
  components/
    layout/       Navbar, Footer, AnnouncementBar, floating/sticky CTAs
    home/         Hero + all homepage sections
    ui/           Button, GlassCard, SectionHeading, icons, etc.
    motion/       Reveal — shared Framer Motion scroll-reveal wrapper
    seo/          JsonLd, Breadcrumbs
  lib/            constants.ts, data.ts, seo.ts (metadata builder), schema.ts (JSON-LD builders)
```

## Notes on the build

- Images use `next/image` with `images.unoptimized: true` (required for static export — Cloudflare Pages has no on-demand image server). Most visuals are original SVG/CSS to keep the bundle light; the hero banner is the one raster image slot.
- GSAP is dynamically imported inside `Hero.tsx` only, so it never ships in the shared/global bundle.
- Below-the-fold homepage sections are loaded via `next/dynamic` to keep the initial JS payload small; content still renders in the static HTML for SEO.
- `sitemap.xml`, `robots.txt` and the Organization/WebSite/Breadcrumb/FAQPage JSON-LD are all generated at build time.
