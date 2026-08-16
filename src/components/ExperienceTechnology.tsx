import TechnologyIcon, { hasTechnologyIcon } from "./TechnologyIcon";

export default function ExperienceTechnology({ name }: { name: string }) {
  const showIcon = hasTechnologyIcon(name);

  return (
    <div className={`experience-tech ${showIcon ? "" : "experience-tech--text"}`}>
      {showIcon ? (
        <span className="experience-tech__icon" aria-hidden="true">
          <TechnologyIcon name={name} size={22} />
        </span>
      ) : null}
      <span className="experience-tech__name">{name}</span>
    </div>
  );
}
