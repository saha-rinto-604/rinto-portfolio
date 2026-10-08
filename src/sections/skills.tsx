import { SectionLabel } from '@/components/ui';
import { skills } from '@/data/skills';

export function Skills() {
  return <section id="skills" className="section container skills-section" aria-labelledby="skills-title">
    <div className="section-heading"><div><SectionLabel number="02">Tech stack</SectionLabel><h2 id="skills-title">What I work with.</h2></div><p>From coursework, lab sessions,<br />and my web and mobile projects.</p></div>
    <div className="skills-list">{skills.map((group, i) => <div className="skill-row" key={group.label}><span className="skill-index">0{i + 1}</span><h3>{group.label}</h3><ul>{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
  </section>;
}
