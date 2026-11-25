import { Trophy } from "lucide-react";
import { SectionLabel, ExternalLink } from "@/components/ui";
import { EvidencePreview } from "@/components/evidence-preview";
import { achievements } from "@/data/journey";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="journey-band recognition-section"
      aria-labelledby="achievements-title"
    >
      <div className="section container">
        <div className="section-heading">
          <div>
            <SectionLabel>Recognition</SectionLabel>
            <h2 id="achievements-title">
              Work worth
              <br />
              <span className="muted-heading">putting forward.</span>
            </h2>
          </div>
          <p>
            From mathematics competitions to university project shows. The
            achievements, with their supporting certificates.
          </p>
        </div>
        <div className="recognition-grid">
          {achievements.map((item, index) => (
            <article
              className={`recognition-item ${index < 2 ? "recognition-featured" : ""}`}
              key={`${item.title}-${item.date}`}
            >
              <div className="recognition-copy">
                <div className="award-top">
                  <span>{item.date || "UIU App Forum"}</span>
                  <Trophy size={20} strokeWidth={1.4} aria-hidden="true" />
                </div>
                <p className="award-result">{item.result}</p>
                <h3>{item.title}</h3>
                <p className="text-secondary">{item.event}</p>
                {item.certificate && (
                  <ExternalLink
                    href={item.certificate}
                    className="certificate-link"
                  >
                    Certificate
                    <span className="sr-only">
                      {" "}
                      for {item.title}, {item.date}
                    </span>
                  </ExternalLink>
                )}
                {item.pending && <p className="pending">Certificate pending</p>}
              </div>
              {item.preview && (
                <EvidencePreview
                  className="certificate-preview"
                  src={`/certificates/${item.preview}.webp`}
                  thumbnailSrc={`/certificates/${item.preview}-thumb.webp`}
                  title={`${item.result} — ${item.title}, ${item.date}`}
                  caption="Supplied certificate. Personal identifiers removed from this public preview; the Certificate link opens the original on Google Drive."
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
