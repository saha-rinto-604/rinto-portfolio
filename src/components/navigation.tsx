"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { asset } from "@/lib/site";
import { navigation, profile } from "@/data/profile";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="wordmark" href="#home" aria-label="Rinto Saha, home">
          rinto<span>.</span>
          <span className="wordmark-code">/</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a
              key={href}
              href={href}
              aria-current={active === href ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className="nav-contact"
          href={asset(profile.resume)}
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <button
          ref={button}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map(([label, href]) => (
          <a
            key={href}
            href={href}
            aria-current={active === href ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
