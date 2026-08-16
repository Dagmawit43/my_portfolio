import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiDjango,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiCplusplus,
  SiFigma,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiArduino,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";

const ICONS: Record<string, React.ComponentType<any>> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Vite: SiVite,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  Flutter: SiFlutter,
  Dart: SiDart,
  Firebase: SiFirebase,
  "Django REST Framework": SiDjango,
  PostgreSQL: SiPostgresql,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Python: SiPython,
  Java: FaJava,
  "C++": SiCplusplus,
  Figma: SiFigma,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": SiVisualstudiocode,
  Arduino: SiArduino,
  "Application Testing": RiShieldCheckLine,
  "REST APIs": RiShieldCheckLine,
  "JWT Authentication": RiShieldCheckLine,
  "Human-Computer Interaction (HCI)": SiFigma,
  Vercel: SiVercel,
};

export default function TechnologyIcon({
  name,
  className = "",
  size = 48,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = ICONS[name] ?? ICONS[name.replace(/\s+\(.+\)/, "")];

  if (!Icon) return <div className={`tech-logo-missing ${className}`} />;

  return <Icon className={className} size={size} />;
}
