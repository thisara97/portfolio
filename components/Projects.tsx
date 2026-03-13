"use client";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Shell: "#89e051",
  Go: "#00ADD8",
};

const featuredProjects = [
  {
    name: "Dispensary Management ERP",
    description:
      "Full ERP system for dispensary operations. Built with Angular, NestJS, PostgreSQL, and Docker. Features inventory management, prescriptions, and billing.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    tags: ["Angular", "NestJS", "PostgreSQL", "Docker"],
    url: "https://github.com/thisara97",
  },
  {
    name: "Tea Factory Management ERP",
    description:
      "Comprehensive management solution for tea factory operations using the MERN Stack. Handles production tracking, workforce management, and financial reporting.",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    tags: ["MongoDB", "Express", "React", "Node.js"],
    url: "https://github.com/thisara97",
  },
  {
    name: "Book Management System",
    description:
      "Digitalized asset and maintenance tracking system for book management system.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    tags: ["Angular", "NestJS", "SAP B1", "MongoDB"],
    url: "https://github.com/thisara97",
  },
  // {
  //   name: "Delivery Management System",
  //   description:
  //     "Logistics platform for real-time tracking of deliveries, drivers, and vehicles. Features real-time dashboards and detailed analytics reporting.",
  //   language: "TypeScript",
  //   stars: 0,
  //   forks: 0,
  //   tags: ["Angular", "NestJS", "MongoDB", "Docker"],
  //   url: "https://github.com/thisara97",
  // },
  // {
  //   name: "CYOL Farm Management",
  //   description:
  //     "SAP-integrated agricultural management platform for production, finance, and livestock management. Streamlines workforce and resource management for farms.",
  //   language: "TypeScript",
  //   stars: 0,
  //   forks: 0,
  //   tags: ["Angular", "SAP B1", "NestJS", "PostgreSQL"],
  //   url: "https://github.com/thisara97",
  // },
];

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("https://api.github.com/users/thisara97/repos?sort=updated&per_page=20")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data.filter((r: Repo) => !r.name.startsWith(".")));
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const languages = ["All", ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean) as string[]))];

  const displayRepos = error || repos.length === 0 ? null : repos.filter(
    (r) => filter === "All" || r.language === filter
  );

  return (
    <section
      id="projects"
      style={{
        padding: "6rem 2rem",
        position: "relative",
        zIndex: 1,
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <p className="section-label">Portfolio</p>
      <h2 className="section-title">
        Featured{" "}
        <span className="gradient-text">Projects</span>
      </h2>
      <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
        A selection of projects built across enterprise, ERP, and personal domains.
        Each one solving a real-world problem with scalable architecture.
      </p>

      {/* GitHub live repos */}
      {!error && repos.length > 0 && (
        <>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 600 }}>FILTER:</span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                style={{
                  background: filter === lang ? "var(--accent-1)" : "var(--glass-bg)",
                  border: `1px solid ${filter === lang ? "var(--accent-1)" : "var(--glass-border)"}`,
                  backdropFilter: "blur(10px)",
                  color: filter === lang ? "#fff" : "var(--text-secondary)",
                  padding: "0.35rem 1rem",
                  borderRadius: "50px",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.775rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
              marginBottom: "4rem",
            }}
          >
            {loading ? (
              Array(6).fill(0).map((_, i) => (
                <div key={i} className="glass-card" style={{ padding: "1.5rem", height: "180px", opacity: 0.5 }}>
                  <div style={{ height: "16px", background: "var(--glass-border)", borderRadius: "8px", marginBottom: "0.75rem", width: "60%" }} />
                  <div style={{ height: "12px", background: "var(--glass-border)", borderRadius: "8px", marginBottom: "0.5rem" }} />
                  <div style={{ height: "12px", background: "var(--glass-border)", borderRadius: "8px", width: "80%" }} />
                </div>
              ))
            ) : (
              (displayRepos || []).slice(0, 9).map((repo) => (
                <div
                  key={repo.id}
                  onClick={() => window.open(repo.html_url, "_blank", "noopener,noreferrer")}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <div className="glass-card" style={{ padding: "1.5rem", height: "100%", cursor: "pointer" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                      <span style={{ fontSize: "1.25rem" }}>📦</span>
                      <div style={{ display: "flex", gap: "0.75rem" }}>
                        {repo.homepage && (
                          <span
                            onClick={(e) => { e.stopPropagation(); window.open(repo.homepage!, "_blank", "noopener,noreferrer"); }}
                            style={{ color: "var(--accent-3)", fontSize: "0.8rem", textDecoration: "none", fontWeight: 600, cursor: "pointer" }}>
                            Live ↗
                          </span>
                        )}
                        <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                          ⭐ {repo.stargazers_count}
                        </span>
                        <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                          🍴 {repo.forks_count}
                        </span>
                      </div>
                    </div>

                    <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                      {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                      {repo.description || "No description provided."}
                    </p>

                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {repo.language && (
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: "0.3rem",
                          fontSize: "0.725rem", color: "var(--text-secondary)", fontWeight: 600,
                        }}>
                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: langColors[repo.language] || "#888", display: "inline-block" }} />
                          {repo.language}
                        </span>
                      )}
                      {repo.topics?.slice(0, 3).map((t) => (
                        <span key={t} className="tag" style={{ fontSize: "0.65rem", padding: "0.15rem 0.5rem" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}

      {/* Featured / Highlighted Projects */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "var(--accent-2)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          ✦ Highlighted Work
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
        {featuredProjects.map((proj, i) => (
          <div
            key={proj.name}
            onClick={() => window.open(proj.url, "_blank", "noopener,noreferrer")}
            className="glass-card"
            style={{
              padding: "1.75rem",
              cursor: "pointer",
              background: i === 0 ? "linear-gradient(135deg, rgba(79,110,247,0.12), rgba(162,89,255,0.08))" : "var(--glass-bg)",
              borderColor: i === 0 ? "rgba(79,110,247,0.4)" : "var(--glass-border)",
            }}
          >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.1rem", flexShrink: 0,
                }}>
                  {["🏥", "🍵", "🔧", "🚚", "🌾"][i]}
                </div>
                {i === 0 && (
                  <span style={{
                    background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                    color: "#fff", fontSize: "0.65rem", fontWeight: 700,
                    padding: "0.2rem 0.6rem", borderRadius: "50px",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>
                    Featured
                  </span>
                )}
              </div>

              <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", marginBottom: "0.65rem" }}>
                {proj.name}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.825rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                {proj.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {proj.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: "0.7rem" }}>{tag}</span>
                ))}
              </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <button
          onClick={() => window.open("https://github.com/thisara97", "_blank", "noopener,noreferrer")}
          className="outline-btn"
        >
          View All on GitHub →
        </button>
      </div>
    </section>
  );
}
