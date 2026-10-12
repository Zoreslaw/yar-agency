# Vercel

## Import once
1. In Vercel, Add New → Project → import Zoreslaw/yar-agency.
2. Root directory: repository root (`.`). Framework: Vite. Node: 24.x.
3. Configuration is tracked in vercel.json: install `npm ci`, build `npm run check && npm run build`, output `dist`.
4. No environment variables or backend needed. Choose the destination account/team and deploy.

Production branch: main. After connecting Git, main pushes generate production builds and branches/PRs can generate preview deployments. Use previews for review before merging. GitHub Actions separately validates media/configuration and builds on main and pull requests.

Repository configuration is ready; an account-side Vercel project, domain, or Git integration is not created by these files.

## Before actual launch
- Confirm business copy and contact destination. Brief currently downloads locally.
- Confirm permissions for company photos/branding; retain stock/font provenance.
- Replace temporary font if licensed Gotham is supplied.
- Review desktop and mobile, dialogs, keyboard access, paused/reduced-motion states.
- Remove prototype label and noindex only after company approval; add actual social metadata/domain then.

No SPA rewrites are needed: the current site uses one page with hash anchors. Do not add rewrites that mask missing asset errors.

Official guides: https://vercel.com/docs/frameworks/frontend/vite and https://vercel.com/docs/git .
