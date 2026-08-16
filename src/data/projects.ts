import internshipScreenshot1 from "../assets/images/projects/internship-1.jpg";
import internshipScreenshot2 from "../assets/images/projects/internship-2.jpg";
import internshipScreenshot3 from "../assets/images/projects/internship-3.jpg";
import internshipScreenshot4 from "../assets/images/projects/internship-4.jpg";
import ethioMatricScreenshot1 from "../assets/images/projects/ethio-matric-1.png";
import ethioMatricScreenshot2 from "../assets/images/projects/ethio-matric-2.png";
import ethioMatricScreenshot3 from "../assets/images/projects/ethio-matric-3.png";
import ethioMatricScreenshot4 from "../assets/images/projects/ethio-matric-4.png";
import ethioMatricScreenshot5 from "../assets/images/projects/ethio-matric-5.png";
import ethioMatricScreenshot6 from "../assets/images/projects/ethio-matric-6.png";
import ethioMatricScreenshot7 from "../assets/images/projects/ethio-matric-7.png";
import ethioMatricScreenshot8 from "../assets/images/projects/ethio-matric-8.png";
import bookReviewScreenshot1 from "../assets/images/projects/book-review-1.png";
import bookReviewScreenshot2 from "../assets/images/projects/book-review-2.png";
import bookReviewScreenshot3 from "../assets/images/projects/book-review-3.png";
import bookReviewScreenshot4 from "../assets/images/projects/book-review-4.png";
import bookReviewScreenshot5 from "../assets/images/projects/book-review-5.png";
import bookReviewScreenshot6 from "../assets/images/projects/book-review-6.png";
import bookReviewScreenshot7 from "../assets/images/projects/book-review-7.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  screenshots: string[];
  github: string;
  liveDemo: string;
  externalLink?: string;
  externalLinkLabel?: string;
  featured: boolean;
  role: string;
};

export const projects: Project[] = [
  {
    id: "internship-tracking-management-system",
    title: "Internship Tracking & Management System",
    description:
      "An Internship Tracking & Management System developed for AASTU to manage the internship process digitally.",
    category: "Web",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
      "JWT Authentication",
      "Chart.js",
    ],
    image: internshipScreenshot1,
    screenshots: [
      internshipScreenshot1,
      internshipScreenshot2,
      internshipScreenshot3,
      internshipScreenshot4,
    ],
    github: "https://github.com/Dagmawit43/frontend_internship_tracking.git",
    liveDemo: "https://frontend-internship-tracking-842c.vercel.app/",
    featured: true,
    role: "Front-End Lead",
  },
  {
    id: "ethio-matric-app",
    title: "Ethio Matric App",
    description:
      "An educational UI/UX design project focused on improving the experience of Ethiopian secondary-school students preparing for matriculation examinations.",
    category: "Mobile",
    technologies: ["Figma", "Human-Computer Interaction (HCI)"],
    image: ethioMatricScreenshot1,
    screenshots: [
      ethioMatricScreenshot1,
      ethioMatricScreenshot2,
      ethioMatricScreenshot3,
      ethioMatricScreenshot4,
      ethioMatricScreenshot5,
      ethioMatricScreenshot6,
      ethioMatricScreenshot7,
      ethioMatricScreenshot8,
    ],
    github: "",
    liveDemo: "",
    externalLink:
      "https://www.figma.com/design/jnJuj69O1gQKlKbzjpgDWP/matric-app?node-id=0-1&t=DJxA0hqe9V7zS1X6-1",
    externalLinkLabel: "Project link",
    featured: false,
    role: "UI/UX Designer",
  },
  {
    id: "book-review-app",
    title: "Book Review App",
    description:
      "A full-stack book review platform built entirely with Next.js, allowing users to browse books, write and manage reviews, and maintain a personal reading list.",
    category: "Mobile",
    technologies: ["Next.js", "PostgreSQL", "JWT Authentication"],
    image: bookReviewScreenshot1,
    screenshots: [
      bookReviewScreenshot1,
      bookReviewScreenshot2,
      bookReviewScreenshot3,
      bookReviewScreenshot4,
      bookReviewScreenshot5,
      bookReviewScreenshot6,
      bookReviewScreenshot7,
    ],
    github: "https://github.com/Dagmawit43/Book_Review.git",
    liveDemo: "https://book-review-3ilh.vercel.app/",
    featured: false,
    role: "Full-Stack Developer",
  },
];
