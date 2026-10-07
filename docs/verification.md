# Portfolio verification

Date: 2026-10-07. Local checks used Node.js 24.11.0 on Windows. GitHub Actions repeats the production checks on Ubuntu before deployment.

| Check | Result |
| --- | --- |
| ESLint | Passed without warnings |
| TypeScript `tsc --noEmit` | Passed |
| Next.js production static export | Passed; index, 404, robots, and sitemap generated |
| Browser tests | Six passed |
| Responsive widths | 375, 430, 768, 1024, 1440px |
| Horizontal overflow | None at tested widths |
| Images and in-page anchors | All tested images loaded; every internal anchor resolved |
| Console and runtime | No errors in the tested local page sessions |
| Automated accessibility | No axe WCAG 2 A/AA or WCAG 2.1 AA violations at tested widths |
| Mobile navigation | Opens, closes on selection, Escape closes and restores focus |
| Keyboard | Skip link reachable first; project disclosure opens with Enter |
| Reduced motion | Smooth scrolling and animations disabled |
| Metadata | Canonical and social image use the repository Pages prefix |
| Production dependency audit | npm reported zero vulnerabilities at audit time |
| Repository documentation | 29 new/changed local Markdown links checked; no broken targets or conflict markers |

Visual inspection covered desktop and mobile captures, including hero proportions, real portrait treatment, project diagrams, section rhythm, contact actions, and footer. `docs/portfolio-preview.png` is a real browser capture of this site.

These checks are scoped to the portfolio. The featured healthcare and safety applications were source-reviewed, not run against external services or certified for clinical/emergency use. Automated accessibility checks do not replace testing with assistive-technology users. No Lighthouse score is claimed.

The Pages workflow runs the same lint, types, build, and browser checks. The deployment status is recorded in the repository's Actions and Pages environment.
