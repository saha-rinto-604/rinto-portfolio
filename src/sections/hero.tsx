import Image from "next/image";
import { Download, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { research } from "@/data/research";
import { ExternalLink } from "@/components/ui";
import { asset } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span>Software engineering · Security research · Applied AI</span>
        <span>{profile.location}</span>
      </div>
      <div className="hero-layout">
        <div className="hero-introduction">
          <p className="eyebrow">CSE undergraduate. Builder. Researcher.</p>
          <h1 id="hero-title">
            Rinto <span>Saha.</span>
          </h1>
          <p className="hero-statement">
            Practical software.
            <br />
            <em>Thoughtful research.</em>
          </p>
          <p className="hero-description">
            I build full-stack and mobile applications, investigate software
            security, and help students turn ideas into working code at UIU.
          </p>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-mat">
            <picture>
              <source
                type="image/webp"
                srcSet={`${asset("/images/rinto-portrait-480.webp")} 480w, ${asset("/images/rinto-portrait-800.webp")} 800w, ${asset("/images/rinto-portrait-1200.webp")} 1200w`}
                sizes="(max-width: 600px) calc(100vw - 36px), (max-width: 850px) 46vw, 520px"
              />
              <Image
                src={asset(profile.portrait)}
                alt={profile.portraitAlt}
                width={800}
                height={1000}
                loading="eager"
                fetchPriority="high"
                className="portrait-image"
              />
            </picture>
          </div>
          <figcaption>
            <span>Learning. Building. Giving back.</span>
            <span>United International University</span>
          </figcaption>
        </figure>
        <div className="hero-actions">
          <div className="primary-actions">
            <a href="#projects" className="button button-primary">
              Explore My Work
            </a>
            <a href="#research" className="button button-secondary">
              Research
            </a>
          </div>
          <div className="cv-actions">
            <ExternalLink href={asset(profile.resume)} className="text-link">
              <FileText size={17} aria-hidden="true" />
              View CV
            </ExternalLink>
            <a
              href={asset(profile.resume)}
              download="Rinto_Saha_CV.pdf"
              className="text-link"
            >
              <Download size={17} aria-hidden="true" />
              Download CV
            </a>
            <span className="cv-format">PDF · 3 pages</span>
          </div>
        </div>
        <div className="hero-social">
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <div
        className="proof-ribbon"
        aria-label="Academic record and portfolio overview"
      >
        <div>
          <strong>
            3.94<span>/4.00</span>
          </strong>
          <p>CGPA · CSE at UIU</p>
        </div>
        <div>
          <strong>12</strong>
          <p>
            Consecutive merit
            <br />
            scholarship trimesters
          </p>
        </div>
        <div>
          <strong>{projects.length.toString().padStart(2, "0")}</strong>
          <p>
            Featured software
            <br />
            projects
          </p>
        </div>
        <div>
          <strong>{research.length.toString().padStart(2, "0")}</strong>
          <p>
            Research entries
            <br />
            with stated progress
          </p>
        </div>
      </div>
      <div className="role-ribbon">
        <span>
          Undergraduate Teaching Assistant <b>·</b> UIU
        </span>
        <span>
          Treasurer <b>·</b> IEEE UIU WIE
        </span>
      </div>
    </section>
  );
}
