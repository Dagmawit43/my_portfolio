import About from "../components/About";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function AboutPage() {
  return (
    <div className="main-with-sidebar mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 lg:flex-row lg:px-8">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col gap-6">
        <About />
        <Footer />
      </div>
    </div>
  );
}
