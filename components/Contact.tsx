"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const res = await fetch("https://formspree.io/f/mbdzyvez", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const socials = [
    {
      icon: "💼",
      label: "LinkedIn",
      value: "thisara-jayasundara",
      href: "https://www.linkedin.com/in/thisara-jayasundara",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "thisara97",
      href: "https://github.com/thisara97",
    },
    {
      icon: "📧",
      label: "Email",
      value: "thisarajayasundara@gmail.com",
      href: "mailto:thisarajayasundara@gmail.com",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        position: "relative",
        zIndex: 1,
        background: "linear-gradient(180deg, transparent 0%, rgba(162,89,255,0.04) 50%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p className="section-label">Contact</p>
        <h2 className="section-title">
          Let's Build{" "}
          <span className="gradient-text">Something Great</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3.5rem" }}>
          Have a project in mind, a role to fill, or just want to connect?
          I'm always open to exciting opportunities.
        </p>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }}
          className="contact-grid"
        >
          {/* Left: Social links */}
          <div>
            <div style={{ marginBottom: "2rem" }}>
              {socials.map((s) => (
                <div
                  key={s.label}
                  className="glass-card"
                  style={{ padding: "1.25rem 1.5rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{s.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                      {s.label}
                    </div>
                    {s.href ? (
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--accent-1)",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          textDecoration: "none",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          display: "block",
                        }}
                      >
                        {s.value}
                      </a>
                    ) : (
                      <span style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 600 }}>{s.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="glass-card"
              style={{
                padding: "1.5rem",
                background: "linear-gradient(135deg, rgba(0,255,136,0.08), rgba(0,212,255,0.05))",
                borderColor: "rgba(0,255,136,0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#00ff88", boxShadow: "0 0 10px #00ff88", animation: "pulse-glow 2s ease-in-out infinite" }} />
                <span style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#00ff88" }}>
                  Open to Opportunities
                </span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Currently available for full-time roles, freelance projects, and ERP consultancy engagements.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "1.75rem" }}>
              Send a Message
            </h3>

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h4 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  Message Sent!
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="glow-btn"
                  style={{ marginTop: "1.5rem" }}
                >
                  <span>Send Another</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        borderRadius: "10px",
                        color: "var(--text-primary)",
                        fontSize: "0.875rem",
                        backdropFilter: "blur(10px)",
                        outline: "none",
                        transition: "border-color 0.2s",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-1)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--glass-border)")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        borderRadius: "10px",
                        color: "var(--text-primary)",
                        fontSize: "0.875rem",
                        backdropFilter: "blur(10px)",
                        outline: "none",
                        transition: "border-color 0.2s",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-1)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--glass-border)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      fontSize: "0.875rem",
                      backdropFilter: "blur(10px)",
                      outline: "none",
                      transition: "border-color 0.2s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-1)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--glass-border)")}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      fontSize: "0.875rem",
                      backdropFilter: "blur(10px)",
                      outline: "none",
                      transition: "border-color 0.2s",
                      resize: "vertical",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-1)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--glass-border)")}
                  />
                </div>

                {status === "error" && (
                  <div style={{ background: "rgba(255,100,100,0.1)", border: "1px solid rgba(255,100,100,0.3)", borderRadius: "10px", padding: "0.75rem 1rem", color: "#ff6b6b", fontSize: "0.85rem" }}>
                    ⚠️ Something went wrong. Please email me directly at thisarajayasundara@gmail.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="glow-btn"
                  style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? 0.7 : 1 }}
                >
                  <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                  {status !== "sending" && <span>→</span>}
                </button>

                <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", textAlign: "center" }}>
                  💡 Don't forget to set up your Formspree ID in Contact.tsx
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
