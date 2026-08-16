import TechCard from "./TechCard";

export default function SkillSection({
  index,
  title,
  items,
  description,
  layout = "grid",
}: {
  index: number;
  title: string;
  items: string[];
  description?: string;
  layout?: "grid" | "flow";
}) {
  return (
    <section className="skill-section">
      <div className="skill-section__header">
        <div className="skill-section__index">
          {String(index).padStart(2, "0")}
        </div>
        <h4 className="skill-section__title">{title.toUpperCase()}</h4>
      </div>

      {description ? (
        <p className="skill-section__desc">{description}</p>
      ) : null}

      {items.length > 0 ? (
        <div className={`skill-section__grid skill-section__grid--${layout}`}>
          {items.map((it) => {
            const variant =
              it === "React" || it === "Flutter" || it === "Next.js"
                ? "large"
                : it === "GitHub"
                  ? "large"
                  : "medium";
            return (
              <TechCard key={it} name={it} variant={variant as "large" | "medium"} />
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
