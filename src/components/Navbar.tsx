import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  return (
    <header className="hero-nav" aria-label="Main navigation">
      <nav className="nav-shell">
        {navItems.map((item) => (
          <Link key={item.label} to={item.path} className="nav-link">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
