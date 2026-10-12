# Current project state

YAR Agency is an independent-music presentation prototype. Ukrainian draft copy, supplied branding and photos, React 19 + Vite. Start with AGENTS.md. The repository is self-contained; building does not require original Downloads files.

## Current accepted direction
Full-width black-and-white backstage montage; cream headline over it. Fixed transparent header gains dark tint/blur after scrolling. Photo story with real images follows. Ink collaboration section offers three roles; a local downloadable brief is the only form action.

Mouth symbol: Canvas-based punk deformation, mismatched slab widths, translation, grit and ink loss. It has been revised with user feedback; the latest version prioritizes visible broken anatomy and short irregular kicks. src/MouthSignal.jsx owns it. Do not assume the user has approved the final effect.

## Where to work
- src/main.jsx — structure, Ukrainian copy, dialogs, header/video behavior.
- src/MouthSignal.jsx — mouth animation and pause/motion/visibility guards.
- src/style.css — layout, responsive rules, brand palette.
- src/assets.json and public/media — ready-to-serve assets.
- docs/DIRECTION.md — reference history and design choices.
- docs/ASSETS.md — media provenance; originals stay outside Git.
- docs/QA.md — actual previous checks; older revisions are historical.
- docs/DEPLOYMENT.md — Vercel setup and release checklist.

## Still unresolved
Confirm actual service scope, artists/cases, languages, final copy, contact destination, and licensed Gotham font with YAR. No invented metrics or contacts. The video is stock atmosphere, not a YAR event. Form does not submit. noindex remains intentional for this prototype.

## Workflow
Node 24, `npm ci`, `npm run dev`. Then `npm run check` and `npm run build`. `npm run standalone` creates a file preview for local review. Keep future changes on feature branches and use a Vercel preview once connected. Never add an AI contributor or Co-authored-by.
