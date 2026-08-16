import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-[1500px] px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
