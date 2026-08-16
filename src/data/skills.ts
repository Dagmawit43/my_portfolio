export type SkillCategory = {
  id: string;
  category: string;
  description?: string;
  featured?: boolean;
  skills: string[];
  projects?: string[]; // optional links to project ids
};

export const skills: SkillCategory[] = [
  {
    id: "frontend-development",
    category: "Frontend Development",
    description:
      "Building responsive, interactive interfaces and modern web applications with a focus on usability, performance, and clean design.",
    featured: true,
    skills: [
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    projects: ["internship-tracking-management-system", "book-review-app"],
  },
  {
    id: "application-testing",
    category: "Application Testing",
    description:
      "Testing applications systematically to identify bugs, verify functionality, improve reliability, and ensure a smooth user experience.",
    featured: true,
    skills: [],
  },
  {
    id: "full-stack-development",
    category: "Full-Stack Development",
    description:
      "Developing complete web applications across frontend interfaces, APIs, authentication, server-side functionality, and databases.",
    featured: true,
    skills: [
      "Django REST Framework",
      "PostgreSQL",
      "Node.js",
      "Express",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    id: "mobile-development",
    category: "Mobile Development",
    description:
      "Creating cross-platform mobile experiences with Flutter and Firebase.",
    featured: true,
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: "ui-ux-design",
    category: "UI/UX Design",
    description:
      "Designing user-centered interfaces with a focus on usability, accessibility, interaction, and clean visual experiences.",
    featured: true,
    skills: ["Figma", "Human-Computer Interaction (HCI)"],
    projects: ["ethio-matric-app"],
  },
  // Secondary groups
  {
    id: "programming-data",
    category: "Programming & Data",
    description: "",
    featured: false,
    skills: ["Python", "Java", "C++", "Machine Learning"],
  },
  {
    id: "design-tools",
    category: "Design & Tools",
    description: "",
    featured: false,
    skills: ["Git", "GitHub", "VS Code", "Arduino", "Figma"],
  },
];

export default skills;
