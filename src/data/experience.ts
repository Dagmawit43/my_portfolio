import smartBinImage from "../assets/images/smart bin.jpg";

export type ExperienceEntry = {
  id: string;
  index: number;
  organization: string;
  role: string;
  /** Optional project title — used as the main heading when present */
  title?: string;
  /** e.g. Academic / Group Project — not employment */
  type?: string;
  /** Present only when confirmed — never invent */
  dateRange?: string;
  /** Present only when confirmed — never invent */
  duration?: string;
  description: string;
  /** Present only when confirmed — never invent */
  technologies?: string[];
  /** Soft focus label when no tech list is provided */
  focus?: string;
  /** Optional project / workplace photo */
  image?: string;
  imageAlt?: string;
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
    id: "smart-bin",
    index: 2,
    title: "Smart Bin IoT Project",
    organization: "Academic Project",
    role: "Software Engineering Project Team Member",
    type: "Academic / Group Project",
    description:
      "Worked as part of a team to design and develop a smart waste-management system that used sensors to monitor waste levels and bin conditions. The system integrated Arduino hardware with a backend and Flutter application for monitoring and managing the collected data, building practical experience in software development, IoT integration, teamwork, and problem-solving.",
    technologies: [
      "Arduino Uno",
      "Ultrasonic Sensors",
      "Load Cells",
      "Node.js",
      "Flutter",
      "Firebase",
    ],
    image: smartBinImage,
    imageAlt: "Smart Bin IoT project hardware and prototype",
  },
  {
    id: "aastu",
    index: 3,
    organization: "AASTU",
    role: "Front-End Developer Intern",
    description:
      "Worked on website development as a front-end development intern.",
    focus: "Website Development",
  },
];

export default experiences;
