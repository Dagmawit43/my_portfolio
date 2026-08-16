export type ExperienceEntry = {
  id: string;
  index: number;
  organization: string;
  role: string;
  /** Present only when confirmed — never invent */
  dateRange?: string;
  /** Present only when confirmed — never invent */
  duration?: string;
  description: string;
  /** Present only when confirmed — never invent */
  technologies?: string[];
  /** Soft focus label when no tech list is provided */
  focus?: string;
  featured?: boolean;
};

export const experiences: ExperienceEntry[] = [
  {
    id: "efuye-gela",
    index: 1,
    organization: "Efuye Gela",
    role: "Project Manager & Front-End Developer",
    dateRange: "June – September 2025",
    duration: "4 months",
    description:
      "Worked across project management and front-end development, building websites primarily with React and Next.js.",
    technologies: ["React", "Next.js"],
    featured: true,
  },
  {
    id: "aastu",
    index: 2,
    organization: "AASTU",
    role: "Front-End Developer Intern",
    description:
      "Worked on website development as a front-end development intern.",
    focus: "Website Development",
  },
];

export default experiences;
