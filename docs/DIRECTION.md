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
