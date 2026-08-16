import Navbar from "../components/Navbar";
import skillsData from "../data/skills";
import SkillSection from "../components/SkillSection";
import FeaturedSkillCard from "../components/FeaturedSkillCard";

export default function SkillsPage() {
  const frontend = skillsData.find((s) => s.id === "frontend-development");
  const testing = skillsData.find((s) => s.id === "application-testing");
  const mobile = skillsData.find((s) => s.id === "mobile-development");
  const uiux = skillsData.find((s) => s.id === "ui-ux-design");
  const programming = skillsData.find((s) => s.id === "programming-data");
  const tools = skillsData.find((s) => s.id === "design-tools");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-[1400px] px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <Navbar />

        <main className="skills-page">
          <header className="skills-header">
            <div className="skills-eyebrow">Toolkit</div>
            <h1 className="skills-title">SKILLS</h1>
            <p className="skills-intro">
              Technologies and tools I use to design, build, test, and bring
              digital products to life.
            </p>
          </header>

          <section className="skills-visual-grid">
            <div className="col col--main">
              <div className="skill-panel">
                <SkillSection
                  index={1}
                  title="Web Development"
                  description={frontend?.description}
                  items={frontend?.skills ?? []}
                />
              </div>

              <div className="skill-panel">
                <SkillSection
                  index={3}
                  title="Mobile Development"
                  description={mobile?.description}
                  items={mobile?.skills ?? []}
                />
              </div>

              <div className="skill-panel">
                <SkillSection
                  index={5}
                  title="Programming & Data"
                  description={programming?.description}
                  items={programming?.skills ?? []}
                />
              </div>
            </div>

            <aside className="col col--side">
              <div className="skill-panel">
                <FeaturedSkillCard
                  title={testing?.category ?? "Application Testing"}
                  description={testing?.description}
                  bullets={["QUALITY", "RELIABILITY", "VERIFICATION"]}
                />
              </div>

              <div className="skill-panel">
                <SkillSection
                  index={4}
                  title="UI / UX Design"
                  description={uiux?.description}
                  items={uiux?.skills ?? []}
                />
              </div>

              <div className="skill-panel">
                <SkillSection
                  index={6}
                  title="Tools & Workflow"
                  description={tools?.description}
                  items={tools?.skills ?? []}
                />
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}
