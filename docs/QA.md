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

## Detail revision — 13 October 2026

Browser access restored after starting the stopped local Vite server. Inspected actual page at 1440×1000 and 320×820: team photo/mirror, contact actions, mobile hero, brief dialog, collaboration strip. Document width equals viewport at both sizes; text/control scroll-width check at 320px found no clipped elements. Mobile menu and contact anchor work; brief and gallery open and close with Escape. Browser error log empty. `npm run check`, `npm run build`, and `git diff --check` pass (existing Motion directive warnings remain). Screenshot: /tmp/yar-team-details-desktop.jpg, outside Git. Native macOS rubber-band/trackpad behavior and final genuine team photograph remain unverified/unprovided. Visible pause buttons removed explicitly at user request; reduced-motion and hidden-page protections retained. Full reduced-motion emulation was not rerun in this pass.

Latest follow-up: inspected actual 1440px and 320px layouts after mounted photo, case copy, Motion lamps and compact mirror. No horizontal overflow or text/control clipping at 320px. Gallery opens from the renamed photo action and closes via Escape. Mirror outer height measured about 445px at 1440 (previously about 737px). Computed ticker colour rgb(153,26,30), matching #991A1E. Motion emissive opacity verified on opposing even/odd circuits; static glass remains fixed. Browser viewport override reset after testing. Screenshots outside Git: /tmp/yar-compact-mirror.jpg, /tmp/yar-burgundy-band.jpg. Native macOS overscroll and reduced-motion emulation still not manually verified in this pass.

Collaboration spacing: visually checked 1440px and 320px after removing rules and adjusting typography/spacing. No horizontal overflow or clipped text/controls at 320px. Individual-task button opens the brief; Escape closes it. Desktop capture /tmp/yar-collaboration-clean.jpg is outside Git. Team link computed border is 0px and text decoration none. Build/check/diff validation passed.

## Animation audit and questionnaires

Actual browser pass top → intro → service rows → collaboration → team/contact, with UI scrolling and section navigation. Hero playing at top and paused below verified; ticker paused offscreen, running on intersection. Reduced-motion emulated through CDP: main has no motion classes, video paused, ticker animation none, opposing lamps static at opacity 1/0. Test emulation and viewport override reset. Entrances visually inspected at desktop; no quantitative FPS/device benchmark claimed. Existing MouthSignal code guards and effect preserved, not tuned away.

Questionnaire: ongoing CTA selects ongoing format. Tour-specific route field appears on selection; concert format and event-role options match the provided form. Ongoing questionnaire filled with synthetic test data, downloaded, and text inspected: chosen format and answers present, no unrelated concert fields. No external transmission. Test file deleted and test input values cleared. Mobile dialog at 320px is 300px wide, no text/control clipping or horizontal overflow. Escape closes. Browser error logs empty. Build, check and diff validation passed. Captures outside Git: /tmp/yar-case-annotation.jpg and /tmp/yar-partnership-questionnaire.jpg.


Collaboration tape — 13 October 2026: inspected in the actual browser at 1280px and 320px. Both format headings and descriptions fit; document scrollWidth equals viewport width at both sizes. Both format buttons open their respective questionnaire fields; Escape closes both dialogs. npm check/build/standalone pass; existing Motion use-client bundler warnings remain. QA screenshot is outside the repository.

## Questionnaire modal verification

Desktop 1440 and mobile 320 inspected after compact one-line header. Mobile dialog width/scrollWidth both 304px; header 69px high; no control/text clipping. Fixed header/footer with independent body scrolling observed. Empty submission yields three required errors and focuses identity. Invalid email, invalid social links and negative tour crew blocked; valid email plus HTTPS/www links accepted. Switched away from invalid tour crew to ongoing format, saved successfully; inspected output has only ongoing fields. Concert export succeeds with unknown dates/details and audience range 100–200. Synthetic test files removed; synthetic inputs cleared. Success now appears in anchored footer. Explicit Shift+Tab from close focuses save; Tab from save focuses close, both inside dialog. Escape closes. Build/check/diff validation pass. Screenshots kept outside Git: /tmp/yar-modal-header.jpg, /tmp/yar-collaboration-centered.jpg.

Final component-kit revision: questionnaire uses Mantine Modal/TextInput/Textarea/Select/MultiSelect/NumberInput/SegmentedControl/DatePickerInput with React Hook Form. Local Ukrainian range calendar and approximate-period option; numeric mobile keyboards for counts/duration. Mantine focus/scroll/overlay handling replaces native-dialog custom trap. Questionnaire is lazy-loaded to keep kit out of initial page bundle. Dependency lockfile and MIT licences retained. Local-file export remains; no submission connected.

## Questionnaire redesign — 14 October 2026

Browser checked at 1440×1000, 758×1024, 390×844 and 320×740. First step and review visually checked at 320; document width equalled viewport, no detected overflowing visible form content. Found and repaired clipped mobile calendar: smaller day controls now show all seven columns, header has explicit close. Selected a two-day range; approximate mode, tour fields and continuing-collaboration MultiSelect checked. Required name/email validation focused the first error. Concert download completed and its local text file was inspected; only relevant non-empty answers exported. Back preserved answers; switching to continuing collaboration excluded concert/tour details from review. Tab/Shift+Tab wrap inside the modal; Escape closes it. Added explicit restoration to the opening button on exit after detecting lost focus; verified returned BUTTON “Заповнити анкету”. Existing reduced-motion transition guard retained (not separately emulated).

npm run check, npm run build and npm run standalone passed. Vite reports dependency “use client” directives ignored; build succeeds. No backend delivery, mail sending, deployment or push tested/performed. Screenshots kept outside Git. Final user-requested simplification removes three helper captions and extends burgundy into desktop header.

## Email integration — 14 October 2026

node --test tests/questionnaire.test.mjs: six tests pass (all four types, relevant-field filtering, zero counts, HTML escaping, required values/lengths/links/counts, foreign origins, JSON-only requests, honeypot, absent configuration, server-fixed recipients, idempotency, provider failures/timeouts, per-instance throttling). npm run check and npm run build pass; existing Mantine/Motion use-client bundler warnings remain. Local browser: empty-field validation focuses identity; identity/details/review steps, 320px review (document/dialog width 320px), and failure with retained answers verified. Browser screenshots stay in /tmp/yar-email-setup outside Git. Real delivery and Preview deployment verification are recorded below when completed. Gmail/Outlook rendering and inbox placement are not established by a browser preview.

Preview 208d635 deployed successfully at https://yar-agency-5ce1dqwmu-zoreslavs-projects.vercel.app/ . Real browser submission used clearly labelled test content, not a business enquiry. Success screen appeared; Resend email 01a13b74-a548-7013-be15-02c2675fc224 shows Delivered separately for both configured recipients, with correct sender, applicant Reply-To, Ukrainian text and multiline answers. This establishes acceptance by both recipients' mail servers, not inbox placement. Email HTML visually inspected in a browser at desktop and 320px. Success document/dialog both measure 320px with no horizontal document overflow. No Gmail/Outlook client rendering check or durable archive is claimed. Final copy simplification removes mail-provider terminology from the visitor success screen. Main/production unchanged.

## 14 October — ticker and logo-free mouth
`npm run check`, `npm run build`, `npm run standalone` passed; build retains dependency use-client warnings. Browser inspected contact artwork at 1440px and 320px and ticker at 320px; mouth has no YAR lettering or white rectangle. Existing slab deformation visible on desktop. Document scrollWidth equals viewport width at 1440 and 320. Ticker heights: 180px desktop / 97.25px mobile. No clipped contact text at 320; moving ticker crops intentionally at viewport edges. Reduced-motion/visibility logic unchanged, not separately retested. No deployment.

## 14 October — whole-page burgundy balance
Three actual colour variants inspected in the browser and captured at desktop width 1440. Static comparison screenshots use emulated prefers-reduced-motion to avoid capturing unfinished/composited offscreen entrances; emulation cleared after capture. Variant A retained. Inspected intro/services/collaboration/team/contact at desktop and selected A at 390/320. Document scrollWidth equals 1440/390/320; 320px text-bound checks for headings, paragraphs, contact rows and actions found no horizontal overflow, and visual mobile intro/full-page check found no clipped text. Mobile menu works; intro gallery opens and Escape restores photo-trigger focus; contact questionnaire opens and Escape restores CTA focus. No submission sent. Original animation source unchanged; reduced-motion static content is visible. Viewport override reset. npm run check/build/standalone passed, existing dependency use-client warnings remain. QA images and comparison HTML are ignored, not for Git.

## Questionnaire imprint — 14 October 2026
- npm run check, npm run build, npm run standalone passed; existing dependency use-client warnings remain.
- Browser at 1440×900 and 320×800: inspected actual contact CTA; full label fits, document scrollWidth equals viewport width.
- CTA click and keyboard Enter open questionnaire; Escape closes, focus returns to CTA. No questionnaire submitted.
- Focus ring visible at 320px; reduced-motion CSS disables CTA transforms/transitions.
- Screenshots: ignored qa/imprint/desktop.png and mobile-320.png. No deployment.

## Shared imprint family — 14 October 2026
Check/build/standalone and git diff --check passed. Actual browser at 1440×900, 390×844 and 320×800: inspected hero, collaboration, gallery CTA and questionnaire actions; labels fit and document width matches viewport. Questionnaire opens from formats/contact, Escape returns focus. Mobile menu reveals navigation; gallery next changes counter to 2 / 7 and close works. Modal close control stays 40px; reset Mantine overlay opacity/backdrop blur so the printed action is visible and sharp. No external submission performed. Screenshots in ignored qa/imprint/shared-desktop.png and shared-hero.png.

## Button components and hierarchy — 14 October 2026
Actual browser at 1440×900 and 320×800: primary printed action and simple modal close fit; close target is 44×44px. Document width equals viewport width. Test identity/email advanced to step two; plain Back returned to step one with answers retained. No final submission. Escape returns focus to contact CTA; close click works. Gallery next updates to 2 / 7, plain close works. Mobile menu opens/closes. Component CSS removes the prior Mantine pseudo-element conflict; native submit/disabled/aria-busy replace the kit button wrapper. Desktop captures in ignored qa/imprint/hierarchy-modal-desktop.png and hierarchy-gallery-desktop.png.

## Contextual hover states — 14 October 2026
Actual pointer hover verified in browser at 1440: hero cream fill/burgundy text; team and questionnaire ink fill/cream text; contact yellow fill/ink text. Visually inspected each against its section. 320px document width equals viewport; keyboard focus-visible stays enabled. Reduced motion removes transforms/transitions; hover-only rules restricted to fine hover-capable pointers. npm run check/build/standalone and git diff --check passed. No external submission.

Collaboration hover correction — 14 October 2026: removed the legacy .format-column>button:hover yellow text rule that outranked the component hover and made yellow text disappear on the yellow fill. Labels now have an explicit foreground stacking layer. Actual pointer hover checked separately for both actions at 1440: yellow #FFCC00 fill and ink #1D223D text. 320px inspected, no horizontal overflow. Check/build/standalone and whitespace checks passed. Capture: ignored qa/imprint/format-hover-fixed.png.

## Main / service separation — 14 October 2026
The feature branch’s three-scenario section is excluded from main pending separate review. Main source restored the six service rows while retaining the brand, button and questionnaire changes.
