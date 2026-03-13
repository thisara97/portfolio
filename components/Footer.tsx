export default function Footer() {
  return (
    <footer
      style={{
        padding: "3rem 2rem",
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--glass-border)",
        background: "var(--glass-bg)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "1.25rem",
              background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "0.35rem",
            }}
          >
            Luke Thisara Jayasundara
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Full-Stack Engineer · ERP Consultant · Colombo, Sri Lanka
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <a
            href="https://github.com/thisara97"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent-1)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/thisara-jayasundara"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent-1)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
          >
            LinkedIn
          </a>
          <a
            href="mailto:thisarajayasundara@gmail.com"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent-1)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
          >
            Email
          </a>
        </div>

        <div style={{ fontSize: "0.775rem", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Luke Thisara Jayasundara. Built with Next.js & ♥
        </div>
      </div>
    </footer>
  );
}
