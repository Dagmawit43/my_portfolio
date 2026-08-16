import TechnologyIcon from "./TechnologyIcon";

export default function FeaturedSkillCard({
  title,
  description,
  bullets,
}: {
  title: string;
  description?: string;
  bullets?: string[];
}) {
  return (
    <div className="skill-feature" tabIndex={0}>
      <div className="skill-feature__art">
        <TechnologyIcon name={title} size={96} />
      </div>
      <div className="skill-feature__content">
        <div className="skill-feature__eyebrow">02</div>
        <h3 className="skill-feature__title">{title}</h3>
        {description ? (
          <p className="skill-feature__desc">{description}</p>
        ) : null}
        <div
          className="skill-feature__signals"
          aria-label="Testing focus areas"
        >
          {bullets?.map((b) => (
            <span key={b} className="skill-feature__signal">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
