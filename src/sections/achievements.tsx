import { Trophy } from 'lucide-react';
import { SectionLabel } from '@/components/ui';
import { achievements } from '@/data/journey';

export function Achievements() {
  return <section id="achievements" className="journey-band" aria-labelledby="achievements-title"><div className="section container">
    <div className="section-heading"><div><SectionLabel number="07">Achievements</SectionLabel><h2 id="achievements-title">A few proud moments.</h2></div><p>From school mathematics competitions<br />to university project shows.</p></div>
    <div className="award-grid">{achievements.map(item => <article className="award-card" key={`${item.title}-${item.date}`}>
      <div className="award-top"><Trophy size={21} strokeWidth={1.4} /><span>{item.date}</span></div><p className="award-result">{item.result}</p><h3>{item.title}</h3><p className="text-secondary">{item.event}</p>
    </article>)}</div>
  </div></section>;
}
