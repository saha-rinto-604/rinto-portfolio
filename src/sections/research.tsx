import { SectionLabel } from '@/components/ui';
import { profile } from '@/data/profile';

export function Research() {
  return <section id="research" className="research-band" aria-labelledby="research-title"><div className="container section research-compact">
    <div><SectionLabel number="05">Research interests</SectionLabel><h2 id="research-title">What I want<br /><span className="muted-heading">to explore next.</span></h2></div>
    <div><p className="text-secondary">I’m interested in how software, data, and connected devices can address practical problems. These are areas I’d like to study further through coursework, projects, and research.</p><ul className="interest-list">{profile.interests.map((interest, i) => <li key={interest}><span className="mono accent-text">0{i + 1}</span>{interest}</li>)}</ul></div>
  </div></section>;
}
