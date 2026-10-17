# YAR Agency

Music agency website: events in Poland, individual tasks and ongoing artist collaboration. React 19, Vite, local fonts, Ukrainian/Polish/English interface and a cooperation questionnaire delivered by email through a Vercel function and Resend.

## Development

Node 24 and npm 11; use the committed `package-lock.json`.

```sh
nvm use
npm ci
npm run dev
```

Vite serves the frontend. It does not run `/api/questionnaire`; use the Vercel development environment or a deployment to exercise the server integration. Server configuration is documented in [.env.example](.env.example). Keep actual values outside Git.

## Validation and build

```sh
npm run check
npm test
npm run build
npm run preview
```

`npm test` exercises server validation and email delivery behavior with a mocked provider; it sends no real emails. `npm run check` validates required assets, metadata and package/lock consistency. GitHub Actions runs these checks and builds branches and pull requests.

`npm run standalone` creates `dist/preview.html` after a build. Keep the `media`, `assets`, `fonts` and `icons` folders alongside it. This is a local review file; email submission requires the deployed API. Lazy-loaded components still require a browser that permits module loading from the preview's location.

## Publication

Canonical site: [www.yar-agcy.space](https://www.yar-agcy.space/). Vercel builds from the repository root; `main` is the production branch. See [deployment instructions](docs/DEPLOYMENT.md) for required server variables, indexing and release checks.

The HTML includes canonical, Open Graph, sharing image, Organization data and browser/mobile icons. `public/robots.txt` and `public/sitemap.xml` describe the public pages. Branch builds with a non-production `VERCEL_ENV` receive `noindex,nofollow`; production pages are indexable. The local standalone preview and error page remain excluded from indexing.

`npm run brand-assets` regenerates browser/mobile icons and the sharing image from the original supplied mark. Source photographs stay unchanged; see [asset provenance](docs/ASSETS.md). Responsive derivatives in `public/media` are required for clean builds.

## Project structure

- `src/main.jsx`: page composition and navigation.
- `src/CooperationForm.jsx`, `src/CooperationModal.jsx`: cooperation questionnaire.
- `src/i18n.jsx`, `src/locales/messages.json`: language selection and interface translations.
- `api/questionnaire.js`, `server/questionnaire-email.js`: server validation and email delivery.
- `public/privacy.html`: privacy policy.
- `docs/DIRECTION.md`, `docs/HANDOFF.md`, `docs/ASSETS.md`: design intent, current state and provenance.

Code is covered by the repository MIT license. Company artwork, photographs, footage and fonts retain their respective rights and licenses; font and dependency notices are in `public/licenses`.
