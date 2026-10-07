import { SectionLabel } from '@/components/ui';
import { skills } from '@/data/skills';
import { profile } from '@/data/profile';

export function Skills() {
  return <section id="skills" className="section container" aria-labelledby="skills-title"><div className="section-heading"><div><SectionLabel number="04">The toolkit</SectionLabel><h2 id="skills-title">Tools follow<br /><span className="muted-heading">the problem.</span></h2></div><p>Technologies used across my public work.<br />No proficiency bars. Just practice.</p></div><div className="skills-list">{skills.map((group, i) => <div className="skill-row" key={group.label}><span className="skill-index">0{i + 1}</span><h3>{group.label}</h3><ul>{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
    <div className="principles"><p className="eyebrow">How I approach the work</p><div>{profile.principles.map(item => <article key={item.number}><span className="mono accent-text">/{item.number}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div>
  </section>;
}
