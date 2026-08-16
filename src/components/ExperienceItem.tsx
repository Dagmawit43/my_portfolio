import type { ExperienceEntry } from "../data/experience";
import ExperienceTechnology from "./ExperienceTechnology";

function formatIndex(index: number) {
  return String(index).padStart(2, "0");
}

export default function ExperienceItem({
  experience,
}: {
  experience: ExperienceEntry;
}) {
  const isFeatured = Boolean(experience.featured);

  return (
    <article
      className={`experience-item ${
        isFeatured ? "experience-item--featured" : ""
      }`}
    >
      <div className="experience-item__rail" aria-hidden="true">
        <span className="experience-item__dot" />
      </div>

      <div className="experience-item__body">
        <div className="experience-card">
          <div className="experience-card__top">
            <span className="experience-index">
              {formatIndex(experience.index)}
            </span>
            <div>
              {experience.dateRange ? (
                <p className="experience-date">{experience.dateRange}</p>
              ) : null}
              <h2 className="experience-role">{experience.role}</h2>
              <p className="experience-org">{experience.organization}</p>
              {experience.duration ? (
                <p className="experience-duration">{experience.duration}</p>
              ) : null}
            </div>
          </div>

          <p className="experience-desc">{experience.description}</p>

          {experience.focus ? (
            <span className="experience-focus">{experience.focus}</span>
          ) : null}

          {experience.technologies?.length ? (
            <div className="experience-tech-row">
              {experience.technologies.map((tech) => (
                <ExperienceTechnology key={tech} name={tech} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
