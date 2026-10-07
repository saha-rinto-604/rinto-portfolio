import { Braces, BrainCircuit, ShieldCheck } from 'lucide-react';
import { SectionLabel } from '@/components/ui';
import { profile } from '@/data/profile';

export function About() {
  return <section id="about" className="section about-section container" aria-labelledby="about-title">
    <div><SectionLabel number="01">A little context</SectionLabel><h2 id="about-title">Beyond the interface.<br /><span className="muted-heading">Into the system.</span></h2></div>
    <div className="about-copy"><p>{profile.about}</p><p className="text-secondary">{profile.approach}</p><a href="#research" className="text-link">Explore my research interests <span aria-hidden="true">↗</span></a></div>
    <div className="focus-row">
      <article><Braces /><h3>Full-stack engineering</h3><p>Interfaces, APIs, and the data flows that connect them.</p></article>
      <article><BrainCircuit /><h3>Applied intelligence</h3><p>AI-assisted workflows grounded in structured evidence.</p></article>
      <article><ShieldCheck /><h3>Security-minded design</h3><p>Access boundaries, careful data handling, and trust.</p></article>
    </div>
  </section>;
}
