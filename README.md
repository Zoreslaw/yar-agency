# YAR Agency

React + Vite prototype. Original brand palette, real supplied photography, a quiet monochrome backstage montage, a photo gallery, direct collaboration choices and a downloadable local brief.

## Run

```sh
nvm use
npm ci
npm run dev
```

## Build / Vercel

```sh
npm run check
npm run build
npm run preview
```

Import this directory as a GitHub repository into Vercel. Framework Vite, build `npm run build`, output `dist`. `vercel.json` is included. No environment variables, accounts, database or backend required. GitHub: https://github.com/Zoreslaw/yar-agency. Import the repository root; see docs/DEPLOYMENT.md. No Vercel project is connected by repository configuration alone.

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
- Fonts: self-hosted open-source Manrope and League Spartan via Fontsource. Manrope is a temporary Cyrillic substitute for the unavailable Gotham font. OFL licenses are included in public/licenses.
- `docs/DIRECTION.md`: concept, references, design decisions, pending company facts.
- `npm run import-assets -- /absolute/folder`: re-import copies from a folder.

This is a design proposal, not approved company copy. No fabricated roster, dates, metrics, testimonials or contact addresses. Actual service scope and contact destination need approval. The form downloads a text brief and sends no network request. Prototype is marked noindex.

Photo originals are retained in source-assets. WebP derivatives are used in the build. Before public launch, connect confirmed contacts and replace draft text. Mobile UI crops are CSS-only, source images remain intact.

## Working with AI

Read [AGENTS.md](AGENTS.md) and [current handoff](docs/HANDOFF.md) first. They capture user preferences, design constraints, asset handling and unfinished business decisions. GitHub Copilot points to the same instructions. Future changes should use feature branches and PR previews. Never list AI agents as contributors or add Co-authored-by trailers.

GitHub Actions verifies configuration/media and runs the production build. Node 24 is pinned through .nvmrc and package.json. npm/package-lock.json is the only package-manager setup.

Repository MIT license covers code; company artwork, photographs, stock footage and fonts retain their respective rights/licenses (see docs/ASSETS.md and public/licenses).
