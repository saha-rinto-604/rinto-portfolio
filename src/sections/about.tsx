import { GraduationCap, BookOpen, Users } from 'lucide-react';
import { SectionLabel } from '@/components/ui';
import { profile } from '@/data/profile';

export function About() {
  return <section id="about" className="section about-section container" aria-labelledby="about-title">
    <div><SectionLabel number="01">About me</SectionLabel><h2 id="about-title">Learning, building,<br /><span className="muted-heading">and helping others.</span></h2></div>
    <div className="about-copy"><p>{profile.about}</p><p className="text-secondary">{profile.approach}</p></div>
    <div className="focus-row">
      <article><GraduationCap /><h3>CSE at UIU</h3><p>CGPA 3.94 / 4.00 · 2022–Present</p></article>
      <article><BookOpen /><h3>Teaching assistant</h3><p>Supporting programming and database labs.</p></article>
      <article><Users /><h3>IEEE WIE Treasurer</h3><p>Student events, budgeting, and teamwork.</p></article>
    </div>
  </section>;
}
