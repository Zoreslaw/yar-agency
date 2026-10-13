# Current project state

## Local revision — 12 October 2026

Working checkout: `/Users/xxx/Projects/Yar.agcy`, branch `codex/vercel-deployment-pipeline`. React 19 + Vite, Node 24. Revision prepared for the user-requested commit and push; main remains the production branch. Start with AGENTS.md.

Audience: artists, musicians, bands and their managers. The site presents help with individual tasks/concerts/trips or continuing collaboration with an artist. It is not a ticket shop or event calendar.

Page: original monochrome hero → fixed-background introduction with animated content and pinned prints → six service directions → moving service line → collaboration formats with wuha inside continuing work → Sofia/Vika dressing-room composition → contacts. All seven supplied photographs remain in the lightbox; wuha is not a separate main section or navigation item.

Confirmed sources: services and contacts from the user-supplied ten-page `послуги YAR agency.pdf`; team size/names and wuha relationship from the user's messages. Prices are agreed individually; fixed PDF packages intentionally omitted. The PDF itself is not published.

The user rejected technical captions and disconnected stock imagery. No stock portrait/models are rendered now. Team is introduced by confirmed names and copy alongside the original YAR merch photograph. A real shared Sofia/Vika photo, preferred roles and biographies remain unprovided.

Current visual revision (13 October): fixed intro background; Motion for React now sequences heading, SVG line and photographs. Wuha sits directly within the continuing-work column, without “Наприклад” or invented bio/results. Team text is inside a dressing-room frame with alternating steady lamps; no placeholder portraits. Yellow service ticker recalls the original Lovable layout, with pause and reduced-motion/off handling. Oswald 500 provides local display typography; Manrope remains body/UI. All seven supplied photos and original MouthSignal remain. New files: SceneEntrance.jsx, display-font.css, public/fonts/*.woff2, public/licenses/Oswald-OFL.txt. Motion dependency and package-lock updated.

Latest build/check/standalone pass, but browser QA for this revision is unfinished: after the browser session reset, reacquiring localhost was rejected by the browser URL policy. No workaround attempted. Verify desktop/320px, photo/title placement, mirror text, ticker pause, animation cancellation, dialogs and focus once browser access resumes. See latest docs/QA.md.

Contact/footer follow-up: email and Instagram are icon action rows with hover/focus feedback. Footer now contains brand, section navigation, contact links and a back-to-top button. Brief CTA reads “Підготувати бриф”. Destinations and local-download behavior unchanged.

## Where to work

- `src/main.jsx`: content, gallery, navigation, dialogs and local brief.
- `src/StageLighting.jsx`: photographic entrance observer and motion preference.
- `src/style.css`: original styles plus the revision's responsive sections/hardware.
- `src/MouthSignal.jsx`: existing punk mouth deformation; preserve.
- `src/assets.json` and `public/media`: ready-to-serve original gallery and new prototype assets.
- `docs/ASSETS.md`: photographic stock/source links, licence, retired generated hardware provenance/prompt.
- `docs/DIRECTION.md`: design intent and revision history.
- `docs/QA.md`: actual checks and remaining verification.

## Still needed

Real shared photo of Sofia and Vika, their preferred introductions/roles (if wanted), final copy/service commitments and financial arrangements; licensed Gotham files if replacing Manrope. Confirm publication permissions/credits for company artwork and original photographs. Stock hero is atmosphere, not YAR event footage.

Brief is local-only: saves `yar-brief.txt` and makes no submission request. Email and Instagram are real links from the PDF. Prototype/noindex remains. Vercel account/project is not connected by `vercel.json` alone.

## Workflow

Node 24, `npm ci`, `npm run dev`. `npm run check` now verifies media referenced in JSX and CSS, including the hardware component and responsive photo variants. Run `npm run build`. `npm run standalone` creates `dist/preview.html`, with relative font and media paths in both JS and CSS. Keep changes on feature branches, never add AI contributors or Co-authored-by trailers.
