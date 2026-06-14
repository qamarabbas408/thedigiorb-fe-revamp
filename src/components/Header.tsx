'use client';

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio / Work", href: "/#portfolio" },
  { label: "About Us", href: "/#about" },
  { label: "Contact us", href: "/#contact" },
];

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

const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="20" fill="white" fillOpacity="0.15" />
    <circle cx="20" cy="20" r="14" fill="white" fillOpacity="0.2" />
    <circle cx="20" cy="20" r="8" fill="white" fillOpacity="0.4" />
    <circle cx="20" cy="20" r="3" fill="white" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-[100px] py-3 transition-colors duration-300"
        style={{
          background: scrolled ? "linear-gradient(135deg, var(--color-background) 0%, var(--color-background-mid) 40%, var(--color-background-dark) 70%, var(--color-background-darker) 100%)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-white-20)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <LogoIcon />
          <span style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: "1.25rem", letterSpacing: "0.2px", color: "#fff" }}>Thedigiorb</span>
        </div>

        {/* Desktop nav links */}
        <ul className="desktop-nav flex gap-9 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="no-underline text-sm font-[450] nav-link-item"
                style={{ color: "var(--color-white-85)" }}
                onMouseOver={(e) => ((e.target as HTMLElement).style.color = "white")}
                onMouseOut={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-white-85)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div style={{ display: "flex", gap: "12px" }} className="desktop-nav">
          {[<TwitterIcon />, <LinkedInIcon />, <InstagramIcon />].map((Icon, i) => (
            <button
              key={i}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1.5px solid var(--color-white-40)",
                background: "transparent",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.15s, background 0.15s, border-color 0.15s",
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "scale(1.1)";
                el.style.background = "#F97316";
                el.style.borderColor = "#F97316";
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "scale(1)";
                el.style.background = "transparent";
                el.style.borderColor = "var(--color-white-40)";
              }}
            >
              {Icon}
            </button>
          ))}
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="mobile-menu-btn bg-transparent border-none text-white cursor-pointer p-1 flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 bg-white rounded-sm transition-transform duration-200"
            />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7"
          style={{ background: "var(--color-drawer)" }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 bg-transparent border-none text-white text-3xl cursor-pointer"
          >
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white no-underline text-[1.6rem] font-bold"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    <style>{`
      .nav-link-item {
        position: relative;
      }
      .nav-link-item::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 50%;
        width: 0;
        height: 2px;
        background: #F97316;
        border-radius: 2px;
        transition: width 0.25s ease, left 0.25s ease;
      }
      .nav-link-item:hover::after {
        width: 100%;
        left: 0;
      }
    `}</style>
    </>
  );
}
