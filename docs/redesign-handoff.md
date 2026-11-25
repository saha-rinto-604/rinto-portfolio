# Portfolio redesign — 25 November 2026

## Workspace and baseline

The supplied IDE workspace was `/home/rinto-uiu/scas-final-simulation`, containing research artifacts, not the portfolio. The existing public repository was cloned into its `rinto-portfolio/` subdirectory, preserving history. Baseline: `a730eaa` (`feat: personalize portfolio with CV experience education and resume`). No research artifacts were changed. No commit, push or deployment was performed.

The baseline uses Next.js 16, React 19, TypeScript, Tailwind, Lucide, a local Manrope font, static export, and a GitHub Actions Pages workflow. Existing legacy anchors `#work` and `#github` remain valid. The original assets remain recoverable from Git and have not been indiscriminately deleted.

## Audit and original design

The web-fetch tool could not open either live URL. Direct HTTP and subsequently Chromium succeeded for both the current portfolio and Nabil's live site. Desktop and mobile renders were inspected; scroll-triggered reference content was also exercised. User-provided reference screenshots supplemented this review.

Reference observations: dark/gold palette, monospaced navigation, portrait-led introduction, large project artwork, bordered project and research cards, and distinct full-width section bands. Its portrait, graphics, copy, achievements and source were not reused. The old Rinto page used graphite/orange, a portrait, three projects, research interests rather than actual experience, and outdated scholarship detail.

The new design uses deep navy (#0b1520), cool cyan (#7ce3db), light text and blue-gray secondary text. Self-hosted Manrope pairs with a restrained system-serif accent in the hero. Body text is 16px, regular labels at least 14px, large fluid headings, and generous responsive spacing. Original SVG concept diagrams distinguish responder networks, verified report information, finance analysis, and web coordination. They are explicitly labeled conceptual; no screenshot or numeric performance claim is fabricated.

Section map: Home → About → Research → Projects → Experience → Education → Skills → Achievements → Community → Contact. Navigation emphasizes research and projects; current-section indication, Escape handling, mobile close-on-navigation, focus visibility and reduced motion are implemented.

## Content and verification decisions

- Six exact research titles and statuses follow the supplied order. Where Trust Breaks is first and remains submitted/under review. No paper URLs, DOI, collaborator names or publication claims were invented.
- The About biography is 114 words. Teaching course names use the supplied laboratory names without trimester assignments.
- Latest supplied education data takes precedence: CGPA 3.94/4.00 and 12 consecutive merit-scholarship trimesters. The old waiver breakdown totaled 11; the new 12-trimester claim remains user-supplied and should be confirmed against records. Waiver percentages are absent from the page.
- Old resume PDF is not verified against the updated research/scholarship information, so no CV download is shown. The asset remains in the repository.
- All four specified project URLs and certificate URLs are preserved byte-for-byte. AOOP has non-clickable “Certificate pending.” No unverified demo links were added.
- IDP volunteering uses the supplied description without attendee statistics or an unverified certificate.
- Public contact contains only Dhaka, email and public professional links. No home address, student ID or phone is rendered.

## Project source audit

Public READMEs and relevant manifests/source were inspected in temporary checkouts. These are source reviews, not full execution of the applications.

- **SheSafe:** README, mobile and backend manifests, incident workflow source. React Native/Expo, Express and MySQL match the stated mobile prototype. Role checks, incident messaging, location context and responder coordination are described conservatively.
- **Clinora AI:** README, frontend package manifest, Java backend POM and report controller path. Current implementation is React/TypeScript + Spring Boot + PostgreSQL + Python/FastAPI services. The inherited mobile/Express/MySQL CV line is inconsistent and is not used. Non-diagnostic language remains explicit.
- **FinVision AI:** `master` branch README, Redux source and OCR endpoint configuration (`src/utils/constants.js`). OCR.space is implemented; Tesseract is not advertised. Team Anton attribution is explicit. README credits Rinto with motivation/problem framing and updated project planning; the page does not claim sole implementation. Finance state is local-first; OCR/AI requests require connectivity.
- **ResQher:** README, Composer manifest and Laravel routes confirm the separate Laravel web prototype, location workflows and role-based coordination. Existing template/demo images were not reused as product screenshots.

## External links

All four Drive certificate view URLs returned HTTP 200 anonymously with file titles and without login redirects on the audit date. This verifies that anonymous view pages were reachable, not the authenticity of certificate contents or future permissions. No sharing settings were changed. If a visitor encounters restricted access, set the affected file to “Anyone with the link / Viewer.”

The project repositories were fetched successfully; source evidence links were checked against checkout paths, including FinVision's `master` branch. LinkedIn and mailto targets retain user-supplied values; email delivery and LinkedIn anonymous access were not independently tested. No research publication links exist to check.

## Validation

Initial lint and TypeScript checks passed. The original Next.js 16.4.0 build generated the static export but exited with a dependency security advisory. Next.js and eslint-config-next were updated to 16.4.6 within the existing framework line. The first sandboxed build also failed to parse TypeScript subprocess output; production checks use the required subprocess permissions.

Initial browser run: eight tests passed, including axe WCAG A/AA checks, zero horizontal overflow at 320/360/390/768/1024/1440px, functioning anchors, mobile menu and Escape, keyboard details, reduced motion, canonical/social metadata and certificate actions. Final formatted source on Next.js 16.4.6: `npm run lint`, `npm run typecheck`, `npm run build`, `npm test`, and `git diff --check` all passed. All eight browser tests passed again (12.9 seconds). The static export includes the homepage, 404, robots and sitemap. Project source evidence paths exist, and a direct export check confirms private contact fields are absent. Desktop/mobile previews are saved in this directory.

Dependency audit after the Next patch reports nine remaining advisories (seven moderate, two high), including development tooling and sharp. No force upgrade was applied. The site is a static export with no image-optimization server, but dependency maintenance remains a separate follow-up.

## Deployment and rollback

The Pages workflow and base-path configuration are retained. Local run and future approval-gated deployment steps are in README.md. Keep the redesign on a review branch, review the diff, and use a pull request before merging to main. The baseline commit provides a rollback reference. Nothing has been published by this task.

## Exact changed and added files

- `README.md`
- `docs/portfolio-mobile.png`
- `docs/portfolio-preview.png`
- `docs/redesign-handoff.md`
- `package-lock.json`
- `package.json`
- `public/branding/favicon.svg`
- `public/branding/hero.svg`
- `public/branding/social-preview.png`
- `scripts/generate-assets.mjs`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/navigation.tsx`
- `src/components/ui.tsx`
- `src/data/journey.ts`
- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/data/research.ts`
- `src/data/skills.ts`
- `src/sections/achievements.tsx`
- `src/sections/activities.tsx`
- `src/sections/contact.tsx`
- `src/sections/hero.tsx`
- `src/sections/research.tsx`
- `src/sections/work.tsx`
- `tests/portfolio.spec.ts`
