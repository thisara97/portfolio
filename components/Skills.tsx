"use client";
import { useState } from "react";

const categories = [
  {
    label: "Frontend",
    icon: "🎨",
    color: "var(--accent-1)",
    skills: [
      { name: "Angular", level: 95 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "PrimeNG", level: 88 },
      { name: "Bootstrap", level: 85 },
      { name: "Material UI", level: 80 },
    ],
  },
  {
    label: "Backend",
    icon: "⚙️",
    color: "var(--accent-2)",
    skills: [
      { name: "NestJS", level: 92 },
      { name: "Node.js", level: 88 },
      { name: "RESTful APIs", level: 95 },
      { name: "JWT / Auth0", level: 85 },
    ],
  },
  {
    label: "Databases",
    icon: "🗄️",
    color: "var(--accent-3)",
    skills: [
      { name: "MongoDB Atlas", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 82 },
    ],
  },
  {
    label: "ERP & Tools",
    icon: "🔧",
    color: "#ff6b6b",
    skills: [
      { name: "SAP Business One", level: 90 },
      { name: "Acumatica", level: 78 },
      { name: "Docker", level: 75 },
      { name: "AWS Services", level: 70 },
      { name: "Git / GitLab", level: 90 },
      { name: "Crystal Reports", level: 80 },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        position: "relative",
        zIndex: 1,
        background: "linear-gradient(180deg, transparent 0%, rgba(79,110,247,0.03) 50%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p className="section-label">Expertise</p>
        <h2 className="section-title">
          Tech Stack &{" "}
          <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
          A full-stack toolkit built through real-world enterprise projects and
          continuous learning.
        </p>

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? "linear-gradient(135deg, var(--accent-1), var(--accent-2))" : "var(--glass-bg)",
                border: `1px solid ${active === i ? "transparent" : "var(--glass-border)"}`,
                backdropFilter: "blur(10px)",
                color: active === i ? "#fff" : "var(--text-secondary)",
                padding: "0.6rem 1.5rem",
                borderRadius: "50px",
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {categories[active].skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card"
              style={{
                padding: "1.25rem 1.5rem",
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {skill.name}
                </span>
                <span
                  style={{
                    fontSize: "0.775rem",
                    color: categories[active].color,
                    fontWeight: 600,
                  }}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                style={{
                  height: "6px",
                  background: "var(--glass-bg)",
                  borderRadius: "3px",
                  overflow: "hidden",
                  border: "1px solid var(--glass-border)",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, var(--accent-1), var(--accent-2))`,
                    borderRadius: "3px",
                    boxShadow: `0 0 8px var(--accent-glow)`,
                    transition: "width 0.8s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* All tech tags */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          {[
            "Angular", "React", "Next.js", "NestJS", "TypeScript", "Node.js",
            "MongoDB", "PostgreSQL", "SAP B1", "Docker", "AWS", "Git", "JIRA",
            "Postman", "Auth0", "Crystal Reports"
          ].map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
