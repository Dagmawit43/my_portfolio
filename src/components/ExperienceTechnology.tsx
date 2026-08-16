import TechnologyIcon from "./TechnologyIcon";

export default function ExperienceTechnology({ name }: { name: string }) {
  return (
    <div className="experience-tech">
      <span className="experience-tech__icon" aria-hidden="true">
        <TechnologyIcon name={name} size={22} />
      </span>
      <span className="experience-tech__name">{name}</span>
    </div>
  );
}
