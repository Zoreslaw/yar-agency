# YAR / revision 3

## Current direction — internal motion, dressing room and type / 13 October 2026

User rejected animated background changes and conversational filler. Backgrounds now stay fixed. The introduction says what YAR takes on; Motion for React orchestrates text, a drawn SVG route and the existing photo prints. `SceneEntrance.jsx` runs once on intersection, stops on disabled/reduced/hidden state and clears partial styles. Existing service entrances and link states remain CSS. User explicitly authorized useful open-source dependencies; Motion and its lockfile are added.

Wuha is placed directly within the continuing-artist collaboration column: artist name, the confirmed continuing relationship, and a gallery action. Removed “Наприклад”. All seven images remain. No biography, genre, results or service-specific credits were invented; official artist link was requested asynchronously but not supplied yet.

Team uses a dressing-room mirror composition: confirmed names and direct introduction inside a dark reflective frame, two lines of lamps with alternating steady brightness. Lamps warm once, never blink. No substitute portraits. Merch is retained in the gallery, not shown as a team portrait.

The old Lovable prototype was inspected in-browser for its yellow moving type band. A short ticker between services and collaboration uses actual directions only, not the old site's unverified dates, claims or contacts. It has an icon pause, hover/focus pause and static reduced-motion/off state.

Typography study: rendered Oswald, Roboto Condensed and Unbounded using original variable TTFs from google/fonts on the same Ukrainian text. Oswald 500 is selected for main headings/ticker; Manrope remains body/UI, League Spartan remains the existing English brand line. Oswald's narrower rhythm suits the concert-poster direction; Roboto Condensed was more neutral and Unbounded too wide for these lines. Local WOFF2 Cyrillic/Latin/Latin-ext, OFL retained, font-display swap. No changes to the original YAR mark.

Sources: https://motion.dev/docs/react-use-animate ; https://motion.dev/docs/react-use-in-view ; https://fontsource.org/fonts/oswald/about ; https://fontsource.org/fonts/roboto-condensed/about ; https://fontsource.org/fonts/unbounded ; https://yar-agcy.lovable.app/ . The latest complete page has NOT been visually verified: browser tool policy rejected reacquisition of localhost after a session reset. Do not mistake older QA screenshots below for this revision.

## Current direction — backstage noticeboard / 13 October 2026

Supersedes the scene-selector and long scroll-passage experiments below. User clarified that wuha is one example within the agency's work, not its central identity. The dedicated full-page gallery and wuha navigation entry are removed. A small example sits beside the continuing-collaboration format, with all seven original photos retained in the dialog.

User liked the layer opening but rejected the amount of scrolling and empty introduction. The passage now has natural section height, no sticky hold, no scroll progress listener. On first intersection, two dark wings open automatically in one second. Content entrances finish automatically too. Reduced motion/off shows everything immediately. The copy is now a draft in plain Ukrainian: “Твій вихід. Ми за сценою.” and concrete tasks instead of institutional descriptions, keeping all six PDF service directions and individual pricing.

The introduction combines two original photographs as overlapping mounted prints with cream borders, small pins, different angles and restrained shadows. Both are actual gallery buttons. They are in the normal section composition, with a dedicated mobile layout. No fixed photo rail, copied stock, generated hardware, fictional people or captions are added. Photos remain wuha collaboration documentation, not evidence for every service.

References inspected: [Human Shapes / Marmoset](https://humanshapes.co/projects/marmoset), for music identity through flyer/collage composition, and [Codrops Scattered Polaroids](https://tympanus.net/codrops/2014/01/28/scattered-polaroids-gallery/), for pictures treated as individual overlapping objects. The second is a historical interaction reference, not a current style prescription. Also read [Page Reveal Effects](https://tympanus.net/Tutorials/PageRevealEffects/) for layered transitions. Implementation and composition are independent; no borrowed code, imagery, shuffle gallery, 3D flip, or dependencies.

## Current direction — artist services as scenes / 13 October 2026

User rejected the technical-looking visible controls/captions, the disconnected stage-preparation image and the static information block. Remove that interlude rather than decorate it further. Remove all stock hardware photos and the stock team reference from the visible site. Retain provenance and files as history. Remove section/service index numbers. Video pause and a footer motion control use compact icons with accessible names; no visible instructions about implementation.

Services: original wuha images and a readable six-direction selector. One description is open at a time. Hover/focus previews a scene on desktop; clicking changes the open panel and scene. The photo stays next to the content while scrolling through directions. Original colour comes from supplied concert photographs, rather than a synthetic light wash. Image changes are intentional cuts with a short reveal, no ghosted crossfade, endless looping or mouse-following displacement. Mobile shows the image within the selected panel. All descriptions remain sourced from the supplied PDF; photography is labelled YAR × wuha, not a fabricated service case/result. The new CTA opens the existing local brief.

Team: confirmed Sofia/Vika introduction and the supplied YAR merch image. No stock models or fictional portraits. The original large wuha gallery follows directly. The composition favours actual YAR material over invented stage decoration. Missing genuine team imagery is recorded here, not presented as a placeholder explanation in the visitor flow.

Research considered: [Codrops image-hover menu](https://tympanus.net/codrops/2020/07/01/creating-a-menu-image-animation-on-hover/) for the interaction principle of changing a photographic preview with a named choice. We do not use its pointer-following/GSAP machinery or third-party photos. The scene selector is independent React/CSS, works with click, keyboard and touch, and adds no dependency. Earlier full-frame/ribbon experiments below are superseded history.

## Current direction — whole frames / 13 October 2026

User rejected the fixed photo ribbon: it looked like a background accidentally protruding at the right edge. Removed its JSX and CSS completely, including all reserved rail spacing. Full-width original video is restored. The stage-preparation photo is displayed in its natural aspect ratio, with a separate typographic caption and a whole-frame scale from 84% to 100% on scroll. The team section pairs two whole images at different scales, stacked on mobile; stock atmosphere and team placeholder have distinct captions. No fixed photography, synthetic hardware, clipped photo strip or image parallax remains.

Inspected [Stufish](https://stufish.com/) in the live browser for whole-scene photographic/video composition. Read [Codrops: On-Scroll Expanding Image Animation within Typography](https://tympanus.net/codrops/2024/04/02/on-scroll-expanding-image-animation-within-typography/) and inspected its live demo for an expanding-frame principle. Our implementation uses independent CSS view timelines and observer entrances, with no GSAP dependency or copied media. The exact typography-pushing experiment is not replicated. Photo scale is progressive enhancement; reduced motion and off preference remove it.

The ribbon implementation described in the earlier revision below is rejected history, not the current design.

## Current revision — photographic backstage / 12 October 2026

User rejected the smooth generated metal texture, odd lighting colour and disconnected static decoration. They chose more real photography over a separately isolated metal truss, and explicitly asked to study other websites for inspiration.

Inspected the live sites in the browser:
- [Visual Spectrum Studios](https://www.visualspectrum.studio/): photographic concert hero with real rigging/light, large type, then direct service rows. Take the principle that the scene comes from actual camera footage/photos.
- [Midnight Factory](https://midnight-factory.com/): emphatic cream-on-dark identity, live-visual media and changing scales across the page. Take the rhythm between identity, large media and explanatory text, not its immersive 3D mechanisms.
- [Forward Motion](https://fomoentgrp.com/): viewed its large editorial type and service-to-work sequence. Its feature grid and decorative frames are not used for YAR.

Implementation: remove the generated truss, separate generated fixtures and synthetic cone wash from the visible page. A narrow fixed real backstage-photo ribbon connects the monochrome video and subsequent desktop sections. It includes stock/source attribution. A wide monochrome stage-preparation photograph gives the transition from services to meeting the team a photographic pause. The team section returns to cream; the service background is darkened ink, with no coloured light wash. All existing wuha photographs stay in their gallery; the temporary shared team photo remains explicitly labelled as a reference.

Motion: short observer-triggered entrances and an image-window reveal; small photo drift driven by CSS scroll/view timelines when supported. No scroll hijacking, repeated flashing, moving human video in reverse, or crossfades. Images/text are visible without JS animation. Motion has an off preference, reduced-motion and hidden-page guards. Original MouthSignal and the independent video pause are preserved. On mobile the fixed ribbon is hidden; the photographic interlude and entrances remain.

Technical reference: [MDN animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline) and [animation-range](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-range). Scroll timelines are progressive enhancement; unsupported browsers retain static photo framing and observer entrances. This remains a local design experiment, not approved company copy.

The supplied visual identity is the design's organizing material: the original mark has enough character to lead the page. The user prefers a full-width monochrome stage film with a large cream title over it. Header is fixed: transparent at the top, dark translucent blur after 24px scroll. Top and left video scrims protect the navigation/title from bright objects. The rest is a photographic sequence and direct paths for artists/organizers to prepare a brief.

Colors: #1D223D ink, #991A1E burgundy, #FFFBD4 cream, #FFCC00 yellow (small emphasis only). Original PNG logo retained; no redraw. Manrope used at moderate weights for Ukrainian interface; League Spartan for the brand's English question. Temporary Cyrillic substitute until licensed Gotham is supplied.

Structure: full-width video/title → photographs (one wide lead, people and merch spread, seven-photo contact sheet) → collaboration choices with original mouth emblem → minimal footer. Text does not repeat atmosphere already visible in the photos.

Read docs/ANTI-AI-REVIEW.md for research sources, critique and what changed. Earlier reference websites remain Brave Factory (layering/brand emphasis), Kontrabass (visitor-specific navigation) and the original YAR mockup (actual identity assets, unverified copy not reused).

Pending approval: services, company positioning, event titles/dates/credits, actual contact destination and licensed fonts. Photos remain atmosphere until project facts are supplied. Stock background film is not presented as YAR event footage.

## Revision 4 — signal in the tongue
A local, brief analog/digital interference treatment on the existing YAR mouth. Cream and ink grain, horizontal tears mostly across the tongue, tiny whole-symbol jitter, restrained exposure shifts. The original red YAR stays recognizable. Sparse bursts preserve quiet intervals and do not affect the page background. User can pause; reduced motion is static.
Reference: StarCraft's pre-BlizzCon text/CRT interference, inspected in Blizzard's original public asset https://assets.evergreen.blizzard.com/production/js/chunks/f119cd3e5c3d93559064.js . Our implementation is an independent Canvas treatment; no Blizzard footage or scripts are embedded.

## Revision 6 — continuous signal field
User found v5 both harsh and weak. Diagnosis: 95ms stepped frames, bright random 12px cuts and only 680ms active vs 5.6–9.4s idle. Replaced this with coherent fine scanline displacement, 30ms minimum frame interval, a 230ms attack and 480ms release within a 1.8s burst. Idle is 2.6–4.6s; displacement and whole-symbol vibration carry intensity, rather than exposure flashes. Grain is denser and fades with the same envelope. Hover cannot restart an active burst.
Technical reference: https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/ (coherent noise displacement principle; our renderer uses Canvas scanlines, not SVG filters).

## Revision 7 — punk deformation
User rejected the soft wave. The effect now breaks the actual anatomy into six slabs with independent width changes (up to ±21%), shifts, and misaligned seams; coarse ink loss and grit reinforce the damaged-print character. Three irregular punches within 975ms replace the smooth sine-wave envelope. No bright scan bars. Canvas overscan grows to 22% on each edge; mobile reserves extra space on the left for deformation.

## Revision 8 — people behind the music / local prototype

Audience corrected to artists, musicians, bands and their managers, not concert attendees or ticket buyers. Two flexible modes: specific task/concert/trip and continuing work with an artist. Scope and cost agreed together; no fixed packages, revenue promises or invented outcomes. Six expandable service rows use the user-supplied PDF. Promotion clearly uses ready-made artist-team materials.

Sequence: original full-screen backstage → services and collaboration formats → meeting Sofia and Vika → existing wuha photo gallery → real email/Instagram and local downloadable brief. The user clarified that the existing gallery is the intended wuha collaboration example. Label it accordingly, without inventing a full case study, dates, credits or results.

Team: user confirmed two people, Sofia and Vika. A single shared photo supports the sense of friends working together; an explicitly labelled stock reference demonstrates framing. No fabricated role titles, quotes or biographies. For replacement: a candid shared backstage/dressing-room photo, both people readable, medium/wide framing with breathing room above and beside them. Separate portraits remain possible if the real photos suit them better.

Stage experiment: transparent metal raster truss repeats down the right side of the post-hero page; independently placed raster lamps in services/team/contact. Soft cream SVG cones fade in over 1.4s when each section intersects the viewport's central region. No strobe, vibration or endless lamp movement. Observer handles section visibility; hidden-page guards disable light. A preference button turns the effect off and persists locally. Reduced motion disables light; mobile hides the long truss and keeps a small edge-cropped local lamp. Artwork and text remain visible when all effects are disabled.

The original logo, palette, montage, gallery media and MouthSignal are preserved. Contact destinations are sourced from the PDF. Brief still saves a local text file and never submits.

## Detail revision — 13 October 2026

User approved a temporary stock photo inside the dressing-room mirror, with team names/copy alongside, instead of text inside nested frames. Photo-reference caption remains truthful. Removed all ten user-selected small captions, visible pause controls, prototype footer and separate back-to-top action. Retained local brief download explanation within the dialog. Shared cut-corner primary buttons and slash-separated monochrome service ticker replace generic button surfaces and stars. Reduced-motion/visibility guards remain despite removal of manual controls at user request.

Team follow-up: user requested “Наша команда.” and alternating even/odd dressing-room lights. Eight-second cycle with opposing circuits and soft transitions. Wuha should communicate relevant agency experience with confirmed responsibilities, rather than an isolated photo link; factual scope requested before revising that example.

Lamp correction: retain the accepted photographic mirror dimensions. Fixed shaded glass plus a warm emissive overlay replaces muddy animated bulb colours. Motion controls opposing circuits, long holds and short incandescent fades; no abrupt flashes. Wuha example now explains the confirmed organization/artist responsibility split after the two formats. Reference: https://motion.dev/docs/react-animation and https://motion.dev/docs/react-transitions .

Final visual follow-up: case copy focuses on the artist’s task and concrete agency responsibilities, informed by GOV.UK writing guidance (https://www.gov.uk/service-manual/design/writing-for-user-interfaces) and NN/g credibility research (https://www.nngroup.com/articles/trustworthy-design/). No borrowed claims. Large wuha photo is mounted with cream paper/tape and preview-only near-monochrome warm treatment. Mirror reduced to max 540px and a 6:5 photo. Burgundy #991A1E restored to service ticker per user brand sheet.

Ticker text follow-up: user requested a brighter text variant; text and slash separators now use brand yellow #FFCC00 on burgundy #991A1E.

## Motion rhythm and case annotation

User rejected the thin isolated stage cable. Research: https://humanshapes.co/projects/marmoset (line art integrated with record/flyer-inspired collage), https://tympanus.net/codrops/2017/12/05/creative-svg-strokes-animation/ (scoped SVG stroke sequencing, historical inspiration only), https://motion.dev/docs/performance (opacity/transform emphasis). A short original drawn arrow now refers directly to the mounted case photo. No copied vector or added GSAP. Unified shorter vertical entrances, no background animation, no scroll lock, no repeated section reveals. Ticker pauses outside viewport; hidden-page state no longer switches layout.

Questionnaires replace generic “brief” language. Different fields for concerts, tours and ongoing artist collaboration; ongoing work starts a conversation rather than implying a fixed purchasable package. Concert questions sourced from actual user-supplied form. Local download remains until genuine submission integration is agreed.


Collaboration tape — 13 October 2026: the two formats are separated by an inline SVG strip of torn cream stage tape, vertical on desktop and horizontal below 650px. A single 550ms reveal follows the existing section entrance; reduced motion stays static and page visibility pauses it. Removed the decorative arrow above wuha. No new dependencies or external assets.

Questionnaire refinement: react-hook-form supplies validation/focus handling rather than browser-only popups. Compact single-row header, one scrolling field area and anchored action. Requiredness limited to information needed to start a conversation; optional concert/tour details accept unknowns. Error messages placed near fields with aria-describedby/aria-invalid. Research: https://www.w3.org/WAI/tutorials/forms/validation/ ; https://www.w3.org/WAI/tutorials/forms/instructions/ ; official react-hook-form useForm/register documentation source at https://github.com/react-hook-form/react-hook-form and https://github.com/react-hook-form/documentation .

## Questionnaire art direction — 14 October 2026

The questionnaire now uses a cream working sheet and burgundy backstage rail, local Oswald display type, restrained torn edge and yellow actions. Original mark retained. Mobile becomes a full-screen sheet with a compact three-stage progress strip. Existing Mantine and React Hook Form remain; no dependencies or assets added.

Three stages: identity and request format; required request description followed by optional format-specific details; review of relevant answers. The final screen explains downloading and manually attaching the file to email. Draft answers stay in mounted component memory only, including when the modal closes; page refresh clears them. No submission integration.

Research applied: [W3C multi-page forms](https://www.w3.org/WAI/tutorials/forms/multi-page/) for logical stages and progress; [GOV.UK question pages](https://design-system.service.gov.uk/patterns/question-pages/) for focused questions and useful hints; [W3C modal pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) and [Mantine Modal](https://mantine.dev/core/modal/) for focus, Escape and responsive presentation. [Human Shapes / Marmoset](https://humanshapes.co/projects/marmoset) informs music/editorial composition, without copied artwork or interface. These are design references, not evidence of user-tested conversion improvements.

User follow-up: remove the rail eyebrow “YAR / АНКЕТА”, the bottom rail slogan and the first-step retention note. Continue the burgundy spine through the desktop header behind a cream original mark; centre the header title over the cream working area. Mobile retains its compact header/progress arrangement.

## Email notifications — 14 October 2026

The final questionnaire action sends the relevant reviewed answers to the team through a real server integration. Preserve the approved three-step cream/burgundy design. Branded notification uses the original PNG mark, ink, burgundy, cream and yellow with email-safe table layout, inline styles and system fonts. HTML is independently escaped; a plain text alternative and applicant Reply-To are provided. Success means Resend accepted the message, not guaranteed inbox delivery. Do not introduce a visitor download or claim a database archive.

## Colour and mouth — 14 October 2026
User approved ticker concept but requested more red. Increase burgundy band padding from 15px to responsive 32–64px, keeping yellow typography and existing motion. Contact mouth uses supplied logo-free artwork with exterior background removed; avoid repeating YAR inside the emblem. Existing punk slab deformation and visibility/reduced-motion guards remain.

## Brand red across the page — 14 October 2026
The user clarified that more #991A1E is needed across the whole composition, with critical visual comparison rather than simply enlarging the ticker. Three actual CSS studies were captured at 1440px with the same content: A, burgundy photographic introduction and contacts; B, burgundy collaboration and contacts; C, burgundy service list and contacts. A is the current local design proposal: it introduces the brand colour early, gives the service copy a cream reading surface, preserves ink as the photographic collaboration pause, and repeats burgundy in the closing invitation. Burgundy service/team headings and the original footer mark connect the light sections; yellow remains route/action emphasis. The hero action is burgundy with cream text. Ticker padding returns to 18–28px. B concentrates red toward the bottom; C produces the densest reading field. These are design judgments, not user-tested findings or final approval.
Comparison captures/HTML are in ignored qa/red-balance; no new media, dependencies, business copy or animation changes in this revision.

## Questionnaire imprint — 14 October 2026
User selected the imprint prototype. Only the contact questionnaire trigger changes: cream printed surface with burgundy Manrope lettering on the existing burgundy section, small irregular edge and -1 degree tilt. Yellow appears on hover/keyboard focus; document icon, separated arrow and cut corners removed. Edge texture stays away from text. Reduced motion removes the tilt/movement.

## Shared imprint buttons — 14 October 2026
User clarified the chosen imprint must be the shared button language. src/imprint-buttons.css supplies one edge, slight tilt, ink-loss marks, yellow hover/focus and reduced-motion behavior. Burgundy/cream variants depend on the section. Hero, collaboration format choices, gallery CTA, team contact, questionnaire, mobile menu and gallery controls use it. Format descriptions sit beside their action rather than inside its printed surface. Photographic triggers retain their photographic presentation; navigation/contact text links remain links.

## Action hierarchy — 14 October 2026
Supersedes applying the print to every control. ImprintAction is reserved for page CTAs, collaboration choices and the questionnaire primary action. UtilityButton handles menu and Back; IconButton handles modal close and gallery arrows/close. Utility controls have plain text/icons, quiet hover and visible keyboard focus with 44px targets. Colours remain inherited from each surface. Styles and native pending/disabled behavior live in src/components/Buttons.jsx and buttons.css; the earlier imprint-buttons.css workaround is removed.

## Contextual action colours — 14 October 2026
User asked to reconsider button/hover colours in each location. The hero keeps burgundy/cream and hovers to cream/burgundy. Cream actions in ink/burgundy sections hover to yellow/ink. Burgundy actions on the cream team/form surfaces hover to ink/cream. ImprintAction exposes tone and hoverTone; the red default hover is ink, with an explicit cream override in the hero. Hover keeps the resting angle and moves only 1px. Keyboard focus keeps the resting colours and outlines with the action fill; hover rules apply only to fine pointers that support hover. Simple utility controls retain a quiet inherited-colour tint.

## Service redesign branch — 14 October 2026
The three scenario redesign is under review on a separate feature branch. Main retains the prior six service rows. The burgundy page palette, button system and questionnaire copy remain part of main.

## Selected whole-page palette — 15 October 2026
User selected A from the current full-page A/B/C comparison. On feature/service-stories, the three service stories now use cream with ink body copy and burgundy headings/list marks. The discussion action uses the shared red tone with ink hover. The introduction and contacts remain burgundy, collaboration ink. This is a palette choice for the existing composition.

## Contact hierarchy and privacy draft — 15 October 2026
On feature/footer-privacy, the contact invitation now gives the questionnaire one primary printed action, followed by direct email, confirmed phone and Instagram links. Cream footer uses three clear areas (original mark, section navigation, direct contacts), with a separate policy row. Mobile keeps the mark/introduction above two compact columns. Original mouth treatment, brand palette and media remain. No speculative social links, donation link or unconfirmed copyright holder. A separate noindex Ukrainian privacy draft and questionnaire links provide a reviewable document while controller/access/retention facts remain pending. Full checklist in FOOTER-PRIVACY.md. Do not publish the unfinished draft as an approved policy.

## Service scene rework — 15 October 2026
Retain palette A and three service directions. Use a visible route around the booking photograph, a clean concert photograph on an ink mount, and a burgundy-backed contact sheet of supplied photos for promo. The user rejected both the illustrative stage plot and the simulated backstage note: neither should return as filler. Do not add fabricated receipts, dates, checklists or pseudo-documentary labels. Thumbtack list markers were explicitly requested. Each composition has a bounded area separate from body copy, with thin burgundy section seams and direct section links. Text and artwork animate independently once in view, including on mobile; static and reduced-motion compositions are complete. Existing Motion and shared button components are sufficient.

Footer icon correction — 15 October 2026: retain the original email/Instagram icons and directional arrows within the revised contact hierarchy. Phone uses a matching line icon. Framed contact icons retain yellow hover/focus response; footer uses compact unframed icons.

Footer simplification — 16 October 2026: removed the two user-rejected captions (YAR Agency · Польща and Музика. Люди. Події.). Desktop logo aligns to the vertical centre of the navigation/contact columns; policy row remains right-aligned on desktop. Actual browser 1440/320 checked: aligned centres, captions absent, no horizontal overflow or clipped footer links. Check/build/standalone passed. Screenshot: ignored qa/footer-privacy/logo-centred.jpg. Local only.

Social links — 16 October 2026: retain icons for each user-confirmed Instagram/Facebook/TikTok destination. New Facebook/TikTok links follow existing framed contact rows and compact footer rows; social row typography is consistent. Preserve desktop logo centring and removed captions. Privacy remains a clearly marked draft, with confirmed responsible person and retention separated from unknown registration/provider facts.


## Collaboration examples — 16 October 2026
Each collaboration format contains its own example: left column is a specific task/event with D016; right column is continuing artist management with wuha. Mobile reads the complete D016 format/example before the complete wuha format/example. Supersedes the detached full-width example rows. D016 uses a plain typographic name composition until genuine artist imagery is supplied; existing photos remain attributed to wuha. User clarified wuha management includes the artist page, content, festival applications and a label meeting. No results or dates invented.

## Poster action variant — 16 October 2026
User requested retaining both the imprint and the earlier poster prototype. ActionButton replaces the narrowly named ImprintAction and accepts variant="imprint" (default) or variant="poster", independently of tone, hoverTone and size. The hero uses the poster: straight burgundy rectangle, uppercase Manrope, hard cream offset impression; cream/burgundy hover compresses the offset with a short 2px push. It suits the full-width concert-poster composition. Existing collage/photographic and questionnaire actions retain the imprint; utility controls remain plain. Reduced motion disables the movement and offset compression.


Collaboration copy and imagery — 16 October 2026: removed both small artist/format captions at user request. Copy now leads with visitor fit, delegable scope and individual terms, then concrete D016/wuha examples. Replaced generic wuha headline with “Команда для вашого гурту.” User then selected gallery photo 3 (people / Перед подією) for the D016 column, replacing the typographic composition, and removed the separate wuha gallery button. Both photographs remain clickable. This placement is user-directed; it does not establish the identities of the people shown.


Team photograph — 16 October 2026: replace the temporary stock reference with the user-supplied genuine Sofia/Vika umbrella photograph. Keep the existing mirror and lamps; use natural 4:3 proportions to preserve the whole frame on desktop and mobile. Remove the obsolete reference caption. No other layout/content revision.

Hero action refinement — 16 October 2026: user approved a permanently yellow poster with ink text. Hover retains fill, text and ink shadow colours, only pressing 2px into the offset. Remove the hero-specific cream/red shadow changes. Explicit hoverTone="yellow" is supported by the shared component CSS.


Footer alignment — 16 October 2026: user requested the YAR mark at the start of the footer columns. footer-identity now uses align-self:start. This supersedes the earlier vertical-centering choice.


## Plain photography — 16 October 2026
User requested monochrome photographs without frames, removal of the gallery and torn-tape divider. Preserve photo placements and copy; remove photographic mounts, pins, tape and mirror lamps. Keep the animated line in the introduction, explicitly retained by user clarification. Ticker should continue under the pointer; system reduced-motion and visibility guards remain.


Motion preference correction — 16 October 2026: user screenshot showed the static ticker fallback (single small copy), so hover pause alone did not explain their issue. Removed the obsolete yar-stage-light localStorage dependency from useBackstageMotion; its switch no longer exists. System reduced-motion and page/intersection guards remain. Screenshot alone cannot distinguish legacy saved preference from system reduced motion. Check/build/standalone pass. Browser confirms running ticker after change.


Ticker continuity and main integration — 16 October 2026: each repeated text group now has min-width:100vw and flex-shrink:0, preventing a blank tail when the text is narrower than the viewport. Static reduced-motion layout resets min-width. Linear 38s transform loop uses translate3d and will-change only while active/in view. Seam geometry verified near 37999ms; desktop CSS width 1440 and mobile 320 have no document overflow. Ready-build browser sample: 90 requestAnimationFrame observations, 9 intervals above 34ms, max 50.9ms; occasional frame delays remain in this test environment, so smoothness on the user Chrome session is not confirmed. check/build/standalone and whitespace checks pass. User authorized integrating all current changes into main.


## Service simplification — 16 October 2026
User requested an initial cleanup of the three service directions. Removed their upper navigation, the closing “Окреме завдання чи весь концерт — обсяг роботи узгодимо разом.” sentence and all five service photo instances. Each direction is now an independent, initially collapsed disclosure; activating it reveals the description and task list. The discussion action remains. Introduction, collaboration and team photographs remain as before; media files are unchanged.


## Team photostrip studies — 16 October 2026
Use the newly supplied actual four-frame team strip. Earlier review studies compared a full-width strip, an inset strip and a staggered collage; these variants are not exposed in the current implementation. The current layout uses the full-width strip on desktop and four original crops in a 2×2 arrangement on mobile, with team copy below. The story example is proposed prototype copy, not verified company history. Earlier umbrella-photo collage studies are rejected.


## Team copy layout — 16 October 2026
Arrange the team heading and contact action together on the left; keep the agency service introduction and a separate story sample on the right. Omit the names caption. Stack the groups on mobile. Story sample illustrates proposed copy tone for the prototype; verification of any biographical details is pending.

## Final privacy text — 17 October 2026
User approved replacing the policy draft with final text based on supplied CEIDG details. Retain the calm cream reading layout and original viewport-cropped mark. Replace draft warning/pending callouts with confirmed controller details and ordinary legal text. Footer/questionnaire links now simply read “Політика конфіденційності”. Do not attach unverified active-business status or a blanket compliance certification to the public policy. No contact/footer redesign or new media in this revision.

## Client-oriented questionnaire — 17 October 2026
Separate management from event work and give one-off tasks and uncertain enquiries explicit paths. See QUESTIONNAIRE-SCENARIOS.md for client journeys. Require only contact name, email and request. Accept natural-language context; retain optional calendar and ordered route rows with unrestricted city input. Collapse secondary concert/project questions and show edit actions in review. Compact modal begins at 900px.


## Compact collaboration — 17 October 2026
User requested a shorter collaboration section. Retain both formats and their full existing examples/copy. Left-aligned heading becomes one line from 900px; reduce section/button/description spacing. From 1100px each example places a narrow 3:4 photograph beside its text; smaller widths retain stacked 16:9 images. Mobile keeps the complete task/example before ongoing work/example. Original assets unchanged; cropping is CSS only. Existing measured-header anchor resolver remains compatible with the new geometry.


## Text-only collaboration — 17 October 2026
User requested a typographic experiment without collaboration photos or “На один концерт. Або надовго.”. The two format names are now plain headings, followed by scope, a quieter factual D016/wuha example and a separate small questionnaire action. Repeated example slogans removed. Desktop keeps two open columns; mobile reads each format completely. No new claims or media.

Questionnaire UI refinement: smaller 220px desktop brand rail, bounded tablet reading width, compact radio rows below 420px with selected-choice explanation, privacy text after contact fields, quieter selected styling, explicit route controls, and review grouped into contacts/request with inline editing. Preserve original mark, cream/burgundy/ink palette and main action treatment. No extra decoration or page-wide redesign.

## Publication identity — 17 October 2026
Use YAR Agency consistently in browser/app identity, search metadata and sharing cards. Browser/mobile icons and the sharing card retain the original mark on brand burgundy. Canonical origin follows the existing www redirect. Add a restrained branded 404 with a return-home action; main page design and messaging are unchanged.

## Three-language site and copy cleanup — 17 October 2026
Ukrainian, Polish and English share a source-keyed catalogue in src/locales/messages.json. An explicit ?lang=uk/pl/en link wins; otherwise a saved manual choice wins over the browser’s ordered language preferences, with English as the unsupported-language fallback. The compact header selector persists only yar-language. Translate visible page copy, service disclosures, image alternatives, navigation, questionnaire prompts/validation/review/status and the calendar. Keep questionnaire API type values and field keys stable; free-text answers are never translated. Remove terminal full stops from headings and simplify unnecessary dashes in marketing/form copy. Shorten the hero action and allow whole-word wrapping.

The privacy policy is now a second Vite entry at privacy.html, preserving /privacy.html. Its static fallback is Polish; its own selector and explicit language links provide all three full translations. The policy discloses the saved language preference. Preserve legal meaning, controller details and provider links. Centre the business name in its footer at desktop and mobile sizes. The main page’s static fallback metadata is English. Source photographs, motion and submission integration are unchanged by localization.


## Montserrat foundation — 17 October 2026
User selected Montserrat and asked to preserve the layout across Ukrainian, Polish and English. Use the same locally hosted family for headings, body, actions, questionnaire and policy. Remove active Oswald; do not retain its condensed proportions. Body weight 450, major hero/team headings 550, other display text 500, existing stronger action weights retained. Reduce hero, team and collaboration heading scales; bound intro text to the left of photographs, and resize contact heading and questionnaire rail for the wider glyphs. Original mark stays unchanged.

## Responsive header — 17 October 2026
Use a compact disclosure through 900px, including tablets. Hamburger turns into a close icon; navigation expands vertically in 260ms with a short opacity transition. Open header and navigation share solid brand ink, with large single-column links. Closed hero header stays transparent; scrolled header retains translucent blur. Desktop keeps inline links. Language control uses a globe, current code and chevron, with full native language names and a selected indicator. Only one panel opens at a time. Preserve 44px controls, Escape/outside/focus dismissal, inert hidden links, focus return and reduced-motion behavior. No new dependency or media.

## Footer alignment — 17 October 2026
Use three equal columns with consistent gaps above 760px. Keep the original mark vertically centred in its column and align agency/contact labels at the top. At 760px and below, centre the logo above two equal link columns and centre the policy row. Hide trailing contact arrows through 900px to preserve room for actual contact text; leading icons remain. Content and links unchanged.
