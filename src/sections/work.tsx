import { projects, type Project } from "@/data/projects";
import { ExternalLink, SectionLabel } from "@/components/ui";
import Image from "next/image";
import { asset } from "@/lib/site";
import { EvidencePreview } from "@/components/evidence-preview";
import { ResqherMapPreview } from "@/components/resqher-map-preview";
import { Github } from "@/sections/github";

function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === "resqher")
    return (
      <figure className="project-media">
        <ResqherMapPreview />
        <figcaption>
          <Image
            src={asset("/evidence/resqher-logo.webp")}
            alt="ResQher repository logo"
            width={40}
            height={40}
            loading="lazy"
          />
          <span>
            Original repository logo with an illustrative map interface. This is
            not a screenshot of the running application.
          </span>
        </figcaption>
      </figure>
    );
  if (project.slug === "shesafe")
    return (
      <figure className="project-media logo-evidence">
        <div className="logo-stage">
          <span className="eyebrow">Mobile safety & coordination</span>
          <Image
            src={asset("/evidence/shesafe-logo.webp")}
            alt="SheSafe logo from its application repository"
            width={240}
            height={240}
            loading="lazy"
          />
          <p>SheSafe</p>
          <span>SOS · Location context · Incident coordination</span>
        </div>
        <figcaption>
          Actual application logo from the repository. A verified runtime
          screenshot is not available.
        </figcaption>
      </figure>
    );
  const clinora = project.slug === "clinora";
  const caption = clinora
    ? "Actual public landing page, rendered locally from Clinora source. The workflow shown within that page is illustrative; no patient data or backend workflow is demonstrated."
    : "Actual FinVision dashboard rendered locally with repository sample data and a preview account. Figures are demo values, not measured outcomes; the authentication response was simulated.";
  return (
    <figure className="project-media screenshot-evidence">
      <div className="capture-label">
        <span>Actual frontend capture</span>
        <span>{clinora ? "Public interface" : "Sample data"}</span>
      </div>
      <EvidencePreview
        src={
          clinora
            ? "/evidence/clinora-public.webp"
            : "/evidence/finvision-dashboard.webp"
        }
        title={`${project.name} — ${clinora ? "public landing page" : "dashboard with sample data"}`}
        caption={caption}
        width={clinora ? 1280 : 1100}
        height={850}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function Work() {
  return (
    <section
      id="projects"
      className="section work-section container"
      aria-labelledby="work-title"
    >
      <span id="work" className="anchor-alias" aria-hidden="true" />
      <div className="section-heading">
        <div>
          <SectionLabel number="04">Selected projects</SectionLabel>
          <h2 id="work-title">What I’ve been building.</h2>
        </div>
        <p>
          Practical applications for safety, healthcare, and everyday finances.
        </p>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.slug}>
            <ProjectVisual project={project} />
            <div className="project-copy">
              <div className="project-meta">
                <span>{project.category}</span>
                <span className="status">{project.status}</span>
              </div>
              <h3>{project.headline}</h3>
              <p className="project-purpose">{project.problem}</p>
              <p>{project.description}</p>
              <p className="project-contribution">
                <strong>My contribution</strong> · {project.contribution}
              </p>
              <ul className="feature-list">
                {(project.features ?? project.nodes).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ul className="stack" aria-label={`${project.name} technologies`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ExternalLink href={project.repo} className="text-link">
                View Repository
              </ExternalLink>
              <details className="project-details">
                <summary>
                  Implementation & source <span aria-hidden="true">+</span>
                </summary>
                <p>{project.engineering}</p>
                <div>
                  {project.evidence.map((item) => (
                    <ExternalLink
                      key={item.path}
                      href={`${project.repo}/${item.path.split("/").at(-1)?.includes(".") ? "blob" : "tree"}/${project.branch ?? "main"}/${item.path}`}
                    >
                      {item.label}
                    </ExternalLink>
                  ))}
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
      <Github />
    </section>
  );
}
