import { research } from "@/data/research";
import { profile } from "@/data/profile";
import { asset } from "@/lib/site";
import { SectionLabel, ExternalLink } from "@/components/ui";
export function Research() {
  return (
    <section
      id="research"
      className="research-section section container"
      aria-labelledby="research-title"
    >
      <div className="section-heading">
        <div>
          <SectionLabel>Research record</SectionLabel>
          <h2 id="research-title">
            Questions worth
            <br />
            <span className="muted-heading">working through.</span>
          </h2>
        </div>
        <div className="research-intro">
          <p>
            Security, sustainable computing, and applied machine learning.
            Contributions and methods, with the state of each investigation made
            explicit.
          </p>
          <ExternalLink
            href={`${asset(profile.resume)}#page=1`}
            className="text-link"
          >
            Research summary in CV
          </ExternalLink>
        </div>
      </div>
      <div className="research-register" aria-label="Research status overview">
        {["Under Review", "Ongoing", "Completed"].map((status) => (
          <span key={status}>
            <strong>
              {research.filter((item) => item.status === status).length}
            </strong>{" "}
            {status}
          </span>
        ))}
      </div>
      <div className="research-list">
        {research.map((item) => (
          <article key={item.title} className="research-entry">
            <div className="research-meta">
              <span
                className={`status status-${item.status.toLowerCase().replace(" ", "-")}`}
              >
                {item.status}
              </span>
              <p>{item.category}</p>
            </div>
            <div className="research-contribution">
              <h3>{item.title}</h3>
              <p className="research-context">{item.context}</p>
              <p className="contribution-label">Research contribution</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <details className="research-methods">
                <summary>Methods & focus</summary>
                <ul>
                  {item.methods.map((method) => (
                    <li key={method}>{method}</li>
                  ))}
                </ul>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
