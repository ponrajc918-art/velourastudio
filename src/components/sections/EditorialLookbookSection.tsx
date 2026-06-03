"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, fadeIn, scaleReveal, stagger, lineReveal, VIEWPORT } from "@/lib/animations";

export default function EditorialLookbookSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      parallaxRefs.current.forEach((el) => {
        if (!el) return;
        gsap.to(el, {
          y: "-11%",
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
      id="editorial"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FAF9F7" }}
    >

      {/* ═══════════ SECTION HEADER ═══════════ */}
      <div className="px-6 md:px-14 lg:px-24 pt-24 md:pt-36 lg:pt-48 pb-16 md:pb-24">
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
            — 04 &nbsp; EDITORIAL LOOKBOOK
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.h2
              variants={fadeUp}
              className="font-playfair font-light"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5.8rem)",
                lineHeight: 0.93,
                letterSpacing: "-0.01em",
                color: "#1A1917",
              }}
            >
              The Edit
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="font-cormorant md:max-w-xs"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.9, color: "#5A5046" }}
            >
              Season after season, we document the woman who wears Veloura —
              her world, her poise, her unspoken confidence.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          variants={lineReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 md:mt-20"
          style={{ height: "1px", background: "linear-gradient(to right, #C4A355, rgba(196,163,85,0.1))" }}
        />
      </div>

      {/* ═══════════ MAIN EDITORIAL GRID ═══════════ */}
      <div className="px-6 md:px-14 lg:px-24 pb-16 md:pb-24">

        {/* Row 1: Portrait (large) + Lifestyle (tall) */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 mb-4 md:mb-5">

          {/* Editorial Portrait — large left */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative overflow-hidden md:w-5/12"
            style={{ height: "clamp(380px, 70vh, 780px)" }}
          >
            <div
              ref={(el) => { parallaxRefs.current[0] = el; }}
              className="absolute inset-0"
              style={{ top: "-12%", bottom: "-12%" }}
            >
              <Image
                src="/assets/images/Editorial_Portrait.webp"
                alt="Veloura Studio — Editorial portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(to top, rgba(26,25,23,0.55), transparent)" }}>
              <p className="font-inter text-white/55" style={{ fontSize: "0.52rem", letterSpacing: "0.38em" }}>
                EDITORIAL — VELOURA ATELIER
              </p>
            </div>
          </motion.div>

          {/* Right column: Lifestyle + Interior */}
          <div className="md:w-7/12 flex flex-col gap-4 md:gap-5">

            {/* Editorial Lifestyle */}
            <motion.div
              variants={scaleReveal}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: 0.15 }}
              className="relative overflow-hidden flex-1"
              style={{ height: "clamp(240px, 40vh, 440px)" }}
            >
              <div
                ref={(el) => { parallaxRefs.current[1] = el; }}
                className="absolute inset-0"
                style={{ top: "-12%", bottom: "-12%" }}
              >
                <Image
                  src="/assets/images/Editorial_Lifestyle.webp"
                  alt="Veloura Studio — Lifestyle editorial"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>
            </motion.div>

            {/* Editorial text block — magazine quote */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="flex-1 flex flex-col justify-center"
              style={{
                backgroundColor: "#F0EBE2",
                padding: "clamp(2rem, 4vw, 4rem)",
                minHeight: "180px",
              }}
            >
              <motion.p
                variants={fadeUp}
                className="font-inter mb-4"
                style={{ fontSize: "0.55rem", letterSpacing: "0.42em", color: "#C4A355" }}
              >
                THE VELOURA WOMAN
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="font-playfair font-light"
                style={{
                  fontSize: "clamp(1.3rem, 2.5vw, 2.1rem)",
                  lineHeight: 1.25,
                  color: "#1A1917",
                }}
              >
                She does not follow trends.
                <br />
                <em className="italic" style={{ color: "#7A6E62" }}>She sets the tone.</em>
              </motion.p>
            </motion.div>

          </div>
        </div>

        {/* Row 2: Boutique Interior — full width, panoramic */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative overflow-hidden"
          style={{ height: "clamp(300px, 50vh, 580px)" }}
        >
          <div
            ref={(el) => { parallaxRefs.current[2] = el; }}
            className="absolute inset-0"
            style={{ top: "-12%", bottom: "-12%" }}
          >
            <Image
              src="/assets/images/Boutique_Interior.webp"
              alt="Veloura Studio — Boutique interior"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(26,25,23,0.55) 0%, rgba(26,25,23,0.08) 50%, transparent 100%)" }}
          />
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-14 lg:px-20">
              <p className="font-inter text-white/50 mb-3" style={{ fontSize: "0.54rem", letterSpacing: "0.44em" }}>
                THE BOUTIQUE
              </p>
              <p
                className="font-playfair font-light text-white/90"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.8rem)", lineHeight: 1.15 }}
              >
                Where the story
                <br />
                begins in person.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ═══════════ EDITORIAL CREDITS ═══════════ */}
      <div className="px-6 md:px-14 lg:px-24 pb-24 md:pb-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          style={{ borderTop: "1px solid rgba(196,163,85,0.2)", paddingTop: "2rem" }}
        >
          <motion.div variants={fadeUp} className="flex gap-8">
            {["Photography", "Styling", "Direction"].map((role) => (
              <div key={role}>
                <p className="font-inter mb-1" style={{ fontSize: "0.5rem", letterSpacing: "0.36em", color: "#C4A355" }}>
                  {role.toUpperCase()}
                </p>
                <p className="font-cormorant" style={{ fontSize: "0.88rem", color: "#5A5046" }}>
                  Veloura Atelier
                </p>
              </div>
            ))}
          </motion.div>
          <motion.p
            variants={fadeIn}
            className="font-inter"
            style={{ fontSize: "0.52rem", letterSpacing: "0.36em", color: "#A89882" }}
          >
            VELOURA STUDIO — THE SEASONAL EDIT
          </motion.p>
        </motion.div>
      </div>

    </section>
  );
}
