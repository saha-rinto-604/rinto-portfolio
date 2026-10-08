import { ArrowRight, Activity, Radio, MapPin } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import { ExternalLink, SectionLabel } from '@/components/ui';
import { Github } from '@/sections/github';

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.slug === 'clinora' ? Activity : project.slug === 'shesafe' ? Radio : MapPin;
  return <div className={`project-visual visual-${project.slug}`} role="img" aria-label={`${project.name} workflow overview: ${project.nodes.join(', ')}. Conceptual diagram, not an application screenshot.`}>
    <div className="visual-top"><span>{project.category}</span><span>{project.number} /</span></div>
    <div className="system-center"><div className="system-ring ring-outer" /><div className="system-ring ring-inner" /><div className="system-icon"><Icon size={40} strokeWidth={1.3} /></div><span className="system-name">{project.name}</span></div>
    <div className="flow-nodes">{project.nodes.map((node, i) => <div key={node}><span className="flow-number">0{i + 1}</span><span>{node}</span>{i < project.nodes.length - 1 && <ArrowRight size={13} />}</div>)}</div>
    <span className="visual-footnote">SYSTEM OVERVIEW / CONCEPTUAL DIAGRAM</span>
  </div>;
}

export function Work() {
  return <section id="projects" className="section work-section container" aria-labelledby="work-title">
    <span id="work" className="anchor-alias" aria-hidden="true" />
    <div className="section-heading"><div><SectionLabel number="04">Selected projects</SectionLabel><h2 id="work-title">What I’ve been building.</h2></div><p>Healthcare, personal safety,<br />and the code behind each project.</p></div>
    <div className="projects">{projects.map(project => <article className="project" key={project.slug}>
      <ProjectVisual project={project} />
      <div className="project-copy"><div className="project-meta"><span>{project.number} / {project.name}</span><span className="status">{project.status}</span></div><h3>{project.headline}</h3><p>{project.description}</p><ul className="stack" aria-label={`${project.name} technologies`}>{project.stack.map(item => <li key={item}>{item}</li>)}</ul><ExternalLink href={project.repo} className="text-link">Explore repository</ExternalLink>
      <details className="project-details"><summary>Implementation & source <span aria-hidden="true">+</span></summary><p>{project.engineering}</p><div>{project.evidence.map(item => <ExternalLink key={item.path} href={`${project.repo}/${item.path.split('/').at(-1)?.includes('.') ? 'blob' : 'tree'}/main/${item.path}`}>{item.label}</ExternalLink>)}</div></details></div>
    </article>)}</div><Github />
  </section>;
}
