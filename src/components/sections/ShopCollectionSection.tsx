"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, fadeIn, scaleReveal, stagger, VIEWPORT } from "@/lib/animations";

export default function ShopCollectionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);
  const heroImgParallaxRef = useRef<HTMLDivElement>(null);
  const closingImgParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      [bgParallaxRef, heroImgParallaxRef, closingImgParallaxRef].forEach((ref) => {
        if (!ref.current) return;
        gsap.to(ref.current, {
          y: "-14%",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current.parentElement,
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
      id="shop"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0F0D0B" }}
    >

      {/* ═══════════ CINEMATIC BACKGROUND ═══════════ */}
      <div className="absolute inset-0">
        <div
          ref={bgParallaxRef}
          className="absolute inset-0"
          style={{ top: "-15%", bottom: "-15%" }}
        >
          <Image
            src="/assets/images/Shop_Collection_Background.webp"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        {/* Heavy overlay — mood-setting dark veil */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(10,9,8,0.94) 0%, rgba(10,9,8,0.80) 45%, rgba(10,9,8,0.55) 100%)",
          }}
        />
      </div>

      {/* ═══════════ MAIN CONTENT GRID ═══════════ */}
      <div className="relative z-10 px-6 md:px-14 lg:px-24 py-24 md:py-36 lg:py-56">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-12 xl:gap-20">

          {/* Left — editorial CTA text */}
          <div className="lg:w-5/12 xl:w-5/12">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.p
                variants={fadeUp}
                className="font-inter mb-8"
                style={{ fontSize: "0.6rem", letterSpacing: "0.48em", color: "#C4A355" }}
              >
                — 06 &nbsp; THE COLLECTION
              </motion.p>

              {/* Massive editorial display text */}
              <motion.div variants={fadeUp}>
                <h2
                  className="font-playfair font-light"
                  style={{
                    fontSize: "clamp(4rem, 10vw, 9.5rem)",
                    lineHeight: 0.88,
                    letterSpacing: "-0.01em",
                    color: "#FAF9F7",
                  }}
                >
                  SHOP
                </h2>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h2
                  className="font-playfair font-light italic"
                  style={{
                    fontSize: "clamp(4rem, 10vw, 9.5rem)",
                    lineHeight: 0.88,
                    letterSpacing: "-0.01em",
                    color: "rgba(250,249,247,0.35)",
                    marginBottom: "2.5rem",
                  }}
                >
                  NOW
                </h2>
              </motion.div>

              {/* Gold divider */}
              <motion.div
                variants={fadeIn}
                className="mb-8"
                style={{
                  height: "1px",
                  maxWidth: "80px",
                  background: "linear-gradient(to right, #C4A355, transparent)",
                }}
              />

              <motion.p
                variants={fadeUp}
                className="font-cormorant mb-10"
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.18rem)",
                  lineHeight: 1.9,
                  color: "rgba(250,249,247,0.60)",
                  maxWidth: "420px",
                }}
              >
                Step into the world of Veloura. Discover pieces crafted
                for women who understand the quiet power of refined
                elegance — built to be worn, built to be remembered.
              </motion.p>

              {/* Feature points */}
              <motion.div variants={stagger} className="mb-12 space-y-3">
                {["Free global shipping on all orders", "Complimentary gift wrapping", "30-day returns & exchanges"].map((point) => (
                  <motion.div key={point} variants={fadeUp} className="flex items-center gap-3">
                    <div style={{ width: "20px", height: "1px", flexShrink: 0, background: "rgba(196,163,85,0.55)" }} />
                    <p className="font-inter" style={{ fontSize: "0.6rem", letterSpacing: "0.25em", color: "rgba(250,249,247,0.45)" }}>
                      {point.toUpperCase()}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* SHOP NOW — primary CTA */}
              <motion.div variants={fadeUp}>
                <a
                  href="https://fashiondesigners.vercel.app/?ref=veloura-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-5 font-inter transition-all duration-600"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.38em",
                    color: "#0F0D0B",
                    backgroundColor: "#FAF9F7",
                    padding: "1.15rem 3rem",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "#C4A355";
                    el.style.color = "#FAF9F7";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = "#FAF9F7";
                    el.style.color = "#0F0D0B";
                  }}
                >
                  SHOP NOW
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M1 4H13M10 1L13 4L10 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>

            </motion.div>
          </div>

          {/* Right — editorial images column */}
          <div className="lg:w-7/12 xl:w-7/12 flex flex-col sm:flex-row gap-4 lg:gap-5">

            {/* Shop Collection Hero — main portrait */}
            <motion.div
              variants={scaleReveal}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="relative overflow-hidden flex-1"
              style={{ height: "clamp(380px, 68vh, 760px)" }}
            >
              <div
                ref={heroImgParallaxRef}
                className="absolute inset-0"
                style={{ top: "-14%", bottom: "-14%" }}
              >
                <Image
                  src="/assets/images/Shop_Collection_Hero.webp"
                  alt="Veloura Studio — Shop the collection"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                />
              </div>
              {/* Gradient bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: "40%",
                  background: "linear-gradient(to top, rgba(10,9,8,0.65), transparent)",
                }}
              />
            </motion.div>

            {/* Final Cinematic Closing Image */}
            <motion.div
              variants={scaleReveal}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: 0.18 }}
              className="relative overflow-hidden flex-1"
              style={{ height: "clamp(380px, 68vh, 760px)" }}
            >
              <div
                ref={closingImgParallaxRef}
                className="absolute inset-0"
                style={{ top: "-14%", bottom: "-14%" }}
              >
                <Image
                  src="/assets/images/Final_Cinematic_Closing_Image.webp"
                  alt="Veloura Studio — The final scene"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: "40%",
                  background: "linear-gradient(to top, rgba(10,9,8,0.65), transparent)",
                }}
              />
            </motion.div>

          </div>

        </div>
      </div>

      {/* ═══════════ BRAND CLOSING LINE ═══════════ */}
      <div
        className="relative z-10 px-6 md:px-14 lg:px-24 pb-16 md:pb-24 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        style={{ borderTop: "1px solid rgba(250,249,247,0.06)", paddingTop: "2.5rem" }}
      >
        <div>
          <p className="font-playfair font-light" style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)", color: "rgba(250,249,247,0.38)", letterSpacing: "0.14em" }}>
            VELOURA STUDIO
          </p>
        </div>
        <p className="font-cormorant italic" style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)", color: "rgba(250,249,247,0.28)" }}>
          Crafting Timeless Elegance
        </p>
        <p className="font-inter" style={{ fontSize: "0.52rem", letterSpacing: "0.36em", color: "rgba(250,249,247,0.22)" }}>
          EST. MMXX
        </p>
      </div>

    </section>
  );
}
