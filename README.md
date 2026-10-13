# YAR Agency

React + Vite prototype. Original identity and photographs, monochrome backstage montage, artist services, Motion-driven content entrances, a service ticker, continuing collaboration including wuha, dressing-room team composition, local Oswald/Manrope typography, real contacts and a downloadable local brief.

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

Import `Zoreslaw/yar-agency` from GitHub into your Vercel account. Use the repository root, Vite and Node 24.x. `vercel.json` sets install `npm ci`, build `npm run check && npm run build`, output `dist`. The site requires no environment variables, database or backend. See docs/DEPLOYMENT.md for connection, previews, production and rollback. Account-side connection is still required.

## Open without a server

After `npm run build`, run `npm run standalone`. Open `dist/preview.html` in a browser. Keep its sibling `media` and `assets` folders with it. This preview inlines the compiled JavaScript and CSS and uses relative media paths; the normal Vite output remains unchanged for Vercel.

## Content / assets

- `src/main.jsx`: sections, draft Ukrainian copy, gallery and brief.
- `src/style.css`: responsive composition and four brand colors.
- `src/StageLighting.jsx`: photographic entrance observer, reduced-motion and visibility guards, persistent motion preference.
- `public/media/backstage-rig*.webp`, `stage-preparation*.webp`: retired Pexels prototype assets; no longer rendered. `node scripts/optimize-backstage.mjs` can regenerate these archived derivatives.
- `public/media/stage-truss.webp`, `stage-spotlight.webp`: retired generated prototype hardware; no longer rendered.
- `public/media/team-reference*.webp`: retired stock composition reference; no longer rendered.
- `src/assets.json`: supplied image mapping.
- `source-assets/`: untouched copies of the supplied photographs (ignored by Git). `public/media/*.webp`: responsive 800/1800px copies. Visual monochrome/cropping is CSS-only. Source files in Downloads are untouched.
- `public/media/backstage.mp4`: existing 24-second stock montage (Pexels 9005825 / 8513955 / 8197915), no strobes from rejected clips 4/7, no audio. Not presented as footage of a YAR event.
- `public/media/mouth-source.png`: emblem from the user's existing YAR mockup, https://yar-agcy.lovable.app/assets/yar-mouth-9bXz7I9e.png.
- `public/media/logo-source.png`: original mockup logo retained for reference; visible logo uses user-supplied IMG_0384.PNG with SVG viewport and alpha mask, not a redrawn mark.
- Fonts: self-hosted open-source Manrope and League Spartan via Fontsource. Manrope is a temporary Cyrillic substitute for the unavailable Gotham font. OFL licenses are included in public/licenses.
- `docs/DIRECTION.md`: concept, references, design decisions, pending company facts.
- `npm run import-assets -- /absolute/folder`: re-import copies from a folder.

This is a design proposal, not approved company copy. No fabricated roster, dates, metrics, testimonials or contact addresses. Services and email/Instagram are sourced from the supplied service PDF; final obligations and company wording need approval. Team names and wuha relationship were confirmed by the user. A genuine shared team photograph is still needed if portraits are added. The form downloads a text brief and sends no network request. Prototype is marked noindex.

Photo originals are retained in source-assets. WebP derivatives are used in the build. Before public launch, approve draft text and supply genuine team imagery if desired. Mobile UI crops are CSS-only, source images remain intact.

## Working with AI

Read [AGENTS.md](AGENTS.md) and [current handoff](docs/HANDOFF.md) first. They capture user preferences, design constraints, asset handling and unfinished business decisions. GitHub Copilot points to the same instructions. Future changes should use feature branches and PR previews. Never list AI agents as contributors or add Co-authored-by trailers.

GitHub Actions verifies configuration/media and builds every branch push and pull request, retaining the built site for seven days. Vercel also runs the checks before each deployment. Node 24 is pinned through .nvmrc and package.json. npm/package-lock.json is the only package-manager setup.

Repository MIT license covers code; company artwork, photographs, stock footage and fonts retain their respective rights/licenses (see docs/ASSETS.md and public/licenses).
