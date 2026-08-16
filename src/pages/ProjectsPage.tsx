import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];
const otherProjects = projects.filter(
  (project) => project.id !== featuredProject.id,
);

export default function ProjectsPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-[1400px] px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <Navbar />

        <main className="projects-page">
          <header className="projects-header">
            <div className="projects-eyebrow">Selected</div>
            <h1 className="projects-title">PROJECTS</h1>
            <p className="projects-intro">
              A selection of projects I&apos;ve built across web, mobile,
              backend, IoT, and machine learning.
            </p>
          </header>

          <section className="projects-featured">
            <div
              className="featured-card"
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/projects/${featuredProject.id}`)}
              onKeyDown={(e) => {
                if ((e as any).key === "Enter")
                  navigate(`/projects/${featuredProject.id}`);
              }}
            >
              <div className="featured-image-wrap">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="featured-image"
                />
              </div>

              <div className="featured-content">
                <div className="project-meta-row">
                  <span className="project-category">
                    {featuredProject.category}
                  </span>
                  <span className="project-role">{featuredProject.role}</span>
                </div>

                <h2>{featuredProject.title}</h2>
                <p>{featuredProject.description}</p>

                <div className="tech-list">
                  {featuredProject.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links-row">
                  {featuredProject.externalLink ? (
                    <a
                      href={featuredProject.externalLink}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {featuredProject.externalLinkLabel ?? "Project link"}
                    </a>
                  ) : null}
                  {featuredProject.github ? (
                    <a
                      href={featuredProject.github}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  ) : null}
                  {featuredProject.liveDemo ? (
                    <a
                      href={featuredProject.liveDemo}
                      className="project-link project-link-primary"
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </section>

          <section className="project-grid">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/projects/${project.id}`)}
                onKeyDown={(e) => {
                  if ((e as any).key === "Enter")
                    navigate(`/projects/${project.id}`);
                }}
              >
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>

                <div className="project-card-body">
                  <div className="project-meta-row">
                    <span className="project-category">{project.category}</span>
                    <span className="project-role">{project.role}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.externalLink ||
                  project.github ||
                  project.liveDemo ? (
                    <div className="project-links-row">
                      {project.externalLink ? (
                        <a
                          href={project.externalLink}
                          className="project-link"
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {project.externalLinkLabel ?? "Project link"}
                        </a>
                      ) : null}

                      {project.github ? (
                        <a
                          href={project.github}
                          className="project-link"
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      ) : null}

                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          className="project-link project-link-primary"
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
