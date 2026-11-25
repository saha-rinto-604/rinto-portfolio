# Rinto Saha — Researcher & Software Developer

A portrait-led, editorial portfolio for Rinto Saha: software projects, undergraduate research, teaching, leadership, and academic recognition. Built with the existing Next.js App Router, React, TypeScript, and self-hosted Manrope stack.

[Published URL](https://saha-rinto-604.github.io/rinto-portfolio/) — the redesign is local until explicitly approved for deployment.

## Run locally

Use Node.js 24 and npm:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000/rinto-portfolio/`.

```bash
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
npm run preview
```

The static production export is `out/`. Preview opens at `http://127.0.0.1:4173/rinto-portfolio/`. Tests cover eight widths (320–1440px), keyboard navigation, reduced motion, axe accessibility, metadata, links and content. Screenshots are written to ignored `test-results/`.

## Content editing

- `src/data/profile.ts`: biography, identity and public professional links.
- `src/data/research.ts`: six exact research titles, ordered entries, descriptions and statuses.
- `src/data/projects.ts`: source-backed project summaries, technology lists and repository evidence.
- `src/data/journey.ts`: teaching, leadership, education, awards and exact certificate URLs.
- `src/data/skills.ts`: grouped skills and languages.
- `src/app/globals.css`: navy/cyan design tokens, layouts and responsive styles.
- `src/sections/`: section components; `src/components/`: navigation and reusable primitives.

Project visuals combine actual local Clinora/FinVision frontend captures, source repository logos, and a clearly labeled interactive ResQher schematic. Demo data is explicitly identified; screenshots do not imply verified production operation. FinVision is credited to Team Anton. Clinora is an information and care-coordination platform, not a diagnostic system.

The hero uses the supplied real portrait in three optimized WebP sizes. View CV and Download CV serve `public/resume/Rinto_Saha_CV.pdf`, a privacy-redacted copy of the latest supplied three-page PDF. The legacy resume filename serves the same public copy. Raw originals remain outside the repository; `private-inputs/` is ignored. See [content and asset sources](docs/content-source-map.md). Do not add home address, personal phone number, or student ID to public content.

## GitHub Pages

`next.config.ts` preserves `output: 'export'`, `trailingSlash: true`, and the default `/rinto-portfolio` base path. Public assets use `src/lib/site.ts`; canonical, sitemap and social URLs include the project path. The project-level robots file is exported, though crawlers generally consult the host-root robots file.

After review and explicit deployment approval:

1. Review `git diff` and commit the local changes on a review branch.
2. Push that branch and open a pull request; the existing workflow runs verification without deploying PRs.
3. Ensure repository Settings → Pages → Source is **GitHub Actions**.
4. Merge to `main` only when ready to publish. The existing workflow validates, uploads `out/`, and deploys Pages.
5. Confirm the Pages action succeeds and inspect the deployed project URL and its assets.

Do not use a manual root-domain export or remove the base path. No backend or credentials are required. Optional build-time public URL settings remain documented in `.env.example`.

See [focused refinement evidence](docs/refinement-evidence.md), [localhost upgrade handoff](docs/localhost-upgrade.md) and [previous redesign handoff](docs/redesign-handoff.md) for audit evidence, discrepancies, checks, and file changes. Other documents describe prior portfolio revisions and may contain historical claims superseded by this redesign.
