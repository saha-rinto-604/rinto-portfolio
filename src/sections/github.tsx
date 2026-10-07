import { Github as GithubIcon, ArrowUpRight } from 'lucide-react';
import { SectionLabel, ExternalLink } from '@/components/ui';
import { academic } from '@/data/projects';
import { profile } from '@/data/profile';

export function Github() {
  return <section id="github" className="github-band" aria-labelledby="github-title"><div className="section container github-grid"><div><SectionLabel number="05">Learning in the open</SectionLabel><GithubIcon className="github-icon" size={38} strokeWidth={1.2} /><h2 id="github-title">The work<br />behind the work.</h2><p className="text-secondary">Alongside larger systems, my repositories document the foundations: algorithms, operating systems, and programming practice.</p><ExternalLink href={profile.github} className="text-link">Visit my GitHub</ExternalLink></div><div className="academic-list"><p className="eyebrow">Selected academic work</p>{academic.map(item => <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer"><div><span className="mono">{item.language} / COURSEWORK</span><h3>{item.name}</h3><p>{item.description}</p></div><ArrowUpRight size={22} /><span className="sr-only"> (opens in a new tab)</span></a>)}</div></div></section>;
}
