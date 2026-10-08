'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { navigation, profile } from '@/data/profile';
import { asset } from '@/lib/site';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); button.current?.focus(); }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return <header className="site-header">
    <div className="container nav-shell">
      <a className="wordmark" href="#home" aria-label="Rinto Saha, home">rinto<span>.</span><span className="wordmark-code">/</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="nav-contact" href={asset(profile.resume)} download>Resume <Download size={16} /></a>
      <button ref={button} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} /></a>)}</nav>
  </header>;
}
