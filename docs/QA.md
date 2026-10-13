# Pre-push verification — 13 October 2026

Clean npm ci with Node v24.21.0, npm run check, npm run build, npm run standalone and git diff --check all passed. This matches Vercel install/build configuration. Motion use-client warnings are non-fatal. Visual verification limitation below remains open. GitHub build workflow covers feature branches and uploads dist as a build artifact; no production merge requested.

# Latest revision — Motion, mirror and type / 13 October 2026

PASS: npm run check (18 media and 3 display fonts), npm run build, npm run standalone, git diff --check. Build emits non-fatal ignored `use client` directive warnings from Motion's React distribution. package.json and package-lock include Motion. Standalone relative font URLs and emitted WOFF2 files verified. Offline font specimen rendered and viewed; Ukrainian glyph coverage checked. 320px introductory line widths measured from the selected font, but this is not a browser layout check.

NOT VERIFIED: latest browser appearance and runtime interactions. Browser session reset during work; getTab for localhost was rejected by the browser security policy (reported protocol restriction). No alternate browser/CDP/shell automation workaround used. Prior desktop/mobile screenshots below predate the new Motion timeline, mirror, ticker and font. Required next QA: desktop and 320px clipping/overflow, all animation sequences including disabled/reduced/hidden state, ticker pause/resume, mirror composition, brief/gallery/Escape, font loading.

Existing original video/MouthSignal were not edited. Company copy is still draft. No deployment, commit or push. Official wuha link still unprovided; do not invent a biography.

# Contact/footer follow-up — 13 October 2026

Mail/Instagram links now have inline SVG icons, 64–70px action rows, colour/arrow feedback, and accessible keyboard focus. Footer has the original logo, section navigation, icon contact links and back-to-top action. Contact brief button is now “Підготувати бриф” with a document icon. No new destinations or integrations.

Verified browser at 1440 and 320px: no horizontal overflow, mobile address fully visible, footer text fits. Keyboard Tab from email reaches Instagram with solid outline and yellow icon background. Brief opens and Escape closes. Back-to-top returns hero rect to y=0. Destination hrefs inspected without opening mail/Instagram. Console error query empty. npm check/build/standalone and diff whitespace checks pass. Screenshots /tmp/yar-backstage-board/footer-desktop.png and footer-mobile.png remain outside Git.

# Latest verification — 13 October 2026, backstage noticeboard

- Browser inspected at confirmed document widths 1440, 768 and 320px. Document scrollWidth equals viewport width at each. Heading/body/photo placement inspected visually; no text/photo overlap. Mobile service descriptions inspected after scrolling.
- Intro has natural height, no sticky hold or scroll-progress listener. One-second wing animations and automatic service entrances finish independently of further scrolling. Reduced-motion emulation yields no motion-enabled class and animationName none for wings and service rows; restored normal emulation afterward.
- Pinned people photo opens gallery at 3 / 7. Next works, Escape closes. All seven supplied photos retained in data and dialog.
- Continuing-collaboration button opens local brief; Escape closes. Motion toggle removes/restores motion-enabled. Browser console error query returned none.
- npm run check, npm run build, npm run standalone passed. git diff --check passed. No new dependencies, commits, pushes or deployment.
- QA captures outside Git: /tmp/yar-backstage-board/desktop.png and mobile.png.
- Copy is still a draft; company approval and real team portrait remain outstanding. Existing local-download behavior was not altered or re-downloaded in this revision.

## Earlier verification history

# Whole-frame revision QA — 13 October 2026

Inspected current page at 1440 × 900 and 320 × 740. Document width equals viewport at both widths. Desktop: whole backstage and team-reference images retain natural proportions in an asymmetric pair; no fixed side image remains. Mobile: checked team text, separate stock labels and whole stage-preparation photo. CSS frame scale changed from 0.9913 to 0.9341 when scrolling back through the image; reduced-motion emulation yielded animation:none, transform:none and disabled photographic motion. Normal preference restored. Prior gallery/brief interaction checks remain relevant; their implementation was not modified.

Final verification: `npm run check`, `npm run build`, `npm run standalone`, and `git diff --check` passed. No console errors captured. Screenshot: `/tmp/yar-whole-frames/desktop.jpg` (outside Git). Browser viewport override reset; normal motion preference restored; dev server running on port 5173. No push or deployment. Older ribbon QA describes the now-rejected version.

# Verification — 2026-10-12

- Production build: successful with Vite.
- Production standalone preview served successfully over local HTTP; React, local fonts, original logo and media loaded.
- Desktop 1280px, tablet 768px, phone 390px and narrow phone 320px checked for horizontal overflow. Narrow contact heading was corrected.
- Gallery: opens from photo, advances, closes.
- Mobile menu: expands, anchor navigation closes menu.
- Background video: readyState 4, play/pause verified. Scroll-offscreen pause verified during navigation. Reduced-motion behavior implemented via matchMedia; OS setting was not changed during QA.
- Brief: filled with test data, downloaded yar-brief.txt, file contents inspected. No outbound submission.
- Browser error/warning log empty during checks.
- Copies of originals retained, WebP derivatives generated (1.30 MB total vs 28.07 MB originals).

Known limits: draft copy, unconfirmed services/contacts, temporary Manrope font in place of licensed Gotham. No real messaging backend. Stock hero footage is mood footage, not YAR event documentation. Standalone HTML was checked over HTTP; direct file:// automation is unavailable in this browser environment.

## Revision 2 — response to generic AI appearance
- Layout rebuilt around original logo/video and photographic sequence; unrelated decorative marks and repeated slogans removed.
- Production build and standalone generator pass.
- Desktop gallery open/next/close passes. Organizer contact choice opens brief with the organizer role selected.
- Mobile menu open/anchor-close passes; 390px and 320px checks found no document overflow or text clipping.
- Media and local brief implementation retained; no outbound submission was added.
- Previous screenshots retained under qa/v1, revision screenshots use v2 prefixes.

## Revision 3 — full-width hero and fixed header
- Restored full-width monochrome film and large cream title overlay, per user preference.
- Fixed header: transparent at scrollY <=24, rgba(20,25,45,.88) with 16px backdrop blur after 24px; fallback tint remains if blur is unavailable.
- Readability inspected on drum stage, microphone and engineer shots. Local top/left scrims protect text; video itself is not blurred.
- Anchor targets account for fixed header through root scroll-padding-top. Photo heading remains below header.
- 390px and 320px have no horizontal overflow or text clipping. Mobile menu opens and closes after navigation.
- Skip link raised above fixed header for keyboard access.
- Screenshots qa/v3-hero.png, qa/v3-mobile.png, qa/v3-header-scroll.png.

## Revision 4 — YAR signal interference
- Built and generated standalone preview successfully.
- Browser verified the actual active canvas burst: displaced scan bands, grain within source alpha, intact surrounding layout. Saved qa/v4-signal.png.
- Pause/resume button verified via its accessible label and pressed state.
- No console errors; desktop and 320px widths have no horizontal overflow; mobile symbol remains 125px wide.
- Reduced motion is enforced in both JS and CSS (code inspection); no OS preference was changed during QA.
- Effect stops offscreen, in hidden tabs, and while paused; reduced motion keeps the original image. Bursts last 560ms, separated by random 5.6–9.4s delays. Hover can trigger one early.

## Revision 5 — full silhouette and visible recoil
- Removed fixed vertical ranges that excluded the tongue tip and top of the symbol.
- Canvas now has 16% transparent overscan per edge; band slices cover the complete image without clipping displaced content.
- Seven stepped poses over 680ms move the entire symbol up to 3% of the expanded canvas and rotate it up to 2 degrees. Grain/tears span the full alpha silhouette.
- Browser captured active transform translate(-3%, 1%) rotate(-2deg), verified complete tongue silhouette; screenshot qa/v5-signal.png. No console errors or horizontal overflow at desktop/320px. Build and standalone passed.

## Revision 6
Build and standalone passed. Captured a sequence of 16 live browser frames after pause/resume and inspected the active deformation: no white cuts; full silhouette retains transparent padding. qa/v6-signal.png. No browser console errors. Motion preference/offscreen/pause guards retained. Real-device frame performance has not been measured.

## Revision 7
Build/standalone passed. Desktop active-frame screenshot qa/v7-signal.png confirms tongue/logo/jaw visibly distorted and reassembled in slabs, with no console errors. At 320px the active transform and document width were verified: contentWidth=320. Mobile gets a 14px left allowance within the prior 125px symbol footprint to keep deformation away from the screen edge. Pause/resume verified.

## Local backstage prototype — 12 October 2026

Completed on Node v24.21.0:
- `npm run check`: passed; 22 required media assets verified, including CSS truss image, separate lamp, team reference and gallery responsive derivatives.
- `npm run build`: passed; 28 modules transformed.
- `npm run standalone`: generated `dist/preview.html`. Added relative `/media/` rewriting in compiled CSS so the new truss works in the file preview as well as Vite.
- `git diff --check`: passed.
- Local dev route `http://127.0.0.1:5173/` returns HTTP 200.
- Hardware assets have four channels and actual transparent pixels. Truss 168×2304; lamp 440×633. Repeated truss boundary average per-channel difference <1/255 after WebP compression, using mirrored tile construction.
- Existing original photo files, logo, montage and `src/MouthSignal.jsx` unchanged.

Browser verification is pending, not passed: the built-in browser tool repeatedly returned “saved user permission setting blocks this action,” including after the user granted permission in chat and provided a settings screenshot. No alternate browser/CDP workaround was used. The user is adjusting the site-specific rule. Desktop/mobile (especially 320px) screenshot review, text clipping/overflow, observed lamp activation, reduced-motion runtime, gallery keyboard/Escape/focus, menu navigation and actual brief download still require real-browser checks once access is available.

The user subsequently set Always allow and added an exact `http://127.0.0.1:5173` rule, but the same saved-permission rejection persisted. Runtime/browser checks remain pending; do not infer success from HTTP 200 or build output.
# Local browser review — 12 October 2026

The first live inspection found a blank cream page caused by `React is not defined` in `StageLighting.jsx`. Added the missing default React import required by the current JSX transform. No layout or content changes in this review.

Passed `npm run check`, `npm run build`, and `npm run standalone`. Inspected the live Vite page in the Codex browser at 1440 × 900 and 320 × 740: hero, services, collaboration modes, team reference, wuha gallery and contact. Document width matched the viewport at both widths; inspected text fit at 320 px. Mobile hides the long truss and retains a cropped fixture.

Verified service expansion, mobile navigation closing on section selection, gallery next-photo and Escape, brief Escape, and local brief download with dummy inputs. Verified the light toggle removes all active fixture classes; emulated reduced motion also removed active lights and disabled the light control. Restored normal motion and the enabled light preference after testing. Browser viewport override was reset. QA screenshot stored outside Git at `/tmp/yar-review/desktop.jpg`.

Visual assessment: the rail is prominent on desktop; consider reducing its visual weight in a future design iteration. The clearly labelled stock team image remains a placeholder. Full keyboard traversal and cross-browser coverage were not performed in this review.

# Photographic revision QA — 12 October 2026

Live Codex browser inspection at 1440 × 900, 768 × 900 and 320 × 740. At all three widths, document scrollWidth equalled innerWidth. Visually inspected the hero, services, photographic interlude and team; checked mobile gallery/brief dialogs. Text and new captions fit at 320 px. Desktop ribbon continues across the hero and sections; mobile ribbon is hidden. No browser console errors captured after reload.

Verified the image-window animation actually advances with page scrolling: photo transform changed from -21.14 px to -42.40 px across the interlude, while the ribbon also changed its translation. Changed the photo window to overflow:clip so it does not create an inert nested scroll container for the CSS view timeline. Observer reveal classes appeared on entering sections.

Verified motion toggle disables photographic animation, survives reload and is restored on re-enabling. Emulated reduced motion removed photo animation and disabled the toggle; normal media preference was restored. Services expand, mobile menu closes after selecting an anchor, gallery opens and Escape closes it, and brief opens/Escape closes it. The brief's download implementation is unchanged from the earlier successful dummy-input download check.

Screenshots outside Git: `/tmp/yar-photo-review/transition-desktop.jpg`, `team-desktop.jpg`, `mobile.jpg`. Actual-device performance, complete keyboard traversal and Safari/Firefox fallback behaviour have not been tested. CSS timeline support is optional; unsupported browsers keep static photo framing and observer entrances. Stock team photo still needs replacement.

Final commands for the photographic revision: `npm run check`, `npm run build`, `npm run standalone` passed; `git diff --check` passed after removing a trailing blank line from this document. No commits, pushes or deployments performed.
