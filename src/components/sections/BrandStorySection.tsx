"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, fadeIn, scaleReveal, stagger, lineReveal, VIEWPORT } from "@/lib/animations";

export default function BrandStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgHeroParallaxRef = useRef<HTMLDivElement>(null);
  const imgDetailParallaxRef = useRef<HTMLDivElement>(null);
  const imgPortraitParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Parallax on brand hero image
      if (imgHeroParallaxRef.current) {
        gsap.to(imgHeroParallaxRef.current, {
          y: "-12%",
          ease: "none",
          scrollTrigger: {
            trigger: imgHeroParallaxRef.current.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      // Parallax on detail image
      if (imgDetailParallaxRef.current) {
        gsap.to(imgDetailParallaxRef.current, {
          y: "-10%",
          ease: "none",
          scrollTrigger: {
            trigger: imgDetailParallaxRef.current.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      // Parallax on portrait
      if (imgPortraitParallaxRef.current) {
        gsap.to(imgPortraitParallaxRef.current, {
          y: "-8%",
          ease: "none",
          scrollTrigger: {
            trigger: imgPortraitParallaxRef.current.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="brand-story"
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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="font-inter mb-5"
              style={{ fontSize: "0.6rem", letterSpacing: "0.48em", color: "#C4A355" }}
            >
              — 01 &nbsp; BRAND STORY
            </motion.p>
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
              The Art of
              <br />
              <em className="italic" style={{ color: "#4A3F32" }}>Timeless</em>
              <br />
              Elegance
            </motion.h2>
          </div>
          <motion.div
            variants={fadeIn}
            className="md:max-w-xs lg:max-w-sm"
          >
            <p
              className="font-cormorant"
              style={{
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                lineHeight: 1.9,
                color: "#5A5046",
                letterSpacing: "0.01em",
              }}
            >
              Born from a reverence for the rare and the refined, Veloura
              Studio is an atelier where emotional expression takes shape.
              Each piece begins as a whisper — an intuition of beauty —
              and becomes something the world has never quite seen before.
            </p>
          </motion.div>
        </motion.div>

        {/* Gold hairline */}
        <motion.div
          variants={lineReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 md:mt-24"
          style={{ height: "1px", background: "linear-gradient(to right, #C4A355, rgba(196,163,85,0.15))" }}
        />
      </div>

      {/* ═══════════ EDITORIAL SPLIT — Hero Image + Story ═══════════ */}
      <div className="px-6 md:px-14 lg:px-24 pb-16 md:pb-24">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">

          {/* Brand Story Hero Image */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative overflow-hidden lg:w-7/12"
            style={{ minHeight: "560px", height: "clamp(400px, 65vh, 720px)" }}
          >
            <div
              ref={imgHeroParallaxRef}
              className="absolute inset-0"
              style={{ top: "-15%", bottom: "-15%" }}
            >
              <Image
                src="/assets/images/Brand_Story_Hero.webp"
                alt="Veloura Studio — The Atelier"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </motion.div>

          {/* Story content column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="lg:w-5/12 flex flex-col justify-center gap-10 py-6 lg:py-0"
          >
            <motion.div variants={fadeUp}>
              <p
                className="font-cormorant italic mb-6"
                style={{ fontSize: "clamp(1.45rem, 2.5vw, 2.1rem)", lineHeight: 1.5, color: "#2C2820" }}
              >
                &ldquo;We believe elegance is not merely aesthetic. It is a philosophy — a way of moving through the world with intention, grace, and quiet confidence.&rdquo;
              </p>
              <div style={{ width: "56px", height: "1px", background: "#C4A355" }} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <p
                className="font-inter mb-3"
                style={{ fontSize: "0.58rem", letterSpacing: "0.38em", color: "#C4A355" }}
              >
                OUR PHILOSOPHY
              </p>
              <p
                className="font-cormorant"
                style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", lineHeight: 1.9, color: "#5A5046" }}
              >
                Every design that leaves our atelier carries the fingerprint
                of its maker &mdash; the hours spent selecting the finest silks from
                Como, the careful hand-placement of each crystal, the obsessive
                attention to how a hem falls.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p
                className="font-inter mb-3"
                style={{ fontSize: "0.58rem", letterSpacing: "0.38em", color: "#C4A355" }}
              >
                OUR PROMISE
              </p>
              <p
                className="font-cormorant"
                style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", lineHeight: 1.9, color: "#5A5046" }}
              >
                To create pieces that outlast seasons and trends. Garments
                that become part of your story — worn on the days that matter,
                remembered long after.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ═══════════ SECOND EDITORIAL ROW — Detail + Portrait ═══════════ */}
      <div className="px-6 md:px-14 lg:px-24 pb-24 md:pb-40">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">

          {/* Brand Story Detail — embroidery close-up */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative overflow-hidden sm:w-1/2"
            style={{ height: "clamp(280px, 42vh, 520px)" }}
          >
            <div
              ref={imgDetailParallaxRef}
              className="absolute inset-0"
              style={{ top: "-12%", bottom: "-12%" }}
            >
              <Image
                src="/assets/images/Brand_Story_Detail.webp"
                alt="Veloura Studio — Handcrafted detail"
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
            </div>
          </motion.div>

          {/* Editorial portrait — Frozen_Frame_Bridge used as brand story accent */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative overflow-hidden sm:w-1/2"
            style={{ height: "clamp(280px, 42vh, 520px)" }}
            transition={{ delay: 0.15 }}
          >
            <div
              ref={imgPortraitParallaxRef}
              className="absolute inset-0"
              style={{ top: "-12%", bottom: "-12%" }}
            >
              <Image
                src="/assets/images/Frozen_Frame_Bridge.webp"
                alt="Veloura Studio — Editorial portrait"
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
            </div>
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(to top, rgba(26,25,23,0.6), transparent)" }}>
              <p className="font-inter text-white/60" style={{ fontSize: "0.56rem", letterSpacing: "0.38em" }}>
                VELOURA STUDIO — THE ATELIER EDIT
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom editorial quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 md:mt-24 max-w-3xl mx-auto text-center"
        >
          <p
            className="font-cormorant italic"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.6rem)",
              lineHeight: 1.4,
              color: "#2C2820",
              letterSpacing: "0.01em",
            }}
          >
            Every thread is a conversation between artist and material.
            Every stitch, a commitment to the woman who will wear it.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div style={{ flex: 1, height: "1px", maxWidth: "60px", background: "rgba(196,163,85,0.4)" }} />
            <p className="font-inter" style={{ fontSize: "0.56rem", letterSpacing: "0.4em", color: "#C4A355" }}>
              VELOURA STUDIO
            </p>
            <div style={{ flex: 1, height: "1px", maxWidth: "60px", background: "rgba(196,163,85,0.4)" }} />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
