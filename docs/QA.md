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
