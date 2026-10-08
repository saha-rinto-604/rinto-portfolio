import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { asset } from '@/lib/site';
import { ExternalLink } from '@/components/ui';

export function Hero() {
  return <section className="hero container" id="home" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow hero-eyebrow"><span className="accent-dot" /> CSE undergraduate · UIU</p>
      <h1 id="hero-title">Rinto<br /><span className="accent-text">Saha.</span></h1>
      <div className="hero-intro"><span className="intro-line" /><div><p className="name-label">SOFTWARE DEVELOPMENT · AI · SECURITY</p><p>{profile.introduction}</p></div></div>
      <div className="hero-actions"><a href="#projects" className="button button-primary">View Projects <ArrowUpRight size={18} /></a><a href={asset(profile.resume)} download className="button button-secondary">Download Resume <Download size={18} /></a></div>
      <div className="hero-social"><ExternalLink href={profile.github}><Github size={15} /> GitHub</ExternalLink><ExternalLink href={profile.linkedin}><Linkedin size={15} /> LinkedIn</ExternalLink><a href={`mailto:${profile.email}`}><Mail size={15} /> Email</a></div>
    </div>
    <div className="hero-art">
      <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
      <div className="portrait-frame"><Image src={asset(profile.portrait)} alt={profile.portraitAlt} width={460} height={460} priority sizes="(max-width: 700px) 90vw, 460px" /><span className="portrait-cross cross-tl" /><span className="portrait-cross cross-br" /></div>
      <span className="art-index" aria-hidden="true">RS — 01 / DHAKA, BANGLADESH</span>
      <div className="portrait-caption"><span className="accent-dot" /><div><strong>Student. Teaching assistant.</strong><span>United International University</span></div><ArrowUpRight size={21} /></div>
      <div className="art-note"><span>ON CAMPUS</span><p>IEEE UIU WIE<br />Treasurer · 2025–Present</p></div>
    </div>
    <div className="hero-bottom"><a href="#about"><ArrowDown size={14} /> More about me</a><span>{profile.location}</span><span className="mono">PORTFOLIO / 2026</span></div>
  </section>;
}
