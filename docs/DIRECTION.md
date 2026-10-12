# YAR / revision 3

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
