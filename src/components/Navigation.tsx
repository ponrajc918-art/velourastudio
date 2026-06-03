"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Brand Story", href: "#brand-story" },
  { label: "Collections", href: "#collections" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Editorial", href: "#editorial" },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navigation becomes visible after 80% of first viewport height
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-md py-4 shadow-[0_1px_0_rgba(196,163,85,0.15)]"
            : "bg-transparent py-6"
        }`}
        style={{
          opacity: scrolled ? 1 : 0,
          pointerEvents: scrolled ? "auto" : "none",
          transform: scrolled ? "translateY(0)" : "translateY(-100%)",
          transition:
            "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1), background-color 0.6s ease, padding 0.6s ease",
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex flex-col items-start">
            <span
              className="font-playfair text-warm-black tracking-luxury"
              style={{ fontSize: "1rem", letterSpacing: "0.22em" }}
            >
              VELOURA
            </span>
            <span
              className="font-inter text-stone-DEFAULT"
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.48em",
                marginTop: "-2px",
              }}
            >
              STUDIO
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="luxury-link text-warm-black"
                style={{ fontSize: "0.62rem", letterSpacing: "0.32em" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://fashiondesigners.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 font-inter text-[0.6rem] tracking-[0.32em] uppercase text-warm-black border border-warm-black/30 px-5 py-2.5 hover:border-gold hover:text-gold transition-all duration-500"
          >
            Shop Collection
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-warm-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-px bg-warm-black transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`}
            />
            <span
              className={`block h-px w-5 bg-warm-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 49, backgroundColor: "#FAF9F7" }}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-playfair text-2xl text-warm-black tracking-wide hover:text-gold transition-colors duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://fashiondesigners.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 font-inter text-[0.65rem] tracking-[0.35em] uppercase text-warm-black border border-warm-black/30 px-8 py-3 hover:bg-warm-black hover:text-ivory transition-all duration-500"
          >
            Shop Collection
          </a>
        </div>
      </div>
    </>
  );
}
