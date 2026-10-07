# Portfolio design analysis

## Reference structure

The reference moves from a compact navigation bar into an oversized left-aligned headline and dominant portrait. The hero establishes identity before the page adds biography, capabilities, technologies, selected work, evidence, and contact. Thin separators and consistent side margins make a dense page readable. Orange is most effective on the headline, actions, and small technical accents; the graphite surfaces carry the rest.

## Rinto's interpretation

1. **Identity:** a typographic `rinto./` wordmark, Manrope, near-black background, warm orange, and restrained monospace labels.
2. **Hero:** an engineering-focused headline paired with the real public GitHub portrait. CSS treatment preserves the face and original image. Framed geometry provides depth without inventing a portrait or a terminal session.
3. **Context:** a short biography followed by three areas of work. These describe current interests and code, not professional tenure.
4. **Work:** large alternating project stories. Clinora and SheSafe lead; ResQher is explicitly an earlier web prototype. Expandable notes expose technical decisions and evidence links.
5. **Research:** supply-chain security and evidence-grounded AI framed as interests. PackagePolice is excluded because no public source was verified.
6. **Skills and principles:** technologies supported by repository manifests, followed by engineering values. No proficiency percentages or invented achievements.
7. **GitHub and contact:** academic work has its own quieter section. Verified GitHub and LinkedIn links replace a nonfunctional contact form.

The reference's client counts, testimonials, years of experience, freelance status, and CV button are omitted because corresponding facts or public assets were not supplied.

## Visual system

Background `#08090B`; band `#0D0F12`; surface `#111318`; primary text `#F5F5F5`; secondary text `#A6A8AD`; orange `#FF6A32`. Orange buttons use dark text for contrast. Borders are low-opacity white; rounded corners are small and consistent. One self-hosted variable font reduces network requests. Motion is limited to an entrance and hover states, disabled under reduced motion.

Desktop uses a centered 1200px content area. Mobile reorders the hero, stacks project stories, exposes an accessible navigation disclosure, and preserves touch targets. Automated checks cover 375, 430, 768, 1024, and 1440 pixels.
