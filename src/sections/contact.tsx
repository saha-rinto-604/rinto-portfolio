import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionLabel, ExternalLink } from '@/components/ui';

export function Contact() {
  return <><section id="contact" className="section container contact-section" aria-labelledby="contact-title"><SectionLabel number="06">Start a conversation</SectionLabel><div className="contact-main"><h2 id="contact-title">Good systems start<br />with a <span className="accent-text">conversation.</span></h2><ArrowUpRight className="contact-arrow" size={90} strokeWidth={1} /></div><div className="contact-bottom"><p>Have a project, a research question,<br />or an interesting engineering problem?</p><div><ExternalLink href={profile.linkedin} className="button button-primary">Connect on LinkedIn</ExternalLink><ExternalLink href={profile.github} className="button button-secondary">Find me on GitHub</ExternalLink>{profile.email && <a className="text-link" href={`mailto:${profile.email}`}>Send an email <ArrowUpRight size={16} /></a>}</div></div></section>
  <footer className="container footer"><a className="wordmark" href="#home">rinto<span>.</span><span className="wordmark-code">/</span></a><p>© {new Date().getFullYear()} Rinto Saha<span>Software engineering · AI · Security</span></p><a href="#home" className="back-top">Back to top <ArrowUp size={15} /></a></footer></>;
}
