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
  const heading = experience.title ?? experience.role;

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
          <div
            className={`experience-card__layout ${
              experience.image ? "experience-card__layout--media" : ""
            }`}
          >
            <div className="experience-card__content">
              <div className="experience-card__top">
                <span className="experience-index">
                  {formatIndex(experience.index)}
                </span>
                <div>
                  {experience.dateRange ? (
                    <p className="experience-date">{experience.dateRange}</p>
                  ) : null}
                  <h2 className="experience-role">{heading}</h2>
                  {experience.title ? (
                    <p className="experience-role-sub">{experience.role}</p>
                  ) : null}
                  <p className="experience-org">
                    {experience.type ?? experience.organization}
                  </p>
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

            {experience.image ? (
              <figure className="experience-media">
                <img
                  src={experience.image}
                  alt={
                    experience.imageAlt ??
                    `${heading} project photo`
                  }
                  className="experience-media__img"
                  loading="lazy"
                />
              </figure>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
