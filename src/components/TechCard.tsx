import React from "react";
import TechnologyIcon from "./TechnologyIcon";

export default function TechCard({
  name,
  variant = "medium",
}: {
  name: string;
  variant?: "small" | "medium" | "large" | "feature";
}) {
  const sizeMap: Record<string, number> = {
    small: 36,
    medium: 52,
    large: 72,
    feature: 96,
  };

  return (
    <div className={`tech-card tech-card--${variant}`} tabIndex={0}>
      <div className="tech-card__logo">
        <TechnologyIcon name={name} size={sizeMap[variant] ?? 52} />
      </div>
      <div className="tech-card__name">{name}</div>
    </div>
  );
}
