# AGENTS

## Repo shape (what matters)
- Single Astro app (not a monorepo); main page route is `src/pages/[lang]/index.astro` with static paths for `es` and `en` only.
- Root `/` is redirected to `/es/` in `vercel.json`; language routing behavior is part of runtime behavior, not just docs.
- Content shown on the page comes from `src/data/resume-es.json` and `src/data/resume-en.json` via `src/lib/page.ts`.

## Commands you will actually use
- `npm run dev` starts Astro dev server on `localhost:4321`.
- `npm run build` creates production output.
- `npm run preview` serves the built site locally.
- `npm run generate:pdfs` builds, serves `dist/client` on port `4322`, generates `public/pdfs/cv-es.pdf` and `public/pdfs/cv-en.pdf`, then deletes `dist/client` and `.vercel`.

## Verification shortcuts
- There is no configured lint/test/typecheck script in `package.json`; do not invent `npm test`/`npm run lint` workflows.
- For most UI/content edits, verify with `npm run dev`; for deploy safety, verify with `npm run build`.

## Contact form + API constraints
- Contact endpoint is `src/pages/api/contact.ts` and is server-rendered (`export const prerender = false`); changes here affect serverless behavior on Vercel.
- Required env vars: `RESEND_API_KEY`, `CONTACT_EMAIL_TO`; optional `RESEND_EMAIL_FROM` (defaults to `onboarding@resend.dev`). See `.env.example`.
- Field limits are centralized in `src/lib/contact.ts` and shared by frontend + backend; keep both sides aligned by editing that file, not duplicating constants.

## Conventions that are easy to miss
- Use `@/*` imports for `src/*` (configured in both `tsconfig.json` and `astro.config.mjs`).
- Tailwind 4 is wired through Vite plugin in `astro.config.mjs`; there is no standalone Tailwind config file in this repo.
