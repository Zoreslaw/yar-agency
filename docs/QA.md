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
