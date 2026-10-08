import { ArrowUpRight, ArrowUp, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionLabel, ExternalLink } from '@/components/ui';

export function Contact() {
  return <section id="contact" className="section container contact-section" aria-labelledby="contact-title">
    <SectionLabel number="09">Contact</SectionLabel><div className="contact-main"><h2 id="contact-title">Let’s <span className="accent-text">get in touch.</span></h2><ArrowUpRight className="contact-arrow" size={80} strokeWidth={1} /></div>
    <div className="contact-bottom"><div className="contact-intro"><p>For a project, a research opportunity,<br />or a conversation about software.</p><p>{profile.location}</p></div><div className="contact-links"><a className="button button-primary email-link" href={`mailto:${profile.email}`}><Mail size={17} />{profile.email}</a><ExternalLink href={profile.linkedin} className="text-link">LinkedIn</ExternalLink><ExternalLink href={profile.github} className="text-link">GitHub</ExternalLink></div></div>
  </section>;
}
export function Footer() {
  return <footer className="container footer"><a className="wordmark" href="#home">rinto<span>.</span><span className="wordmark-code">/</span></a><p>© {new Date().getFullYear()} Rinto Saha<span>CSE undergraduate · UIU</span></p><a href="#home" className="back-top">Back to top <ArrowUp size={15} /></a></footer>;
}
