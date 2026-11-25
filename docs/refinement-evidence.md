# Focused localhost visual refinement

25 November 2026. Continued from the uncommitted local portfolio; no deployed portfolio or remote portfolio snapshot used as the baseline. Pre-edit patch and source/docs backup: `/tmp/rinto-refinement-backup/`. Existing hero photograph, navy/cyan palette, typography, section navigation and CV files were preserved.

## Project evidence

| Project      | Visible evidence                              | Provenance and limits                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SheSafe      | Actual repository logo                        | `app/resqher-mobile/assets/images/SheSafe_logo.png`, source commit `f7b7d0d`. No suitable runtime screenshot was present. A local web-render attempt failed with bundle HTTP 500. Original logo used at the user's request; no invented interface.                                                                                                                                                                                                        |
| Clinora AI   | Actual locally rendered public landing page   | Frontend commit `5a9c69a`, Vite at localhost, screenshot at 1280×850. No authentication or patient data. The landing page's own workflow illustration is illustrative; caption explicitly distinguishes this from a clinical workflow demonstration.                                                                                                                                                                                                      |
| FinVision AI | Actual locally rendered dashboard             | Source commit `bfa1b36`, Expo web. Actual app with repository-provided sample financial data and a local preview account. Only the profile/auth response was simulated to allow rendering. No real account credentials or financial data. Caption labels demo figures; this does not validate backend or AI services.                                                                                                                                     |
| ResQher      | Repository logo and interactive schematic map | `public/assets/images/logo/logo.png`, source commit `15d212e`. Used the actual safety logo, not the unrelated Charitfix template logo also present in the repo. No PHP runtime or suitable product screenshot was available. User explicitly requested a map interface; the original portfolio map is labeled illustrative and contains no real coordinates or live locations. Markers explain source-backed location/availability/coordination features. |

Screenshots and logos are compressed WebP under `public/evidence/`. Clinora and SheSafe license notices are retained alongside assets. Public repository READMEs and relevant source paths were inspected earlier and reused; this pass inspected media, routes and actual frontend renders. Application dependencies were installed only in temporary source checkouts, not added to this portfolio.

## Research presentation

Preserved all six exact titles and order. Added an academic serif treatment within the existing typography direction, contribution labels, a data-derived status register and accessible native details for methods/focus. Methods come from the supplied descriptions, not invented results. The supporting link opens the existing public CV at its research section. No verified public paper/DOI or clearly matched research repository was found; no such link was fabricated.

## Certificate previews and corrected dates

Four supplied Drive files were downloaded and visually checked. Local WebP thumbnails and larger previews reside under `public/certificates/`. Student IDs on university certificates and registration identifiers on mathematics certificates were removed from preview pixels and metadata stripped. The redaction is labeled; award/name/date remain readable. Original Drive links remain byte-for-byte unchanged.

The user explicitly chose certificate dates after review: mathematics Champion **2016**, 1st Runner Up **2015**. Only those portfolio dates changed. The supplied PDF remains privacy-redacted but otherwise unchanged and still lists the older mathematics dates; it also retains the previously noted Clinora/FinVision technology discrepancies. Updating the underlying CV is a separate content correction, not silently performed here.

The new recognition layout emphasizes the two documented university awards, with separate pending and unlinked awards. Native dialog previews support Escape, close button, focus return, keyboard focus containment and touch scrolling. Original certificate links remain available if JavaScript is unavailable. Enlarged project screenshots use the same accessible component.

## Performance and preservation

No new portfolio dependency. Below-fold media uses lazy loading and explicit dimensions. Certificate cards use 700px thumbnails (about 37–88 KiB) rather than the full 1400px previews (151–346 KiB); full previews load when opened. Four project media assets total about 167 KiB. The existing hero portrait, CV files and URL handling remain unchanged. Map interaction uses local state only, without map APIs, geolocation, trackers or network calls.

Motion remains restrained; existing reduced-motion behavior applies. No opacity-gated content, autoplay media, fake counters, fabricated testimonials or deployment changes.

## Changed files for this pass

- `src/components/evidence-preview.tsx` (new)
- `src/components/resqher-map-preview.tsx` (new)
- `src/sections/work.tsx`
- `src/sections/research.tsx`
- `src/sections/achievements.tsx`
- `src/data/research.ts`
- `src/data/journey.ts`
- `src/app/globals.css`
- `tests/portfolio.spec.ts`
- `public/evidence/` (four WebP files and two license notices)
- `public/certificates/` (four redacted full previews and four thumbnails)
- `docs/refinement-evidence.md`, new refinement screenshots, and README/content-source-map notes

The preceding uncommitted changes remain intact. No commit, push, merge or deployment performed.

## QA and critical screenshot review

- ESLint, TypeScript, production static export and diff checks passed.
- All 13 Playwright tests passed across 320, 360, 375, 390, 430, 768, 1024 and 1440px. Coverage includes axe WCAG A/AA checks, real image loading, no overflow, preserved hero/CV behavior, no-JavaScript content visibility, map selection and modal focus/Escape behavior.
- Certificate and project preview dialogs were tested for keyboard operation and focus return. A final zoom-and-pan control was added after visual review found phone-width scans too small for detailed reading; its focused regression test was rerun after rebuilding.
- The local CV still responds with HTTP 200 and `application/pdf`; the browser download succeeds with the expected filename. Its content was not changed during this pass.
- Full-page screenshots: `docs/refinement-1440.png`, `docs/refinement-390.png`. Focused screenshots: `docs/refinement-{projects,research,achievements,certificate}-{1440,390}.png`.
- The first screenshot automation attempt selected a hidden desktop navigation link on mobile and captured intermediate smooth-scroll frames. It was corrected to capture stable section positions with reduced motion; these were screenshot-harness problems, not site failures. Final screenshots supersede those attempts.
- Critical review: academic titles have ample line spacing and preserve full wording; status and contribution labels remain distinct. Recognition now has readable award hierarchy with original evidence directly below. Captures preserve source appearance and plainly label sample data. Repository logos fill screenshot gaps without impersonating application screens. Mobile certificate inspection benefits from the added zoom/pan control.
- No full Lighthouse/field INP assessment is claimed. Performance work is limited to compressed media, separate lazy thumbnails/full previews, explicit image dimensions and no added framework dependency. Existing dependency advisories are unchanged.

Local run: `npm run preview` from `rinto-portfolio`, then open `http://127.0.0.1:4173/rinto-portfolio/`. An already-running local server on that port was reused; it was not replaced. No push or deployment occurred.

Final follow-up: the zoom/pan regression test passed after rebuilding. Standalone typecheck passed after the build finished (one overlapping typecheck encountered temporary missing Next-generated files while the build regenerated them; rerunning sequentially resolved it). Browser checks at 1440px and 390px confirmed **zero full-size certificate requests before interaction**. Additional final captures: `docs/refinement-resqher-{1440,390}.png` and `docs/refinement-certificate-zoom-390.png`. Temporary application capture servers were stopped; the pre-existing portfolio preview was left alone.
