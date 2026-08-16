import { Link } from "react-router-dom";
import { navigationItems } from "../data/navigation";

export default function Sidebar() {
  return (
    <aside className="hidden lg:fixed lg:left-6 lg:top-6 lg:block lg:h-[calc(100vh-3rem)] lg:w-72">
      <div className="card-quiet h-full flex flex-col justify-between gap-6 p-6">
        <div>
          <div className="mb-6 text-sm font-semibold">Your Name</div>
          <nav className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="rounded-lg px-4 py-2 text-sm text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()}
        </div>
      </div>
    </aside>
  );
}
