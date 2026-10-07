import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui';
import { profile } from '@/data/profile';

export function Research() {
  return <section id="research" className="research-band" aria-labelledby="research-title"><div className="container section research-grid">
    <div className="research-intro"><SectionLabel number="03">Research interests</SectionLabel><h2 id="research-title">Ask better<br />questions<span className="accent-text">.</span></h2><p className="text-secondary">Explorations in intelligent software and the boundaries of trust.</p><div className="research-mark" aria-hidden="true"><span /><span /><span /><span /><span /><span /><i>?</i></div><p className="research-note">Current interests and directions.<br />No publication or benchmark claims.</p></div>
    <div className="research-topics">{profile.interests.map(interest => <article key={interest.number}><div className="research-number"><span>{interest.number} / INQUIRY</span><ArrowUpRight size={23} /></div><h3>{interest.title}</h3><p>{interest.body}</p><div className="research-tags">{interest.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
  </div></section>;
}
