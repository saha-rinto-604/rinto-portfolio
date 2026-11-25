import type { ReactNode } from "react";
export function SectionLabel({
  children,
}: {
  number?: string;
  children: ReactNode;
}) {
  return <p className="eyebrow">{children}</p>;
}
export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
