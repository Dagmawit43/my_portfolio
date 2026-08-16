import photoSrc from "../assets/images/dagmawit.jpg";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Dagmawit43" },
  { label: "Instagram", href: "https://instagram.com/_dagmawit43" },
  { label: "Telegram", href: "https://t.me/dagmawit_43" },
];

function SocialIcon({ label }: { label: string }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-4 w-4",
    "aria-hidden": true,
  };

  switch (label) {
    case "GitHub":
      return (
        <svg {...commonProps}>
          <path d="M9 18.5c-4 1.2-4-2-5-2.5M15 21v-3.5a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.8A5.4 5.4 0 0 0 19 6.7a5 5 0 0 0-.1-3.7S17.7 2.5 15 3.9a13.2 13.2 0 0 0-6 0C6.3 2.5 4.9 3 4.9 3a5 5 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.3 3.9c0 5.3 3.1 6.5 6.1 6.8A3.4 3.4 0 0 0 9 17.5V21" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Telegram":
      return (
        <svg {...commonProps}>
          <path d="M21 4 3.5 11.5l5.2 1.8L20 5.3l-9 9.2 2.6 5.5L21 4Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-layout">
        <aside className="brand-panel">
          <div>
            <div className="brand-label">My brand</div>
            <h2 className="brand-name">Dagmawit Gebreweld Demses</h2>
            <a
              href="mailto:dagmawitgebreweld43@gmail.com"
              className="brand-email"
            >
              dagmawitgebreweld43@gmail.com
            </a>
            <a href="tel:+251936502560" className="brand-email brand-phone">
              +251 936 502560
            </a>
          </div>

          <div className="brand-meta">
            <div className="social-links" aria-label="Social media links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-link"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon label={link.label} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <div className="brand-copy">© 2026, All Rights Reserved</div>
          </div>

          <a
            href="mailto:dagmawitgebreweld43@gmail.com"
            className="cta-primary hero-cta"
          >
            WORK WITH ME <span aria-hidden="true">→</span>
          </a>
        </aside>

        <div className="hero-stage">
          <div className="hero-background">
            <img
              src={photoSrc}
              alt="Dagmawit Gebreweld Demses"
              className="hero-photo"
            />
            <div className="hero-overlay" />

            <div className="hero-content">
              <div className="hero-copy-block">
                <div className="hero-name-line">Dagmawit Gebreweld Demses</div>
                <h1 className="display-title">SOFTWARE ENGINEER</h1>
              </div>
            </div>
          </div>

          <aside className="hero-intro-card">
            <p>
              I&apos;m a Software Engineer passionate about building modern,
              user-focused web and mobile applications. I enjoy turning ideas
              and complex problems into clean, practical digital experiences.
            </p>
            <p className="hero-education">
              Graduate of Addis Ababa Science and Technology University (AASTU)
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
