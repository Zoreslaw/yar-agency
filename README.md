# YAR / музична агенція

React + Vite prototype. Original brand palette, real supplied photography, a quiet monochrome backstage montage, a photo gallery, direct collaboration choices and a downloadable local brief.

## Run

```sh
npm ci
npm run dev
```

## Build / Vercel

```sh
npm run build
npm run preview
```

Import this directory as a GitHub repository into Vercel. Framework Vite, build `npm run build`, output `dist`. `vercel.json` is included. No environment variables, accounts, database or backend required. Nothing has been deployed or pushed remotely.

## Open without a server

After `npm run build`, run `npm run standalone`. Open `dist/preview.html` in a browser. Keep its sibling `media` and `assets` folders with it. This preview inlines the compiled JavaScript and CSS and uses relative media paths; the normal Vite output remains unchanged for Vercel.

## Content / assets

- `src/main.jsx`: sections, draft Ukrainian copy, gallery and brief.
- `src/style.css`: responsive composition and four brand colors.
- `src/assets.json`: supplied image mapping.
- `source-assets/`: untouched copies of the supplied photographs (ignored by Git). `public/media/*.webp`: responsive 800/1800px copies. Visual monochrome/cropping is CSS-only. Source files in Downloads are untouched.
- `public/media/backstage.mp4`: existing 24-second stock montage (Pexels 9005825 / 8513955 / 8197915), no strobes from rejected clips 4/7, no audio. Not presented as footage of a YAR event.
- `public/media/mouth-source.png`: emblem from the user's existing YAR mockup, https://yar-agcy.lovable.app/assets/yar-mouth-9bXz7I9e.png.
- `public/media/logo-source.png`: original mockup logo retained for reference; visible logo uses user-supplied IMG_0384.PNG with SVG viewport and alpha mask, not a redrawn mark.
- Fonts: self-hosted open-source Manrope and League Spartan via Fontsource. Manrope is a temporary Cyrillic substitute for the unavailable Gotham font. Package licenses remain in node_modules.
- `docs/DIRECTION.md`: concept, references, design decisions, pending company facts.
- `npm run import-assets -- /absolute/folder`: re-import copies from a folder.

This is a design proposal, not approved company copy. No fabricated roster, dates, metrics, testimonials or contact addresses. Actual service scope and contact destination need approval. The form downloads a text brief and sends no network request. Prototype is marked noindex.

Photo originals are retained in source-assets. WebP derivatives are used in the build. Before public launch, connect confirmed contacts and replace draft text. Mobile UI crops are CSS-only, source images remain intact.
