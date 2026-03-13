"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Default to dark mode
    document.documentElement.classList.add("dark");

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const links = ["About", "Skills", "Projects", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
        background: scrolled ? "var(--glass-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--glass-border)" : "none",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "1.25rem",
          cursor: "pointer",
          background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        LTJ
      </div>

      {/* Desktop Links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
        className="hidden-mobile"
      >
        {links.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
              cursor: "pointer",
              transition: "color 0.2s",
              padding: "0.25rem 0",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--accent-1)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-secondary)")
            }
          >
            {link}
          </button>
        ))}

        {/* Dark mode toggle */}
        <button
          onClick={toggleDark}
          title="Toggle theme"
          style={{
            background: "var(--glass-bg)",
            border: "1px solid var(--glass-border)",
            borderRadius: "50px",
            padding: "0.4rem 0.8rem",
            cursor: "pointer",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "var(--text-primary)",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
          }}
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <a
          href="mailto:thisarajayasundara@gmail.com"
          className="glow-btn"
          style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
        >
          <span>Hire Me</span>
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="show-mobile"
        style={{
          background: "none",
          border: "none",
          color: "var(--text-primary)",
          fontSize: "1.5rem",
          cursor: "pointer",
          display: "none",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg-secondary)",
            backdropFilter: "blur(24px)",
            borderBottom: "1px solid var(--glass-border)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-primary)",
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={toggleDark}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              textAlign: "left",
              color: "var(--text-primary)",
            }}
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
