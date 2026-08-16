import { Navigate, useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-[1400px] px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <Navbar />

        <main className="project-detail-page">
          <div className="mb-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-slate-100"
            >
              ← Back to projects
            </Link>
          </div>
          <div className="project-detail-hero">
            <div className="project-detail-intro">
              <span className="project-category">{project.category}</span>
              <h1>{project.title}</h1>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links-row">
                {project.externalLink ? (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {project.externalLinkLabel ?? "Project link"}
                  </a>
                ) : null}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                ) : null}
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link project-link-primary"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>

            <div className="project-detail-image-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="project-detail-image"
              />
            </div>
          </div>

          <section className="detail-panel detail-screenshots-panel">
            <h2>Screenshots</h2>
            <div className="project-screenshot-grid">
              {project.screenshots.map((screenshot, index) => (
                <figure
                  key={`${project.id}-screenshot-${index}`}
                  className="project-screenshot-card"
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="project-screenshot-image"
                  />
                </figure>
              ))}
            </div>
          </section>

          <div className="project-detail-grid">
            <section className="detail-panel">
              <h2>My role</h2>
              <p>{project.role}</p>
            </section>

            <section className="detail-panel">
              <h2>Overview</h2>
              <p>
                This project is being prepared for a deeper case study. The
                structure is ready for a full breakdown with overview, problem,
                solution, features, challenges, and outcome.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
