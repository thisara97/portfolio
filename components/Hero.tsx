"use client";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Engineer",
  "ERP Consultant",
  "Angular Developer",
  "NestJS Architect",
  "SAP B1 Specialist",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        padding: "8rem 2rem 4rem",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "var(--orb-1)",
          filter: "blur(100px)",
          top: "-100px",
          right: "-100px",
          pointerEvents: "none",
          animation: "pulse-glow 4s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "var(--orb-2)",
          filter: "blur(80px)",
          bottom: "0",
          left: "-50px",
          pointerEvents: "none",
          animation: "pulse-glow 5s ease-in-out infinite 1s",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Badge */}
        <div
          className="glass-card"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1.25rem",
            marginBottom: "2rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
            fontSize: "0.8rem",
            color: "var(--accent-3)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#00ff88",
              boxShadow: "0 0 8px #00ff88",
              animation: "pulse-glow 2s ease-in-out infinite",
              display: "inline-block",
            }}
          />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: "1rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease 0.1s",
          }}
        >
          <span style={{ color: "var(--text-primary)" }}>Luke Thisara</span>
          <br />
          <span className="shimmer-text">Jayasundara</span>
        </h1>

        {/* Typewriter role */}
        <div
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 600,
            marginBottom: "1.5rem",
            height: "2.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}
        >
          <span style={{ color: "var(--accent-1)" }}>&lt;</span>
          <span style={{ color: "var(--accent-2)" }}>{displayed}</span>
          <span className="animate-blink" style={{ color: "var(--accent-3)" }}>|</span>
          <span style={{ color: "var(--accent-1)" }}>/&gt;</span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.75,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.3s",
          }}
        >
          Turning complex business problems into elegant, scalable software.
          <br />
          <span style={{ color: "var(--text-muted)" }}>
            Based in Colombo, Sri Lanka 🇱🇰
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "4rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.4s",
          }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="glow-btn"
          >
            <span>View My Work</span>
            <span>→</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="outline-btn"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            maxWidth: "500px",
            margin: "0 auto",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.5s",
          }}
        >
          {[
            { num: "1.5+", label: "Years Experience" },
            { num: "10+", label: "Projects Built" },
            { num: "5+", label: "Tech Stacks" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card" style={{ padding: "1.25rem 1rem", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, var(--accent-1), var(--accent-3))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.num}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--text-muted)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <span>SCROLL</span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, var(--accent-1), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
