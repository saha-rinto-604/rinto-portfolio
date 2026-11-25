# Local upgrade content and asset sources

Updated 25 November 2026. This upgrade starts from the existing uncommitted local portfolio on `main`, not the deployed page or a remote portfolio snapshot. A pre-upgrade patch, source/docs backup and localhost screenshot are held outside the repository at `/tmp/rinto-local-upgrade-backup/`. No existing work was reset or discarded.

## Supplied assets

- CV: user-supplied Drive PDF, metadata name `Rinto_CV (3).pdf`, three pages. Downloaded and reviewed locally. The original is outside the repository at `/tmp/rinto-private-inputs/Rinto_CV_latest.pdf` and is never exported.
- Public CV: `public/resume/Rinto_Saha_CV.pdf`. Actual PDF redaction removes residential address and personal phone content. The contact area now shows only Dhaka and professional email. Original page layout, research, experience, and certificate/repository links are retained. All pages rendered for visual review; text extraction and decoded PDF objects checked for removed values. Metadata and embedded-file storage were cleared. Existing `Rinto_Saha_Resume.pdf` now serves the same redacted latest copy for legacy links.
- Portrait: user-supplied Drive file ID `1eX_PqjeaX367C4THCDbqukbCEdNyx2Up`, metadata name `20261005_095952.jpg.jpeg`. Original JPEG is outside the repository at `/tmp/rinto-private-inputs/rinto-portrait-original.jpg`. Visually inspected: Rinto outdoors in a dark suit with a light shirt. It is a different supplied image from the older red-tie portrait.
- Public portrait: `public/images/rinto-portrait-{480,800,1200}.webp`. EXIF orientation corrected, headroom reduced with a simple crop, resized, compressed, metadata stripped. No face generation, identity editing, facial retouching, or clothing alteration. Sizes approximately 22/49/101 KiB.
- The raw files remain temporary private inputs. `.gitignore` excludes `private-inputs/` as a safeguard for future asset handoffs.

## Content provenance

| Content                                                        | Source and decision                                                                                                                                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity, education, CGPA, scholarship, roles, courses, awards | Latest supplied PDF plus user's explicit master prompt. The PDF confirms 12 consecutive scholarship trimesters. No waiver levels shown.                                                |
| Six research entries                                           | User's exact titles and order, corroborated by the latest PDF. No publication status or measured result inferred.                                                                      |
| SheSafe                                                        | Supplied contribution description; public README, mobile/backend manifests, incident workflow source from the project audit. Mobile prototype, not certified emergency infrastructure. |
| Clinora AI                                                     | Public README, frontend manifest, backend POM/report controller and service documentation. React/TypeScript, Spring Boot, PostgreSQL, FastAPI. Non-diagnostic boundary explicit.       |
| FinVision AI                                                   | Team-Anton repository on `master`; README, Redux source and OCR endpoint. Team credit explicit; personal contribution conservatively follows README attribution.                       |
| ResQher                                                        | README, Laravel routes, Composer manifest. Separate earlier web prototype. Template/demo images were not promoted as actual product evidence.                                          |
| Project illustrations                                          | Original SVG conceptual diagrams already created for this portfolio and retained/enlarged. They are visibly labeled conceptual and contain no measured results.                        |
| Proof ribbon                                                   | CGPA and scholarship from latest CV; project and research counts computed from portfolio content modules. TA and WIE roles from CV.                                                    |
| Certificate links                                              | Exact four user-supplied URLs retained. Prior anonymous requests returned HTTP 200 without sign-in redirects. No sharing changes. AOOP remains pending and non-clickable.              |

Project source checkouts from the earlier audit remain in `/tmp/portfolio-audit-*`. No outdated remote portfolio source was used for this upgrade. The supplied Nabil screenshots are inspiration only; none of his images, components or claims were copied.

## Discrepancies and limits

The latest PDF itself still lists Clinora's inherited React Native/Express/MySQL stack and FinVision's Tesseract.js line. Website descriptions retain the source-verified Clinora stack and OCR.space for FinVision. The PDF is the user's document with privacy redaction only; those technical statements have not been silently rewritten. The FinVision README credits Rinto with problem framing and updated planning, whereas the CV describes implementation contributions; the website avoids an exclusive or sole-author claim.

Certificate authenticity and future Drive permissions are not independently certified. LinkedIn visibility and mail delivery are not tested. The original external CV URL is not linked publicly because it contains private contact details; site CV links point only to the redacted local PDF.

## Subsequent visual refinement

See [refinement evidence](refinement-evidence.md) for actual frontend captures, repository logos, privacy-safe certificate previews and the user-approved mathematics date correction to 2016/2015. Earlier conceptual-only media decisions are superseded. The supplied CV remains unchanged apart from its prior privacy redaction.
