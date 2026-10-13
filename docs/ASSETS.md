# Asset provenance

## Display font — 13 October 2026

Oswald Variable, Fontsource package @fontsource-variable/oswald 5.3.0: https://fontsource.org/fonts/oswald/about . Three unmodified WOFF2 subsets (Cyrillic, Latin, Latin-ext) in public/fonts, OFL copied from the package into public/licenses/Oswald-OFL.txt. CSS in src/display-font.css. Served locally, no remote font calls. No font package dependency added.

Research-only specimens: Oswald, Roboto Condensed and Unbounded variable TTFs from https://github.com/google/fonts (ofl/oswald, ofl/robotocondensed, ofl/unbounded), instantiated at weight 500 for an offline comparison. Retained only in /tmp/yar-font-study; the temporary web specimen was removed. Ukrainian ІЇЄҐіїєґ cmap coverage checked in all three. These are typography specimens, not website QA screenshots.

## Current rendered selection — 13 October 2026

The stage-preparation stock photo, backstage-rig stock photo, stock team reference and generated hardware are no longer rendered. They remain archived prototype assets with provenance below. The introduction uses original people/vocal photos as CSS-framed pinned prints. A small collaboration example uses vocal; team now uses a CSS dressing-room frame with text, without a portrait. Original YAR merch remains in the gallery. All seven originals remain reachable in the lightbox. No source or derivative image was edited. Photos belong to the wuha collaboration, without invented results or person identities.

## Photographic revision — 12 October 2026

The generated repeating truss and lamp from the earlier experiment are no longer rendered. Their files and provenance below are retained as prototype history.

New real stock photographs, used as atmosphere rather than YAR event documentation:

- Isabella Mendes, Pexels 8088425, [Dark Room with Scaffolding and Spotlight](https://www.pexels.com/photo/dark-room-with-scaffolding-and-spotlight-8088425/). Download: `https://images.pexels.com/photos/8088425/pexels-photo-8088425.jpeg?auto=compress&cs=tinysrgb&w=1600`. Local source: `source-assets/backstage-rig-8088425.jpg`. The photo shows working people, scaffolding and actual lights. It is now shown as a whole, naturally proportioned photograph in the team composition. The rejected fixed ribbon was removed. Caption links to the photographer/source and labels it stock.
- Dawn Lio, Pexels 2177813, [Stage With Lightings](https://www.pexels.com/photo/stage-with-lightings-2177813/). Download: `https://images.pexels.com/photos/2177813/pexels-photo-2177813.jpeg?auto=compress&cs=tinysrgb&w=1600`. Local source: `source-assets/stage-preparation-2177813.jpg`. Full photographic interlude between services and team, with visible atmospheric-stock/source caption. It depicts venue preparation, not a YAR production.

Both use the [Pexels licence](https://www.pexels.com/license/). Source downloads are retained unchanged and ignored by Git. `node scripts/optimize-backstage.mjs` generates `public/media/backstage-rig*.webp` and `stage-preparation*.webp` (1800/800 maximum widths, no enlargement). Only resizing and WebP encoding are baked in. Grayscale and framing are CSS. No source/user photos retouched; no new generated people or equipment.

Research-only images from Wikimedia and the other downloaded Pexels candidate were inspected, but are not published or referenced by the website. No media from design-reference sites was copied.

User-supplied originals: IMG_2811.JPG, IMG_2831.JPG, IMG_2835.JPG, IMG_2787.JPG, IMG_2798.JPG, IMG_2889.JPG, IMG_0802.JPG, IMG_0384.PNG. Original source files unchanged. Copies of photographs retained in source-assets, WebP derivatives at widths 800 and 1800 generated for serving (1.30 MB total, versus 28.07 MB originals). No retouching or synthetic changes; grayscale and framing are CSS treatments.

Logo: cream supplied transparent PNG; SVG viewBox crops empty canvas and alpha mask applies interface color while retaining the exact mark.

Mouth emblem and reference logo: downloaded from the existing user-linked mockup at https://yar-agcy.lovable.app/. Source URLs are documented in README. Brand ownership/asset credits to confirm before publication.

Background montage: previously downloaded Pexels videos 9005825 (Yan Krukau), 8513955 (Big Bag Films), 8197915 (RDNE Stock project). Existing edited 24s montage, monochrome, hard cuts, no audio. Pexels license: https://www.pexels.com/license/. Stock mood footage, not a claim of YAR's past work. No clips with rejected flashing lights.

Font licenses: Manrope and League Spartan distributed via Fontsource under SIL Open Font License. See node_modules/@fontsource-variable/manrope/LICENSE and node_modules/@fontsource-variable/league-spartan/LICENSE.

## Backstage prototype — 12 October 2026

Services and contact source: user-supplied `послуги YAR agency.pdf` (10 pages), read from Downloads without modifying it. Pages 2–7 define the six service directions; pages 1 and 10 provide `yars.agency@gmail.com` and `@yar_agcy`. Page 5 specifies promotion from the artist team's existing materials. Package prices on page 9 are deliberately omitted per the user's later instruction: scope and cost are agreed individually. The PDF is not copied into the public website.

Team reference: Polina Tankilevitch, Pexels photo 6939112, “Photo Of Women Sitting Back To Back At Each Other.” Source: https://www.pexels.com/photo/photo-of-women-sitting-back-to-back-at-each-other-6939112/ . Download: https://images.pexels.com/photos/6939112/pexels-photo-6939112.jpeg?auto=compress&cs=tinysrgb&w=1600 . Pexels license: https://www.pexels.com/license/ (allows use and modification; do not imply endorsement by pictured people). Served as `public/media/team-reference.webp` and `team-reference-800.webp`. Only resizing/WebP compression; grayscale and crop are CSS. The image is explicitly marked as a reference showing models, not Sofia and Vika. User supplied their names and team size, and requested a temporary photo of two unrelated women. It must be replaced before public launch.

Stage hardware: generated with the built-in imagegen tool on 12 October 2026, not a manufacturer product photograph. Generic unbranded industrial render; no third-party stock license claimed. Master retained at `/Users/xxx/.codex/generated_images/01a13151-9ba6-7ef2-83dd-da3d05487e32/exec-2127b66f-c2a4-407d-ad97-567cb7a8ebe5.png`. Served assets: `public/media/stage-truss.webp` (transparent repeating metal segment), `public/media/stage-spotlight.webp` (separate transparent fixture). Alpha channel preserved. Truss crop is stacked with its vertical reflection so both tile boundaries share identical pixels; the background repeats vertically. Fixture is cropped separately, so the repeat contains no lamps. Master prompt below. Generated asset ownership/use follows applicable OpenAI terms; this is a prototype asset, not a certification or claim about YAR's equipment.

Hardware anatomy references only (no downloaded manufacturer imagery): Global Truss F34 straight segments https://www.globaltruss.com/trussing/f34-square-truss/straight-segments-2 and ETC Source Four https://www.etcconnect.com/Products/Entertainment-Fixtures/Source-Four/ . These informed tubes, diagonal braces, yoke, clamp and lens housing.

Technical references: MDN Intersection Observer https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API and reduced motion https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion . Section observation changes opacity only; no scroll-driven continuous animation.

### Hardware generation prompt

Use case: product-mockup. Asset type: transparent photorealistic website stage hardware cutout. Create one portrait-oriented image containing TWO SEPARATE isolated objects, with generous transparent gap between them. Left third: an upright silver aluminium square stage truss, orthographic almost front view with the right side slightly visible, four realistic 50mm cylindrical main chords and repeating welded diagonal braces, brushed metal, small scratches, subtle cool studio highlights. Truss extends to the exact top and bottom image edges without feet, end plates, caps or connectors so it can repeat vertically; uniform width and uniform lighting all the way down; four identical X brace bays. Right two thirds, centered vertically: ONE separate unbranded black theatrical profile spotlight, detailed photoreal product photograph, metal cylindrical lens barrel points diagonally DOWN LEFT toward viewer's left, U-shaped mounting yoke and silver clamp at upper right, dark glass lens on lower left, matte worn black ribs and screws, realistic photographic silver highlights, power cable small loop. No light emitted, no beams. Both objects entirely separate, never touching. True transparent alpha background, no ground, no backdrop, no text, no logos, no watermark, no people. High fidelity industrial product photograph, not drawing, no stylization. Objects designed to be individually cropped for HTML overlay assets.

## Team mirror update — 13 October 2026

User explicitly approved reusing team-reference.webp and team-reference-800.webp temporarily inside the photographic mirror. Existing Pexels source and derivatives are unchanged; caption and alt identify this as a reference with models, not Sofia and Vika. Replace with a real team photo before final launch.

Preview styling follow-up: wuha example photo receives CSS grayscale/sepia/contrast treatment only. No raster derivative or original changed; all gallery photos retain original colours. Existing team reference is framed at 6:5 with CSS object-position 50% 72%.

Questionnaire dependency: react-hook-form 7.90.0 (MIT), https://github.com/react-hook-form/react-hook-form . Unmodified license copied to public/licenses/react-hook-form-MIT.txt. No new photographs or generated media.
