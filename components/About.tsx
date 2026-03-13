"use client";

export default function About() {
  const highlights = [
    { icon: "🎓", title: "BSc (Hons) IT", sub: "SLIIT, 2020–2024" },
    { icon: "🏢", title: "Digitus Tec Pty Ltd", sub: "Associate Software Engineer" },
    { icon: "📡", title: "SLT Mobitel R&D", sub: "Intern Software Engineer" },
    { icon: "🌍", title: "Colombo, Sri Lanka", sub: "Open to remote" },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        position: "relative",
        zIndex: 1,
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <p className="section-label">About Me</p>
        <h2 className="section-title">
          Engineer. Builder.{" "}
          <span className="gradient-text">Problem Solver.</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left: Text */}
        <div>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.9,
              fontSize: "1.025rem",
              marginBottom: "1.5rem",
            }}
          >
            Passionate Software Engineer with a{" "}
            <span style={{ color: "var(--accent-1)", fontWeight: 600 }}>
              BSc (Hons) in Information Technology
            </span>{" "}
            and over 1.5 years of full-stack development experience. I specialise in
            building scalable web applications using Angular, NestJS, React, and
            MongoDB.
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.9,
              fontSize: "1.025rem",
              marginBottom: "1.5rem",
            }}
          >
            I have a proven track record in developing{" "}
            <span style={{ color: "var(--accent-2)", fontWeight: 600 }}>
              ERP solutions
            </span>
            , including SAP Business One integrations and Acumatica implementations.
            Skilled in RESTful API development, database management, and technical
            consultation to drive business efficiency.
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.9,
              fontSize: "1.025rem",
            }}
          >
            When I'm not coding, I'm exploring new technologies, contributing to
            open-source projects, and pushing the boundaries of what web applications
            can achieve for real-world business problems.
          </p>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="https://www.linkedin.com/in/thisara-jayasundara"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn"
              style={{ padding: "0.65rem 1.5rem", fontSize: "0.875rem" }}
            >
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/thisara97"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn"
              style={{ padding: "0.65rem 1.5rem", fontSize: "0.875rem" }}
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Right: Highlight cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          {highlights.map((h) => (
            <div
              key={h.title}
              className="glass-card"
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "1.75rem" }}>{h.icon}</span>
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "var(--text-primary)",
                }}
              >
                {h.title}
              </div>
              <div style={{ fontSize: "0.775rem", color: "var(--text-muted)" }}>
                {h.sub}
              </div>
            </div>
          ))}

          {/* Experience timeline card */}
          <div
            className="glass-card"
            style={{ padding: "1.5rem", gridColumn: "1 / -1" }}
          >
            <div
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "var(--accent-1)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Career Timeline
            </div>
            {[
              {
                period: "Feb 2024 – Present",
                role: "Associate Software Engineer",
                company: "Digitus Tec Pty Ltd",
                color: "var(--accent-1)",
              },
              {
                period: "Feb 2023 – Aug 2023",
                role: "Intern Software Engineer (R&D)",
                company: "SLT Mobitel PLC",
                color: "var(--accent-2)",
              },
            ].map((exp, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  marginBottom: i === 0 ? "1rem" : 0,
                  paddingBottom: i === 0 ? "1rem" : 0,
                  borderBottom: i === 0 ? "1px solid var(--glass-border)" : "none",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: exp.color,
                    boxShadow: `0 0 8px ${exp.color}`,
                    marginTop: "4px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {exp.role}
                  </div>
                  <div style={{ fontSize: "0.775rem", color: "var(--text-secondary)" }}>
                    {exp.company}
                  </div>
                  <div style={{ fontSize: "0.725rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                    {exp.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
