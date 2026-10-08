import { SectionLabel } from '@/components/ui';

export function Activities() {
  return <section id="activities" className="section container activities-section" aria-labelledby="activities-title">
    <div><SectionLabel number="08">Activities</SectionLabel><h2 id="activities-title">Beyond the classroom.</h2></div>
    <div><h3>IEEE UIU Student Branch</h3><p className="text-secondary">I’m an active member of the student branch. I also take part in academic competitions and technical events, learning alongside other students and contributing to campus life.</p></div>
  </section>;
}
