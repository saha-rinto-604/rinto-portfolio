import { GraduationCap } from 'lucide-react';
import { SectionLabel } from '@/components/ui';
import { education } from '@/data/journey';

export function Education() {
  return <section id="education" className="section container" aria-labelledby="education-title">
    <div className="section-heading"><div><SectionLabel number="06">Education</SectionLabel><h2 id="education-title">My academic journey.</h2></div><GraduationCap className="accent-text" size={36} strokeWidth={1.3} /></div>
    {education.map(item => <article className="journey-row education-row" key={item.degree}>
      <div className="journey-date"><p>{item.period}</p></div><div className="journey-copy"><h3>{item.degree}</h3><p className="organization">{item.institution}</p><p className="academic-result">{item.result}</p>{item.detail && <p className="scholarship">{item.detail}</p>}</div>
    </article>)}
  </section>;
}
