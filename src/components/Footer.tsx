"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";

const navLinks = [
  { label: "Brand Story", href: "#brand-story" },
  { label: "Collections", href: "#collections" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Editorial", href: "#editorial" },
  { label: "Appointments", href: "#appointments" },
];

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "#0A0908" }}
      className="relative overflow-hidden"
    >
      {/* Subtle top gradient */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(196,163,85,0.22), transparent)" }}
      />

      {/* Main Footer Content */}
      <div className="px-6 md:px-14 lg:px-24 pt-20 md:pt-28 lg:pt-36 pb-10 md:pb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >

          {/* Top row — Brand + Nav + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-14 mb-20 md:mb-28">

            {/* Brand Identity */}
            <motion.div variants={fadeUp} className="lg:max-w-xs">
              <h2
                className="font-playfair font-light mb-3"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  letterSpacing: "0.14em",
                  color: "#FAF9F7",
                  lineHeight: 1,
                }}
              >
                VELOURA
              </h2>
              <div
                className="mb-4"
                style={{
                  height: "1px",
                  maxWidth: "80px",
                  background: "linear-gradient(to right, #C4A355, transparent)",
                }}
              />
              <p
                className="font-inter mb-6"
                style={{ fontSize: "0.58rem", letterSpacing: "0.6em", color: "rgba(250,249,247,0.38)" }}
              >
                STUDIO
              </p>
              <p
                className="font-cormorant italic"
                style={{ fontSize: "1.05rem", color: "rgba(250,249,247,0.45)", lineHeight: 1.7 }}
              >
                Crafting Timeless Elegance
              </p>
              <p
                className="font-cormorant mt-4"
                style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(250,249,247,0.32)" }}
              >
                A luxury atelier dedicated to the art of bespoke fashion.
                Where every garment is a story waiting to be told.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={fadeUp} className="flex flex-col gap-5">
              <p
                className="font-inter mb-2"
                style={{ fontSize: "0.52rem", letterSpacing: "0.44em", color: "#C4A355" }}
              >
                NAVIGATE
              </p>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-inter transition-colors duration-300"
                  style={{ fontSize: "0.62rem", letterSpacing: "0.28em", color: "rgba(250,249,247,0.45)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,249,247,0.85)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,249,247,0.45)"; }}
                >
                  {link.label.toUpperCase()}
                </a>
              ))}
            </motion.div>

            {/* Contact & CTA */}
            <motion.div variants={fadeUp} className="lg:max-w-xs">
              <p
                className="font-inter mb-6"
                style={{ fontSize: "0.52rem", letterSpacing: "0.44em", color: "#C4A355" }}
              >
                THE ATELIER
              </p>
              <p
                className="font-cormorant mb-2"
                style={{ fontSize: "1rem", color: "rgba(250,249,247,0.50)" }}
              >
                atelier@velourastudio.com
              </p>
              <p
                className="font-cormorant mb-10"
                style={{ fontSize: "1rem", color: "rgba(250,249,247,0.35)" }}
              >
                By Private Appointment Only
              </p>

              <a
                href="https://fashiondesigners.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-inter transition-all duration-500"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.36em",
                  color: "#FAF9F7",
                  border: "1px solid rgba(250,249,247,0.22)",
                  padding: "0.9rem 2.2rem",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "#C4A355";
                  el.style.color = "#C4A355";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(250,249,247,0.22)";
                  el.style.color = "#FAF9F7";
                }}
              >
                SHOP COLLECTION
              </a>
            </motion.div>

          </div>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            style={{
              height: "1px",
              background: "linear-gradient(to right, transparent, rgba(250,249,247,0.08), transparent)",
              marginBottom: "2rem",
            }}
          />

          {/* Bottom row */}
          <motion.div
            variants={stagger}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <motion.p
              variants={fadeUp}
              className="font-inter"
              style={{ fontSize: "0.52rem", letterSpacing: "0.32em", color: "rgba(250,249,247,0.22)" }}
            >
              © {currentYear} VELOURA STUDIO. ALL RIGHTS RESERVED.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-inter transition-colors duration-300"
                  style={{ fontSize: "0.5rem", letterSpacing: "0.28em", color: "rgba(250,249,247,0.22)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,249,247,0.5)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,249,247,0.22)"; }}
                >
                  {item.toUpperCase()}
                </a>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
}
