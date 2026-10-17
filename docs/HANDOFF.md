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

## Service section — 14 October 2026
Main retains the six existing service rows. The three scenario redesign lives on feature/service-stories and is intentionally separate. Colors, shared buttons, questionnaire improvements and logo-free Mouth are in main.

## Palette A selected — 15 October 2026
On feature/service-stories, user chose A from the full-page comparison. Service stories now have a cream reading surface, ink body, burgundy headings/list marks, and a red discussion CTA using existing contextual hover/focus. Burgundy introduction/contacts and ink collaboration preserve the selected distribution. npm run check and npm run build passed. Browser recheck was blocked by browser URL policy; no workaround attempted. Local changes only.

## Footer and privacy — 15 October 2026
Branch feature/footer-privacy preserves pre-existing service-section work without editing it. Local contact/footer redesign in main.jsx and scoped footer.css; confirmed phone +48 723 655 123 alongside existing email/Instagram. Questionnaire has privacy links before input and sending, with readable mobile footer text; sending logic unchanged. public/privacy.html is a standalone noindex draft with original viewport-cropped logo, explicit missing controller/access/legal-basis/retention/provider fields and a cookies section. Six-month unconverted-enquiry retention is still a proposal, not an implemented deletion schedule. No cookie banner, speculative socials or copyright claim. Completion requirements and verified social research are in docs/FOOTER-PRIVACY.md. No push/deploy. Browser QA covered main page 1440/390/320 and policy desktop/320, including form steps, separate-tab policy link, keyboard focus/Escape. New captures are ignored under qa/footer-privacy.

## Service scene rework — 15 October 2026
Local work on feature/service-stories: ServiceStories owns content; ServiceScene provides independent text/artwork entrance scopes; ServiceArtwork composes shared PhotoPrint gallery triggers into route/concert/contact-sheet visuals. Cream service surface, burgundy headings and thumbtack markers. Removed rejected stage diagram and pseudo-working note. Original photos and gallery indices retained; no new dependency or raster asset. Desktop 1440 and mobile 320/390 verified, no horizontal document overflow or text clipping; gallery expected image, questionnaire open/Escape/focus return, normal entrance animation and reduced-motion cleanup checked. npm run check/build/standalone pass. Captures are ignored under qa/service-rework. Not committed or pushed.

Footer icon correction — 15 October 2026: user rejected removal of the contact icons. Restored original email/Instagram SVGs, contact icon frames with hover/focus feedback and diagonal arrows; added a matching phone SVG in contact and footer links. Mobile footer arrows hide as before to retain compact labels. Contact hierarchy/privacy work unchanged. Browser inspected 1440/390/320; no document overflow or clipped contact labels. Check/build/standalone passed; local only.

Footer simplification — 16 October 2026: removed the two user-rejected captions (YAR Agency · Польща and Музика. Люди. Події.). Desktop logo aligns to the vertical centre of the navigation/contact columns; policy row remains right-aligned on desktop. Actual browser 1440/320 checked: aligned centres, captions absent, no horizontal overflow or clipped footer links. Check/build/standalone passed. Screenshot: ignored qa/footer-privacy/logo-centred.jpg. Local only.

Social/privacy confirmation — 16 October 2026: user supplied Instagram, Facebook share URL and TikTok @yar.agency. Added Facebook/TikTok line icons and links in contacts/footer using one shared social list, without tracking query parameters. User named Шкодюк Вікторія Юріївна / Viktoriia Shkodiuk as responsible for reading/storage/deletion, confirmed email-only working storage (no tables/folders/CRM), and adopted six months after last substantive contact for unconverted enquiries. Policy and checklist updated; deletion remains manual, no recipient configuration or server sending logic changed. JDG registered name/address/controller details and provider review still pending. Local only.


## Integrated collaboration examples — 16 October 2026
main.jsx nests each example in its corresponding format column, with independent SceneEntrance scopes. Scoped collaboration-examples.css stacks image/text within each desktop column and preserves complete format/example order on mobile. D016 belongs to specific tasks/concert organization; wuha copy now describes user-confirmed ongoing management (page, content, festival applications, label meeting). All seven gallery images retained. D016 has a typographic treatment pending actual imagery. Pre-existing service/footer/privacy edits preserved. Check/build/standalone pass; browser 1440/390/320 verified, no clipping/overflow; gallery opens and Escape restores focus. Local only.

## Poster button variant — 16 October 2026
Branch feature/poster-button-variant preserves the existing uncommitted footer/service/privacy work. Shared ActionButton in src/components/Buttons.jsx now selects variant="imprint" (default) or "poster". All consumers migrated from ImprintAction; only the hero opts into poster, using its established red→cream colour pairing with a contrasting hard offset. Existing form pending/disabled/submit and link semantics retained. Browser inspected 1440 and 320, actual hover, hero contact navigation, questionnaire open/Escape and keyboard focus. Check/build/standalone passed. Captures in ignored qa/poster-button. No push/deploy.


Collaboration follow-up — 16 October 2026: removed artist/format eyebrow captions and separate “Фото концертів wuha” action. Revised both descriptions around visitor needs, scope and actual examples. D016 column now uses user-selected gallery photo 3 (people.webp), opening gallery index 2; wuha retains vocal.webp at index 0. Removed unused typographic-print/caption CSS. Desktop 1440 and mobile 320 checked; no overflow/clipping, photo opens at 3/7 and Escape closes. Check/build/standalone passed. Latest screenshot: qa/collaboration/photos-desktop.png (ignored). Local only.


## Genuine team photograph — 16 October 2026
Branch feature/team-photo preserves all pre-existing uncommitted work. Team mirror now uses the genuine user-supplied Sofia/Vika photograph, responsive 1800/800 WebP files generated by scripts/optimize-assets.mjs --team from an unchanged ignored original. Natural 4:3 frame; obsolete stock caption removed and alt updated. Earlier missing-team-photo notes are superseded. Check/build/standalone pass (existing dependency use-client warnings). Actual browser inspected at 1440 and 320: full photograph, readable copy/action, no horizontal document overflow. Captures ignored under qa/team-photo. No commit, push or deployment.

Hero yellow action — 16 October 2026: feature/hero-yellow-action preserves existing local work. Hero poster now tone="yellow" hoverTone="yellow" with stable ink text/shadow. Hover changes only position/offset. Browser verified resting/hover RGB values, 1440 and 320 layout and #contact navigation. Check/build/standalone and diff whitespace pass. Local only.


Footer alignment — 16 October 2026: user requested the YAR mark at the start of the footer columns. footer-identity now uses align-self:start. This supersedes the earlier vertical-centering choice.


Wuha copy correction — 16 October 2026: user clarified label meetings are ongoing work. Copy now says “Разом із гуртом також проводимо зустрічі з лейблами.”, superseding the one-off past-tense description.


## Plain photographs — 16 October 2026
Branch feature/plain-monochrome-photos. Removed photo mounts, frames, pins, team mirror lamps and collaboration tape divider; photographs remain as noninteractive monochrome images. Gallery dialog and triggers removed; media files retained unchanged. Intro animated route restored after user clarified it should stay. Ticker hover/focus pause removed at user request; reduced-motion, visibility and viewport guards remain. Check/build/standalone and whitespace checks pass. Actual browser inspected at CSS widths 1440 and 320, no horizontal overflow. All ten displayed photos have grayscale(1), zero mount padding/shadow and no resting rotation. Questionnaire opens and Escape closes; no submission tested. Ticker confirmed running with pointer hovering. Local only.


Motion preference correction — 16 October 2026: user screenshot showed the static ticker fallback (single small copy), so hover pause alone did not explain their issue. Removed the obsolete yar-stage-light localStorage dependency from useBackstageMotion; its switch no longer exists. System reduced-motion and page/intersection guards remain. Screenshot alone cannot distinguish legacy saved preference from system reduced motion. Check/build/standalone pass. Browser confirms running ticker after change.


Ticker continuity and main integration — 16 October 2026: each repeated text group now has min-width:100vw and flex-shrink:0, preventing a blank tail when the text is narrower than the viewport. Static reduced-motion layout resets min-width. Linear 38s transform loop uses translate3d and will-change only while active/in view. Seam geometry verified near 37999ms; desktop CSS width 1440 and mobile 320 have no document overflow. Ready-build browser sample: 90 requestAnimationFrame observations, 9 intervals above 34ms, max 50.9ms; occasional frame delays remain in this test environment, so smoothness on the user Chrome session is not confirmed. check/build/standalone and whitespace checks pass. User authorized integrating all current changes into main.


## Service simplification — 16 October 2026
User requested an initial cleanup of the three service directions. Removed their upper navigation, the closing “Окреме завдання чи весь концерт — обсяг роботи узгодимо разом.” sentence and all five service photo instances. Each direction is now an independent, initially collapsed disclosure; activating it reveals its description and task list. The discussion action remains. Introduction, collaboration and team photographs remain as before; media files are unchanged.
The service disclosure and current team layout were checked in an actual browser at 1440px and 320px; no horizontal document overflow was found. The first disclosure was opened and its description and task list verified. The discussion action opens the questionnaire; Escape closes it and restores focus. No submission tested.


## Team photostrip studies — 16 October 2026
feature/team-photostrip preserves existing service simplification work. TeamSection.jsx and team-section.css replace the earlier umbrella collage studies with the actual user-supplied photostrip. The current implementation uses the full-width strip on desktop and four crops in a 2×2 arrangement on mobile; earlier ?team-study review variants are not present. Images are generated by optimize-assets.mjs --team-strip; source preserved, provenance in ASSETS.md. The later proposed origin-story copy is a fictional prototype example and must not be treated as verified company history. Current layout checked at 1440px and 320px with no horizontal document overflow. Contact CTA checked.


## Team section copy layout — 16 October 2026
Reworked the post-photo text into two editorial columns: heading and contact action at left; service introduction and a story sample at right. Mobile stacks these groups. Removed the name caption and visible mockup disclaimer at user request. The story is proposed copy for layout review only, not verified agency history. Browser checked at 1440px and 320px: no horizontal document or text overflow; story and CTA remain visible. `npm run check`, `npm run build` and `git diff --check` passed before the latest copy refinement. Build retains existing Mantine `use client` warnings. Not committed.

## Section anchor alignment — 16 October 2026
Removed duplicate `scroll-margin-top` values from the team and collaboration sections. Root `scroll-padding-top` matches the fixed header height so target sections align flush below it, without exposing the previous section. Browser checked at desktop and 320px: services, team, collaboration and contact align to the header edge. `npm run check`, `npm run build` and `git diff --check` pass; build retains existing Mantine `use client` warnings. Not committed.


## Vector interface symbols — 17 October 2026
Text-glyph interface icons replaced with aria-hidden SVG paths: header contact arrow, questionnaire format arrows/circles, completed-step checks, success symbol/email link, and both privacy-page return arrows. Shared React component: src/components/InterfaceIcon.jsx. Route placeholder uses ordinary punctuation. Existing SVG controls unchanged; no dependencies or media changes. Browser inspected at 1440×900 and 320×800: header/menu, questionnaire choices and step completion, Escape, privacy return link; document/inner scroll widths fit their containers. Success view updated in source but no live request submitted during QA. Check/build/standalone passed (existing dependency use-client warnings during build). No push or deployment.

Header navigation follow-up — 17 October 2026: reordered primary links to match page flow: services, collaboration, team, contact. All existing main destinations are represented; collaboration examples remain within collaboration. Verified rendered order/targets at 1440px, mobile menu at 320px, collaboration navigation and menu close, no horizontal overflow. Check/build/standalone passed. No push/deploy.

## Final privacy policy — 17 October 2026
User supplied CEIDG print and authorised final policy wording. Controller details inserted in public/privacy.html; all public policy draft/pending/prototype labels removed from page, footer and questionnaire. GDPR bases, actual Vercel/Resend/Gmail recipients/transfers, six-month manual enquiry retention, rights and cookie information now read as final publication text. Corrected obsolete localStorage claim: source no longer reads the retired preference. Live-browser audit found only same-origin requests when loading page/opening form and empty cookies/localStorage/sessionStorage. Vercel read-only config check confirms two gmail.com recipients including agency email; no environment or sending logic changed. The business-status and hosting-plan questions were subsequently confirmed resolved by the user on 17 October; they are no longer open requests. Earlier audit observations remain historical. Full status/evidence in FOOTER-PRIVACY.md. Browser preview checked 1440/390/320; check/build/standalone pass. Preserve concurrent questionnaire/style work from other ongoing edits.


Anchor alignment — 17 October 2026: useSectionAnchors resolves same-page links against current target geometry and measured header height after document.fonts.ready and the menu render. Handles initial hashes/hash history, repeated links, reduced motion, target focus; modifier/new-tab links retain native behavior. Team mobile frame dimensions reserved at 800×1033 to prevent loading shifts. Collaboration reveal moved from the anchor container to its heading, keeping target geometry stationary. Browser QA: four primary targets at 1440px and 320px align at 88px/78px (subpixel rounding under 1px); direct hash/reload, mobile menu close, expanded service layout, browser Back and top/logo checked. No horizontal overflow at 320px. Check/build/standalone passed. Changes local, no push/deployment.


Privacy final-status confirmation — 17 October 2026: user confirmed the previously raised matters are resolved and requested no further outstanding-question captions. Removed the obsolete open-issues section from FOOTER-PRIVACY.md. Public policy, footer and questionnaire already have final labels with no draft/pending notices; no public copy or layout change was needed. Keep substantive privacy disclosures and the adopted retention rule. Do not repeat resolved questions.

## Questionnaire scenarios — 17 October 2026
Local feature/questionnaire-scenarios continues pre-existing uncommitted UI/privacy changes without reverting them. Revised form/schema/email validation for natural-language socials, attendance, previous shows, crew and performance context. Management uses goals/team rather than event-service options; separate task and uncertain enquiry paths supported. Dates stay optional calendar ranges. Route uses add/remove city rows with local suggestions and free entry. Shared contacts and per-scenario details survive switching/closing within the page; no persistent draft storage. See QUESTIONNAIRE-SCENARIOS.md. Server renders all answers as escaped text; request-size ceiling 60 KB accommodates bounded multibyte answers. No deployment or live email test performed.


## Compact collaboration — 17 October 2026
Branch feature/compact-collaboration preserves all pre-existing uncommitted work. Scoped collaboration-examples.css reduces spacing/title/button scale and places example photos beside copy at >=1100px; smaller layouts keep stacked images and complete format reading order. main.jsx only adds heading whitespace for the single-line layout and accurate responsive image sizes in this revision. At CSS width 1440, collaboration height falls from 1256px to 710px. Existing useSectionAnchors already computes live geometry; no anchor code change needed. Browser checked 1440/1100/390/320, no text clipping or horizontal overflow. All four header targets align at 88px desktop / 78px mobile within 0.2px; mobile menu closes. Both format buttons open the questionnaire; Escape returns focus. No submission tested. check/build/standalone pass with existing dependency use-client warnings. Capture ignored at qa/compact-collaboration/desktop.png. No commit/push/deploy.


## Text-only collaboration — 17 October 2026
Collaboration text experiment on feature/compact-collaboration: remove both photos and general heading, turn format names into ordinary h3 headings, move separate small actions below scope/example copy. Repeated example slogans removed; existing scope and factual D016/wuha text retained. Scoped collaboration-examples.css now styles the two text columns; no media files deleted. Height ~550px at 1440. Browser checked 1440/768/320, no horizontal/text overflow. Collaboration, team and contact header anchors align below header at desktop/mobile; existing live geometry hook retained. Both actions open questionnaire; Escape returns focus. No submission tested. check/build/standalone pass; existing dependency use-client warnings. Ignored screenshot qa/compact-collaboration/text-desktop.png. Local only.

Questionnaire final validation/UI: 8 API tests, check/build/standalone and diff whitespace pass. Browser scenarios and 320/900/desktop layouts verified; details in QA.md. UI refinement reduces narrow-screen selector height and desktop rail, constrains tablet fields, groups review with edit actions, and gives route controls visible affordances. Work remains local; other in-progress changes in this shared checkout were preserved.
