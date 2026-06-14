'use client';

import { useState } from "react";

const PARTNER_LOGOS = ["SpeedyHR", "Mero", "Jevelo", "Prosnet", "Create."];

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks! We'll contact you at: ${email}`);
    setEmail("");
  };

  return (
    <div
      className="relative min-h-screen pt-[88px] text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--color-background) 0%, var(--color-background-mid) 40%, var(--color-background-dark) 70%, var(--color-background-darker) 100%)",
      }}
    >
      {/* Soft light blobs */}
      <div
        className="absolute -top-[120px] -right-[80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-blob-light) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[100px] left-[20%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-blob-dark) 0%, transparent 70%)",
        }}
      />

      {/* ── LARGE HERO IMAGE WITH MESH ── */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          transform: "translateX(-50%)",
          zIndex: 5,
          height: "clamp(500px, 55vw, 850px)",
          pointerEvents: "none",
        }}
      >
        {/* Circular mesh behind the image (soft fade) */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(500px, 55vw, 850px)",
            height: "clamp(500px, 55vw, 850px)",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect x='4' y='4' width='72' height='72' rx='6' fill='rgba(255,255,255,0.1)' stroke='none'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 15%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 15%, transparent 100%)",
          }}
        />
        <img
          src="/assets/figma_assets/image-large-hero.png"
          alt="Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>

      {/* ── HERO CONTENT ── */}
      <main
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[calc(100vh-88px)]" style={{ padding: "0 100px 60px" }}
      >
        {/* LEFT column */}
        <div className="flex flex-col gap-7 max-w-[520px]">
          {/* Big headline */}
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              textTransform: "none",
              color: "white",
            }}
          >
            Design.
            <br />
            Develop.
            <br />
            Deploy.
          </h1>

          <p
            className="m-0 leading-[1.65] max-w-[420px]"
            style={{
              fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
              color: "var(--color-white-80)",
            }}
          >
            From idea to launch, we design, develop, and deliver high-performance digital products
            that help businesses scale faster and smarter.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              style={{
                padding: "14px 32px",
                borderRadius: "100px",
                border: "none",
                background: "white",
                color: "var(--color-accent)",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 8px 24px var(--color-shadow-medium)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              Start Now
            </button>
            <button
              style={{
                padding: "14px 32px",
                borderRadius: "100px",
                border: "2px solid var(--color-white-50)",
                background: "var(--color-white-12)",
                color: "white",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.2s",
                backdropFilter: "blur(6px)",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "var(--color-white-22)")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "var(--color-white-12)")
              }
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT column */}
        <div className="flex flex-col items-end gap-5 relative" style={{ minHeight: "500px" }}>
          {/* Trusted Partner card */}
          <div
            className="absolute bottom-[100px] left-0 rounded-2xl px-5 py-4 backdrop-blur-xl min-w-[190px]"
            style={{
              background: "var(--color-white-92)",
              boxShadow: "0 8px 32px var(--color-shadow-light)",
            }}
          >
            <div
              className="text-4xl font-black leading-none"
              style={{ color: "var(--color-accent)" }}
            >
              400+
            </div>
            <div
              className="text-sm font-semibold mt-1 mb-2.5"
              style={{ color: "var(--color-card-foreground)" }}
            >
              Trusted Partner
            </div>
            <div className="flex flex-wrap gap-1">
              {PARTNER_LOGOS.map((name) => (
                <span
                  key={name}
                  className="text-xs font-bold rounded-md px-1.5 py-0.5"
                  style={{
                    color: "var(--color-card-foreground-muted)",
                    background: "var(--color-card-bg-muted)",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
            <button
              className="mt-3 w-full py-2.5 rounded-full border-2 bg-white font-bold text-sm cursor-pointer transition-colors duration-200"
              style={{
                borderColor: "var(--color-card-border)",
                color: "var(--color-card-foreground-solid)",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "var(--color-card-hover)")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "white")
              }
            >
              Book a Call
            </button>
          </div>

          {/* Projects launched card */}
          <div
            className="absolute top-[40px] right-0 rounded-2xl px-[18px] py-3.5 backdrop-blur-xl min-w-[130px]"
            style={{
              background: "var(--color-overlay)",
              boxShadow: "0 8px 32px var(--color-shadow-medium)",
            }}
          >
            <div
              className="w-full h-[60px] rounded-xl flex items-center justify-center text-xl mb-2.5"
              style={{
                background: "var(--color-white-15)",
                border: "1px dashed var(--color-white-30)",
              }}
            >
              🖼
            </div>
            <div className="text-[1.8rem] font-black leading-none text-white">
              800+
            </div>
            <div
              className="text-xs font-medium mt-1"
              style={{ color: "var(--color-white-80)" }}
            >
              Projects successfully
              <br />
              launched worldwide
            </div>
          </div>

          {/* Contact by Email card */}
          <div
            className="w-full max-w-[500px] backdrop-blur-xl rounded-2xl px-7 py-6"
            style={{
              background: "var(--color-white-10)",
              border: "1px solid var(--color-white-20)",
              boxShadow: "0 8px 32px var(--color-shadow-soft)",
            }}
          >
            <h3 className="m-0 mb-1.5 text-xl font-extrabold tracking-[-0.02em]">
              Contact by Email
            </h3>
            <p
              className="m-0 mb-3.5 text-sm"
              style={{ color: "var(--color-white-70)" }}
            >
              Enter your email and we'll contact you
            </p>

            {/* Social row */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
              {[<TwitterIcon />, <InstagramIcon />, <LinkedInIcon />].map((Icon, i) => (
                <button
                  key={i}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    border: "1.5px solid var(--color-white-40)",
                    background: "transparent",
                    color: "white",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {Icon}
                </button>
              ))}
            </div>

            {/* Email input */}
            <form
              onSubmit={handleEmailSubmit}
              className="flex rounded-full overflow-hidden items-center"
              style={{
                background: "var(--color-white-12)",
                border: "1px solid var(--color-white-25)",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 bg-transparent border-none outline-none px-5 py-3 text-white text-sm"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full border-none bg-white flex items-center justify-center m-1 shrink-0 cursor-pointer transition-transform duration-150 hover:scale-110"
                style={{ color: "var(--color-accent)" }}
              >
                <ArrowRightIcon />
              </button>
            </form>
          </div>
        </div>
      </main>

      <style>{`
        input::placeholder {
          color: var(--color-white-50);
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
