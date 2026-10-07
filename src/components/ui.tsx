import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <p className="eyebrow"><span>{number} /</span> {children}</p>;
}
export function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>;
}
