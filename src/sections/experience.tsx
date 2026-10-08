import { SectionLabel } from '@/components/ui';
import { experience } from '@/data/journey';

export function Experience() {
  return <section id="experience" className="journey-band" aria-labelledby="experience-title"><div className="section container">
    <div className="section-heading"><div><SectionLabel number="03">Experience & leadership</SectionLabel><h2 id="experience-title">My work on campus.</h2></div></div>
    <div className="experience-list">{experience.map(item => <article className="journey-row" key={item.role}>
      <div className="journey-date"><span className="eyebrow">{item.kind}</span><p>{item.period}</p></div>
      <div className="journey-copy"><h3>{item.role}</h3><p className="organization">{item.organization}</p><p>{item.description}</p>{item.courses.length > 0 && <><h4 className="course-label">Labs I support</h4><ul className="course-list">{item.courses.map(course => <li key={course}>{course}</li>)}</ul></>}</div>
    </article>)}</div>
  </div></section>;
}
