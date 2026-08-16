import Navbar from "../components/Navbar";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { experiences } from "../data/experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-[1400px] px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <Navbar />

        <main className="experience-page">
          <header className="experience-header">
            <h1 className="experience-title">EXPERIENCE</h1>
            <p className="experience-intro">
              Places I&apos;ve worked, contributed, learned, and built
              real-world experience.
            </p>
          </header>

          <ExperienceTimeline items={experiences} />
        </main>
      </div>
    </div>
  );
}
