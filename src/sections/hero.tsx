import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/profile';
import { asset } from '@/lib/site';
import { ExternalLink } from '@/components/ui';

export function Hero() {
  return <section className="hero container" id="home" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow hero-eyebrow"><span className="accent-dot" /> Software engineering · AI · Security</p>
      <h1 id="hero-title">I build<br /><span className="accent-text">intelligent</span><br />systems<span className="accent-text">.</span></h1>
      <div className="hero-intro"><span className="intro-line" /><div><p className="name-label">RINTO SAHA</p><p>{profile.introduction}</p></div></div>
      <div className="hero-actions"><a href="#work" className="button button-primary">Explore my work <ArrowUpRight size={18} /></a><ExternalLink href={profile.github} className="button button-secondary"><Github size={18} /> View GitHub</ExternalLink></div>
      <div className="hero-social"><ExternalLink href={profile.linkedin}><Linkedin size={15} /> LinkedIn</ExternalLink><span>Built with intent. Open to exploration.</span></div>
    </div>
    <div className="hero-art">
      <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
      <div className="portrait-frame"><Image src={asset(profile.portrait)} alt={profile.portraitAlt} width={460} height={460} priority sizes="(max-width: 700px) 90vw, 460px" /><span className="portrait-cross cross-tl" /><span className="portrait-cross cross-br" /></div>
      <span className="art-index" aria-hidden="true">RS — 01 / ENGINEERING</span>
      <div className="portrait-caption"><span className="accent-dot" /><div><strong>Curiosity into systems.</strong><span>Software · Intelligence · Trust</span></div><ArrowUpRight size={21} /></div>
      <div className="art-note"><span>THE QUESTION BEHIND THE CODE</span><p>How can we make<br />software more trustworthy?</p></div>
    </div>
    <div className="hero-bottom"><a href="#about"><ArrowDown size={14} /> A little further down</a><span>Selected work & ongoing explorations</span><span className="mono">PORTFOLIO / 2026</span></div>
  </section>;
}
