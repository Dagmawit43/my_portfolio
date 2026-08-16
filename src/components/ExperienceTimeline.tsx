import type { ExperienceEntry } from "../data/experience";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceTimeline({
  items,
}: {
  items: ExperienceEntry[];
}) {
  return (
    <section className="experience-timeline" aria-label="Work experience">
      <div className="experience-timeline__line" aria-hidden="true" />
      <div className="experience-timeline__list">
        {items.map((item) => (
          <ExperienceItem key={item.id} experience={item} />
        ))}
      </div>
    </section>
  );
}
