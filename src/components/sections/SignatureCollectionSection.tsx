"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, fadeIn, scaleReveal, stagger, VIEWPORT } from "@/lib/animations";

const looks = [
  {
    image: "/assets/images/Signature_Collection_Look_1.webp",
    number: "I",
    name: "The Drape",
    subtitle: "Signature Collection",
    description:
      "Where silk meets silhouette. The Drape collection flows with the woman who wears it — liquid satin following every movement with quiet grace.",
    alt: "Veloura Studio — The Drape Collection",
  },
  {
    image: "/assets/images/Signature_Collection_Look_2.webp",
    number: "II",
    name: "The Aria",
    subtitle: "Signature Collection",
    description:
      "Understated power expressed through clean lines and considered proportion. The Aria speaks softly and is heard across the room.",
    alt: "Veloura Studio — The Aria Collection",
  },
  {
    image: "/assets/images/Signature_Collection_Look_3.webp",
    number: "III",
    name: "The Signature",
    subtitle: "Signature Collection",
    description:
      "Our most refined expression. Architectural draping, couture construction, and a silhouette refined over hundreds of iterations.",
    alt: "Veloura Studio — The Signature Collection",
  },
];

export default function SignatureCollectionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      parallaxRefs.current.forEach((el) => {
        if (!el) return;
        gsap.to(el, {
          y: "-14%",
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1A1917" }}
    >
      {/* ═══════════ SECTION HEADER ═══════════ */}
      <div className="px-6 md:px-14 lg:px-24 pt-24 md:pt-36 lg:pt-48 pb-20 md:pb-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.p
            variants={fadeUp}
            className="font-inter mb-6"
            style={{ fontSize: "0.6rem", letterSpacing: "0.48em", color: "#C4A355" }}
          >
            — 02 &nbsp; SIGNATURE COLLECTIONS
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-playfair font-light"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.8rem)",
              lineHeight: 0.93,
              letterSpacing: "-0.01em",
              color: "#FAF9F7",
              maxWidth: "700px",
            }}
          >
            Crafted to
            <br />
            <em className="italic" style={{ color: "rgba(250,249,247,0.65)" }}>Define You</em>
          </motion.h2>
        </motion.div>
      </div>

      {/* ═══════════ LOOK 1 — Full panel with overlay ═══════════ */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative overflow-hidden mx-6 md:mx-14 lg:mx-24 mb-4"
        style={{ height: "clamp(420px, 80vh, 860px)" }}
      >
        <div
          ref={(el) => { parallaxRefs.current[0] = el; }}
          className="absolute inset-0"
          style={{ top: "-14%", bottom: "-14%" }}
        >
          <Image
            src={looks[0].image}
            alt={looks[0].alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 85vw"
            priority
          />
        </div>
        {/* Bottom gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(26,25,23,0.85) 0%, rgba(26,25,23,0.15) 55%, transparent 100%)" }}
        />
        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 lg:p-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.p variants={fadeUp} className="font-inter mb-3" style={{ fontSize: "0.56rem", letterSpacing: "0.48em", color: "rgba(196,163,85,0.85)" }}>
              {looks[0].subtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-end gap-5">
              <span className="font-cormorant italic" style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)", color: "rgba(250,249,247,0.18)", lineHeight: 0.85 }}>
                {looks[0].number}
              </span>
              <h3 className="font-playfair font-light" style={{ fontSize: "clamp(1.8rem, 4vw, 3.8rem)", color: "#FAF9F7", lineHeight: 1 }}>
                {looks[0].name}
              </h3>
            </motion.div>
            <motion.p variants={fadeUp} className="font-cormorant mt-5 max-w-md" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)", lineHeight: 1.85, color: "rgba(250,249,247,0.62)" }}>
              {looks[0].description}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* ═══════════ LOOKS 2 & 3 — Side by side ═══════════ */}
      <div className="flex flex-col sm:flex-row gap-4 mx-6 md:mx-14 lg:mx-24 mb-4">
        {looks.slice(1).map((look, idx) => (
          <motion.div
            key={look.number}
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ delay: idx * 0.15 }}
            className="relative overflow-hidden flex-1"
            style={{ height: "clamp(360px, 60vh, 680px)" }}
          >
            <div
              ref={(el) => { parallaxRefs.current[idx + 1] = el; }}
              className="absolute inset-0"
              style={{ top: "-14%", bottom: "-14%" }}
            >
              <Image
                src={look.image}
                alt={look.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 45vw"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(26,25,23,0.82) 0%, rgba(26,25,23,0.08) 60%, transparent 100%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
              <p className="font-inter mb-2" style={{ fontSize: "0.54rem", letterSpacing: "0.44em", color: "rgba(196,163,85,0.8)" }}>
                {look.subtitle}
              </p>
              <div className="flex items-end gap-4">
                <span className="font-cormorant italic" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "rgba(250,249,247,0.15)", lineHeight: 0.85 }}>
                  {look.number}
                </span>
                <h3 className="font-playfair font-light" style={{ fontSize: "clamp(1.4rem, 3vw, 2.8rem)", color: "#FAF9F7", lineHeight: 1 }}>
                  {look.name}
                </h3>
              </div>
              <p className="font-cormorant mt-4 hidden md:block" style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(250,249,247,0.56)" }}>
                {look.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ═══════════ SECTION FOOTER ═══════════ */}
      <div className="px-6 md:px-14 lg:px-24 py-20 md:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <motion.p
            variants={fadeUp}
            className="font-cormorant italic"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)", color: "rgba(250,249,247,0.65)", maxWidth: "520px" }}
          >
            Each silhouette is born from years of studying the way light meets
            fabric, the way movement tells a story.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href="https://fashiondesigners.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-inter transition-all duration-500"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.38em",
                color: "#FAF9F7",
                border: "1px solid rgba(250,249,247,0.25)",
                padding: "1rem 2.5rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C4A355";
                (e.currentTarget as HTMLAnchorElement).style.color = "#C4A355";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(250,249,247,0.25)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#FAF9F7";
              }}
            >
              VIEW ALL COLLECTIONS
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
