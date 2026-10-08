# Personal portfolio content refresh

The existing portfolio was already a single Next.js page. The update changes its organization and content, preserving its dark backgrounds, orange accent (`#ff6a32`), Manrope font, buttons, portrait framing, geometric project covers, and GitHub Pages configuration. The reference at https://mezabur-rahman-rasel.netlify.app/ informed section ordering and concise academic presentation only.

## Content sources

- Supplied two-page CV: name, UIU degree and CGPA, merit scholarship record, prior education, teaching assistant experience, IEEE WIE treasurer role, skills, research interests, awards, and extracurricular activities.
- Public project code: Clinora AI, SheSafe, and ResQher architecture and implemented workflows. Existing source links remain available inside project disclosures.
- User-provided email and existing verified GitHub/LinkedIn links.

The CV lists mobile safety technologies under Clinora AI. The website instead uses its actual React, TypeScript, Spring Boot, PostgreSQL, and FastAPI stack. The downloadable supplied CV keeps its project text; only private contact details were changed. Lab course codes were omitted because the CV repeats one code across different courses. No new research publication, employment, project award association, or live demo claim was added.

## Structure and privacy

The page now follows introduction, about, skills, experience and leadership, projects (including compact coursework), research interests, education, achievements, activities, and contact. Navigation uses in-page anchors. Previous `#work` and `#github` links still resolve; there were no previous content routes requiring redirects.

The public resume is a sanitized copy of the supplied CV. The original file stays outside this repository. Its residential address and phone were removed from PDF content rather than covered with a visual overlay. Public contact uses Dhaka, Bangladesh and the authorized email. The site has no contact form or tracking service.

Content remains in `src/data/`; sections contain presentation logic. The framework, npm lockfile, dependencies, hosting, and domain were preserved. The local Clinora application and governing documents were not changed.
