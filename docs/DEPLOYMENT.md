# Deployment

## Vercel configuration

Repository: Zoreslaw/yar-agency. Root: `.`. Framework: Vite. Runtime: Node 24.x, npm 11. Install: `npm ci`. Build: `npm run check && npm run build`. Output: `dist`. Production branch: `main`.

The public domain currently redirects `https://yar-agcy.space/` to `https://www.yar-agcy.space/` (verified 17 October 2026). Canonical URLs, sharing metadata, structured data and sitemap use the www origin. If the primary domain changes, update those files and `package.json` together.

## Questionnaire

Vercel runs `api/questionnaire.js`. Set `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO` in the appropriate deployment environments, following `.env.example`. Never expose these through `VITE_` variables. Earlier setup and verification are recorded in HANDOFF.md; this revision does not change account settings or redeploy them.

Vite dev/preview serves only the frontend. API tests mock Resend. A real end-to-end check requires one controlled submission on the deployed site and confirmation of receipt; provider acceptance alone does not prove inbox delivery. Current throttle is per process, not a global request limit.

## Indexing and static files

Production HTML allows indexing. `scripts/finalize-build.mjs` applies noindex to main/privacy pages and disallows robots for non-production Vercel builds. The standalone preview and 404 page have noindex independently. Keep actual production indexability under review with response headers after deployment.

The favicon set and social card derive from the original supplied PNG via SVG viewport; regenerate with `npm run brand-assets`. Stable media/icon URLs revalidate by default. Only hashed `/assets/` files receive year-long immutable caching. Security headers cover MIME sniffing, framing, referrer disclosure and unused camera/microphone/geolocation permissions.

`public/404.html` is Vercel's static error page. No catch-all SPA rewrite is used: missing pages/assets must retain an actual 404 response.

## Release checks

1. Run `npm ci`, `npm run check`, `npm test`, `npm run build`.
2. Inspect desktop and 320px mobile, navigation, language selection, keyboard focus, questionnaire validation/error/success and reduced motion.
3. On the deployed domain, verify HTTPS and the www redirect; main, policy, icons, sharing image, robots and sitemap return the intended content/status; missing paths return 404; production has no `X-Robots-Tag: noindex`.
4. Make one controlled questionnaire submission and verify delivery to configured recipients.
5. Inspect the live sharing card and register/submit the sitemap in Google Search Console if not already done. Sharing services may cache older metadata.

Rollback uses Vercel's previous deployment or a Git revert. Repository configuration does not itself change Vercel account settings.
