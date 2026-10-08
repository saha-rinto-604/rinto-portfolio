import { ArrowUpRight } from 'lucide-react';
import { academic } from '@/data/projects';
import { profile } from '@/data/profile';
import { ExternalLink } from '@/components/ui';

export function Github() {
  return <div id="github" className="coursework" aria-labelledby="github-title">
    <div className="coursework-heading"><h3 id="github-title">Coursework & practice</h3><ExternalLink href={profile.github} className="text-link">All repositories</ExternalLink></div>
    <div className="academic-list">{academic.map(item => <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer"><div><span className="mono">{item.language}</span><h4>{item.name}</h4><p>{item.description}</p></div><ArrowUpRight size={20} /><span className="sr-only"> (opens in a new tab)</span></a>)}</div>
  </div>;
}
