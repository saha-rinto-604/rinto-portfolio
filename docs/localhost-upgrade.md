# Localhost-first portfolio upgrade

25 November 2026. This report supersedes the photo-free/CV-omitted decisions in the earlier redesign handoff.

## Starting point and preservation

Worked in `/home/rinto-uiu/scas-final-simulation/rinto-portfolio`, branch `main`, with the previous local redesign uncommitted. Recorded status/diff and preserved a binary patch, source/docs copy and localhost screenshot at `/tmp/rinto-local-upgrade-backup/`. Inspected the existing local source, README, static export and Pages workflow. The deployed portfolio and remote portfolio source were not visited or used for this upgrade. No reset, clean, restore, commit, push, merge, deployment or Pages setting change occurred.

## Visual changes

- Two-column hero balances large typography with the actual supplied portrait. Navy/cyan remains the signature palette, with a warm editorial accent. The asymmetric frame leaves the face and clothing clear; no invented face or photographic retouching.
- Mobile places the recognizable portrait near the beginning, with Projects, Research and real CV actions immediately after it. Navigation also provides View CV.
- Proof ribbon uses the CV's CGPA/scholarship and counts derived from the project/research data. TA and WIE roles appear in a separate concise line.
- Four project stories now alternate wide conceptual illustrations and descriptive content rather than repeating equal cards. Each identifies a problem, contribution, features, technologies and repository. Existing original SVG concepts are preserved, enlarged and honestly labeled.
- Projects lead into the six research entries, with the under-review paper visually emphasized. Research titles/order/statuses remain unchanged. Skills use a compact grouped grid; teaching course coverage is prose. Awards, certificate actions, community and contact remain intact.
- Motion is a short positional hero entrance plus restrained hover effects. No opacity-gated content, new animation dependency, continuous motion or runtime API dependency.

## Assets and CV privacy

- Real photo variants: `public/images/rinto-portrait-480.webp`, `rinto-portrait-800.webp`, `rinto-portrait-1200.webp` (approximately 22, 49 and 101 KiB).
- Public CV: `public/resume/Rinto_Saha_CV.pdf` (three pages, approximately 108 KiB). The legacy `Rinto_Saha_Resume.pdf` now contains the same safe copy.
- Originals: `/tmp/rinto-private-inputs/`, outside the repository/export. Added `private-inputs/` to `.gitignore` for future handoffs.
- True PDF redaction removed street address/phone lines; city and email were placed in the public header. Cleared metadata/embedded-file storage and saved with garbage collection. Checked text and decoded objects for private values. Visually inspected all three rendered pages. All 11 original unique link destinations remain; mailto works as a PDF link as well.
- Website links never point to the unredacted Drive CV.

See [content source map](content-source-map.md) for provenance and remaining CV/repository discrepancies.

## Actual checks

| Check                                                    | Result                                                                                     |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| ESLint                                                   | PASS                                                                                       |
| TypeScript                                               | PASS                                                                                       |
| Next.js 16.4.6 static production build                   | PASS: homepage, 404, robots, sitemap exported with `/rinto-portfolio` path                 |
| Playwright                                               | PASS: 12 tests, 26.5 seconds                                                               |
| Responsive layout                                        | PASS at 320, 360, 375, 390, 430, 768, 1024, 1440px; no horizontal overflow                 |
| Axe checks                                               | PASS for tested WCAG 2 A/AA, 2.1 AA and 2.2 AA rules; not a claim of exhaustive compliance |
| Keyboard, Escape menu, anchor navigation, reduced motion | PASS                                                                                       |
| No-JavaScript visibility                                 | PASS: portrait, four projects, six research entries and download action remain visible     |
| PDF response                                             | PASS: HTTP 200, `application/pdf`, `%PDF-` signature                                       |
| Download action                                          | PASS: browser downloaded `Rinto_Saha_CV.pdf` without error                                 |
| Public portrait assets, robots, sitemap URLs             | PASS: HTTP 200 under project base path                                                     |
| PDF privacy and original hyperlinks                      | PASS: private values absent; all original unique targets retained                          |
| `git diff --check`                                       | PASS                                                                                       |

The combined write/build command initially did not start because automatic permission review timed out. Edits were then applied within workspace permissions and the standalone production build succeeded. No review rejection remains unresolved.

## Screenshots and performance observations

- `docs/upgrade-1440.png`: desktop first screen, actual localhost.
- `docs/upgrade-390.png`: phone first screen, actual localhost.
- `test-results/portfolio-{width}.png`: full-page captures at all eight widths (ignored test outputs).
- `scripts/review-local.mjs`: rerunnable local screenshot and lightweight metric capture; requires the preview server and installed Playwright browser.
- `docs/local-performance.json`: one unthrottled local Chromium observation per viewport. Desktop LCP 288ms, phone LCP 716ms, observed CLS 0 for both. These are local observations, not Lighthouse scores, field guarantees or INP measurements. No Lighthouse/PageSpeed audit or physical-device performance test was run. Approximately 548–576 KB resource transfer in this local run, including framework scripts/fonts; phone selected the 480px image.

## Links and unresolved factual differences

All four repository links are unchanged and backed by the earlier project-source audit. Four exact certificate URLs remain mapped correctly; prior anonymous checks returned HTTP 200 without login redirects. No certificate sharing was changed. CV and portrait Drive files were successfully retrieved through the supplied links. Local PDF and all portrait variants have been verified through HTTP. LinkedIn anonymous visibility and email delivery remain untested.

The supplied PDF still lists an inherited mobile/Express/MySQL stack for Clinora and Tesseract.js for FinVision. The website uses source-backed Clinora React/Spring/PostgreSQL/FastAPI and FinVision OCR.space, and credits Team Anton. The PDF received privacy redaction only, not unrequested substantive editing. Its scholarship entry confirms the supplied 12 consecutive trimesters; independent university records were not requested or checked.

The nine remaining dependency advisories from the prior audit were not changed by this visual/asset upgrade. Dependency modernization remains a follow-up; the earlier Next.js patch is retained.

## Run and review

```bash
cd /home/rinto-uiu/scas-final-simulation/rinto-portfolio
npm run preview
```

Open `http://127.0.0.1:4173/rinto-portfolio/`. To edit live, use `npm run dev` and `http://localhost:3000/rinto-portfolio/`. To regenerate export: `npm run build`. Dependencies are already installed locally; use `npm ci` for a fresh checkout.

Ready for local review. Review the new public CV, portrait and screenshots before approving publication. Existing GitHub Actions deployment remains unchanged. Only after explicit approval: review/commit the diff, push a review branch, then merge to `main` to trigger Pages verification and deployment. No publication has occurred.

## Files changed in this local upgrade

- `.gitignore`, `README.md`
- `src/app/globals.css`, `src/app/page.tsx`
- `src/components/navigation.tsx`
- `src/data/profile.ts`, `src/data/projects.ts`
- `src/sections/hero.tsx`, `src/sections/work.tsx`, `src/sections/experience.tsx`
- `public/images/rinto-portrait-480.webp`, `public/images/rinto-portrait-800.webp`, `public/images/rinto-portrait-1200.webp`
- `public/resume/Rinto_Saha_CV.pdf`, `public/resume/Rinto_Saha_Resume.pdf`
- `tests/portfolio.spec.ts`, `scripts/review-local.mjs`
- `docs/content-source-map.md`, `docs/localhost-upgrade.md`, `docs/local-performance.json`
- `docs/upgrade-1440.png`, `docs/upgrade-390.png`

Other pre-existing uncommitted changes from the preceding redesign remain preserved; use `git status --short` for the full pending change set.
