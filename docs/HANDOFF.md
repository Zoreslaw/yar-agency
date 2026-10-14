# Current project state

## Local revision — 12 October 2026

Working checkout: `/Users/xxx/Projects/Yar.agcy`, target branch `main`. React 19 + Vite, Node 24. User requested merging the verified feature revision into main. Feature deployment and GitHub Build succeeded; main is the production branch. Start with AGENTS.md.

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

## Detail revision — 13 October 2026

Branch feature/backstage-details. User requested removal of all pause controls, prototype labels and back-to-top control; system reduced-motion and visibility guards remain. All ten optional captions were explicitly removed, including service eyebrow labels and the wuha relationship eyebrow (the example still sits under ongoing collaboration). Primary actions share a clipped corner and separated arrow. Ticker is now a narrow ink band with slash separators. Team is a single photographic mirror with adjacent text: user approved temporarily reusing the existing labelled stock reference. A genuine team photo is still required. Added root/body overscroll suppression and ink fallback; native macOS trackpad bounce is not verified. No dependencies or media files changed. No publication or push requested this turn.

Team follow-up: heading changed to “Наша команда.” User requested alternating even/odd lamps; two offset eight-second circuits exchange warm brightness over 1.2-second fades. No flashing or hard on/off cuts. System reduced-motion, legacy disabled-motion preference and page visibility retain a static lamp arrangement. Wuha presentation awaits confirmation of actual agency tasks; no new case claims added.

Lamp correction: CSS background/box-shadow colour cycling was rejected. MirrorLamps.jsx now uses installed Motion with a separate emissive layer on fixed glass bulbs. Opposing even/odd circuits hold then exchange light over 420ms, full cycle six seconds. Animation runs only when lamps intersect and stage motion is enabled (including reduced-motion/page-visible guards). Mirror/photo layout dimensions unchanged from the earlier accepted photographic version. Wuha moved after both collaboration formats with a user-confirmed explanation of full concert organization; no results/dates added.

Final visual follow-up: wuha text now leads with “Ви граєте. Ми організовуємо.” and explains the user-confirmed preparation/venue/day-of responsibilities. Mounted cream print with tape matches intro photographs. Preview-only grayscale/sepia/contrast treatment; source and gallery colours unchanged. Team heading is “Наша команда.”; compact mirror max width 540px, 6:5 image instead of 4:5, measured outer height about 445px at 1440. Ticker restored to user-confirmed #991A1E from the supplied brand sheet. All changes remain local on feature/backstage-details.

Ticker text follow-up: user requested a brighter text variant; text and slash separators now use brand yellow #FFCC00 on burgundy #991A1E.

Collaboration spacing follow-up: removed upper/lower rules from both format buttons and the wide separator above wuha. Two typographic choices now use display headings, clearer paragraph spacing and yellow arrows; example follows with whitespace. Team contact underline removed, including hover.

## Animation and questionnaire revision — 13 October 2026

Rejected cable removed. A compact cream drawn arrow is attached to the case photo edge, inside the case entrance timeline. References researched: Human Shapes/Marmoset, Codrops SVG strokes, Motion performance guidance. No copied artwork or new dependency. Entrances now share 12px upward motion, .5s duration and .65 minimum opacity; retain once-only intersection behavior. Ticker only runs while intersecting the viewport. Preference and page-visible state separated, so hiding the page stops work without changing ticker layout. Lamps use existing Motion emissive opacity layers and in-view guards; original MouthSignal deformation retained.

“Бриф” removed from visitor-facing copy. Contact action now “Заповнити анкету”. Concert fields derive from the user-pasted existing Google Forms questionnaire: identity/email/social, attendance/previous sales, target audience, duration, dates, acoustic/full band, event role, merch. City and help requested add practical context. Tour has route/dates/crew/help; continuing collaboration has identity/contact/social/support direction and a large situation/plans field, with a call/meeting explanation. Other request also available. No external submission or upload connected. Local export is yar-anketa.txt with current mounted fields; supplied signed-in account email is NOT included in site content. Original form link: https://docs.google.com/forms/d/1Ofrh7fE8So5aWrRGopwi_Ec4g6XUlgfhfxqXNRfmSW0/viewform .


Collaboration tape — 13 October 2026: the two formats are separated by an inline SVG strip of torn cream stage tape, vertical on desktop and horizontal below 650px. A single 550ms reveal follows the existing section entrance; reduced motion stays static and page visibility pauses it. Removed the decorative arrow above wuha. No new dependencies or external assets.

## Questionnaire modal revision — 13 October 2026

CooperationForm.jsx uses react-hook-form 7.90.0; dependency and lockfile updated, MIT retained in public/licenses/react-hook-form-MIT.txt. Header reduced per user feedback to one centred word “Співпраця”, original mark left and icon close control right. Header and download action stay fixed around the scrollable body. Dialog retains native Escape/backdrop behavior and explicit first/last Tab loop. Required: identity, email, request description. Other details optional; concert details can be unknown. Marks/instructions identify mandatory fields. Validation: trimmed required input, email, HTTP(S) social links (www accepted), positive tour crew, nonnegative past-sales integer, audience integer/ordered range. Errors linked to controls, first invalid control receives focus. Form values persist while switching formats; only relevant fields export. Success message in fixed footer states file saved, not sent. No backend or Google Forms submission added.

Collaboration heading centred; user-requested small explanatory paragraph removed. All changes still local on feature/backstage-details.

Final component-kit revision: questionnaire uses Mantine Modal/TextInput/Textarea/Select/MultiSelect/NumberInput/SegmentedControl/DatePickerInput with React Hook Form. Local Ukrainian range calendar and approximate-period option; numeric mobile keyboards for counts/duration. Mantine focus/scroll/overlay handling replaces native-dialog custom trap. Questionnaire is lazy-loaded to keep kit out of initial page bundle. Dependency lockfile and MIT licences retained. Local-file export remains; no submission connected.

## Questionnaire redesign — 14 October 2026

Branch feature/questionnaire-design. Local changes to CooperationForm.jsx, CooperationModal.jsx and new scoped questionnaire.css. Three stages with per-stage validation, relevant-answer review and explicit local-download completion. Required description leads optional details. Burgundy rail/cream sheet; full-screen mobile. Existing libraries and original mark retained. Mobile calendar reduced to sm to fit all seven columns at 320px; explicit close added. No backend, publish or push performed. Research and design rationale in DIRECTION.md.

## Questionnaire email integration — 14 October 2026

User approved committing the current questionnaire redesign. Branch feature/questionnaire-email includes that design and replaces local text download with POST /api/questionnaire. Vercel Node handler validates relevant fields, ignores client recipient overrides, escapes HTML, sends a branded HTML/plain-text notification with Reply-To via Resend. Recipients are server-only EMAIL_TO; EMAIL_FROM and RESEND_API_KEY are also server-only. No new dependencies. No durable submission archive or applicant autoresponse. UI reports provider acceptance, not inbox delivery; failures retain mounted answers, focus the error, and retries keep the same idempotency key for unchanged answers (Resend deduplication window is 24h). Honeypot, strict origins, size limits and best-effort per-instance throttling are included. Per-instance throttling is not a global anti-spam guarantee; configure Vercel Firewall/global limiting before broader public traffic if needed.

Resend yar-agcy.space verified. Restricted sending key YAR website created with explicit user confirmation and saved as Vercel Secret. EMAIL_FROM and EMAIL_TO saved; all three enabled for Production and Preview. Values/keys are not included in Git; .env.example documents variable names and placeholder recipients. Settings apply on the next deployment. Production was not redeployed merely to apply unused variables. The Vite dev server alone does not run the Vercel API; node --test tests/questionnaire.test.mjs verifies handler behavior with mocked provider calls.

## Colour and mouth follow-up — 14 October 2026
Local branch `feature/ticker-mouth`, created with pre-existing questionnaire/email work preserved. Ticker band gets 32–64px vertical padding. MouthSignal static/canvas source now mouth-no-logo.webp from supplied Brand book.png; background removal provenance in ASSETS.md. Animation implementation unchanged. Check, build and standalone pass (existing dependency use-client warnings). No push or deployment.

## Whole-page brand colour revision — 14 October 2026
Branch feature/brand-red-balance, continuing uncommitted ticker/mouth work. User clarified more red means the whole page. Current proposal A: burgundy introduction and contact backgrounds, burgundy service/team headings and footer mark, burgundy hero CTA, compact 18–28px ticker. Ink collaboration and cream reading/team/footer surfaces remain. Compared real desktop captures for three colour studies; discarded study CSS removed. Ignored qa/red-balance/comparison.html and comparison.png preserve options. Check/build/standalone pass. Actual browser QA at 1440, 390 and 320, no document overflow; mobile headings/body/actions fit. Gallery and questionnaire open/close via Escape; focus returns to triggers. No publish or push.

## Questionnaire imprint — 14 October 2026
Branch feature/questionnaire-imprint preserves the pre-existing uncommitted colour/mouth work. Contact questionnaire CTA now uses the selected imprint treatment, cream/burgundy with yellow hover/focus. Changes are scoped to its JSX and CSS; questionnaire behavior unchanged. Check/build/standalone passed; desktop 1440 and mobile 320 inspected in browser, text fits and no horizontal overflow. Enter opens modal, Escape closes and returns focus. Captures in ignored qa/imprint. No push/deploy.

Shared imprint follow-up: user intended a common button style. Added src/imprint-buttons.css and applied it to page CTAs, format choices, mobile menu, gallery controls and questionnaire Next/Back/send/close. Removed action arrows/dividers on printed CTAs. Mantine loading/disabled behavior retained; its loader overlay pseudo-element is reset for the printed surface. Check/build/standalone and diff whitespace checks passed. Actual browser inspected at 1440, 390 and 320; no horizontal document overflow. Questionnaire open/Escape/focus return, mobile navigation and gallery next/close checked. Local only.

Button component correction: ImprintAction, UtilityButton and IconButton live in src/components/Buttons.jsx with colocated buttons.css. Native actions preserve type=submit, pending spinner/aria-busy and disabled behavior; link actions render anchors. Removed Mantine Button wrappers and their pseudo-element overrides; Mantine modal now uses its compound Header/Title/Body with the shared plain IconButton alongside the title. Menu/Back/close/gallery arrows use utility components; page CTAs retain the print. No dependencies added. Browser checked 1440/320 including Next/Back with retained input, close click/Escape/focus return, menu and gallery next/close. Check/build/standalone pass; no submission, push or deploy.

Colour follow-up: contextual hoverTone replaces universal yellow. Hero red→cream; team/form red→ink; cream CTAs→yellow with ink text. Hover no longer changes the angle; only 1px lift. Keyboard focus uses a separate visible ring, touch devices avoid hover colour states. Browser verified actual pointer hover colours on hero/team/contact/form at 1440 and focus-visible/document overflow at 320. Check/build/standalone passed. Captures in qa/imprint/*-hover.png; local only.

Collaboration hover correction — 14 October 2026: removed the legacy .format-column>button:hover yellow text rule that outranked the component hover and made yellow text disappear on the yellow fill. Labels now have an explicit foreground stacking layer. Actual pointer hover checked separately for both actions at 1440: yellow #FFCC00 fill and ink #1D223D text. 320px inspected, no horizontal overflow. Check/build/standalone and whitespace checks passed. Capture: ignored qa/imprint/format-hover-fixed.png.

## Service stories — 14 October 2026
Branch feature/service-stories, preserving pre-existing local changes. New ServiceStories.jsx and service-stories.css replace the six plain service rows. Three compositions use supplied wuha photography, HTML process notes, an SVG route, and generated paper texture. Existing imprint CTA opens questionnaire with Other selected; all five new photo triggers open corresponding original gallery indexes. Existing introduction, collaboration, team and contacts preserved. See DIRECTION and ASSETS for concept and provenance. No added dependency, commit, push or deployment.

Service correction: latest version replaces the rejected collages with three descriptive service groups on one burgundy surface. Single warm-monochrome photo per group; no paper notes, photo captions or text overlays. Service CTA reads Обговорити задачу and opens Other in the existing questionnaire. Earlier service-story visual notes are superseded. User requested committing the current accumulated local revision; no push or deployment requested.
