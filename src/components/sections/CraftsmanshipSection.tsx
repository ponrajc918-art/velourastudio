"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, fadeIn, scaleReveal, stagger, lineReveal, VIEWPORT } from "@/lib/animations";

const craftDetails = [
  {
    image: "/assets/images/Craftsmanship_Materials.webp",
    label: "MATERIALS",
    heading: "The Finest Provenance",
    body: "We source silk organza from Como, hand-dyed lace from Calais, and pearls selected by hand from ateliers that have served couture houses for generations.",
    alt: "Veloura Studio — Craftsmanship materials and tools",
  },
  {
    image: "/assets/images/Craftsmanship_Fabric.webp",
    label: "FABRIC & TEXTURE",
    heading: "Texture as Language",
    body: "Every textile is chosen for how it moves, how it catches light, and how it feels against the skin. Fabric is not a backdrop — it is the voice of the garment.",
    alt: "Veloura Studio — Luxurious fabric details",
  },
  {
    image: "/assets/images/Craftsmanship_Handwork.webp",
    label: "ARTISAN HANDS",
    heading: "The Human Touch",
    body: "Beadwork, embroidery, and finishing are completed by artisans who have dedicated decades to their craft. No machine can replicate the intentionality behind every stitch.",
    alt: "Veloura Studio — Artisan handwork on couture dress",
  },
];

export default function CraftsmanshipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      parallaxRefs.current.forEach((el) => {
        if (!el) return;
        gsap.to(el, {
          y: "-12%",
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
      id="craftsmanship"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F7F2EB" }}
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
            — 03 &nbsp; CRAFTSMANSHIP
          </motion.p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
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
              Every Thread,
              <br />
              <em className="italic" style={{ color: "#7A6E62" }}>A Story</em>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="font-cormorant lg:max-w-xs xl:max-w-sm"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.9, color: "#5A5046" }}
            >
              Our process combines ancient traditions with contemporary
              vision. Every garment passes through the hands of artisans
              who treat each creation as their finest work.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={lineReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 md:mt-20"
          style={{ height: "1px", background: "linear-gradient(to right, #C4A355, rgba(196,163,85,0.1))" }}
        />
      </div>

      {/* ═══════════ THREE CRAFT DETAILS ═══════════ */}
      <div className="px-6 md:px-14 lg:px-24 pb-24 md:pb-40">

        {craftDetails.map((item, idx) => (
          <div
            key={item.label}
            className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 lg:gap-14 items-center mb-16 md:mb-24 last:mb-0`}
          >

            {/* Image */}
            <motion.div
              variants={scaleReveal}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="relative overflow-hidden w-full lg:w-7/12"
              style={{ height: "clamp(340px, 55vh, 640px)" }}
            >
              <div
                ref={(el) => { parallaxRefs.current[idx] = el; }}
                className="absolute inset-0"
                style={{ top: "-14%", bottom: "-14%" }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              {/* Subtle label badge */}
              <div
                className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm px-4 py-2"
              >
                <p className="font-inter" style={{ fontSize: "0.54rem", letterSpacing: "0.4em", color: "#C4A355" }}>
                  {item.label}
                </p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="lg:w-5/12 py-4"
            >
              <motion.p
                variants={fadeUp}
                className="font-inter mb-5"
                style={{ fontSize: "0.56rem", letterSpacing: "0.44em", color: "#C4A355" }}
              >
                {item.label}
              </motion.p>
              <motion.h3
                variants={fadeUp}
                className="font-playfair font-light mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  lineHeight: 1.05,
                  color: "#1A1917",
                }}
              >
                {item.heading}
              </motion.h3>
              <motion.div
                variants={lineReveal}
                className="mb-6"
                style={{ height: "1px", maxWidth: "56px", background: "#C4A355" }}
              />
              <motion.p
                variants={fadeUp}
                className="font-cormorant"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.9, color: "#5A5046" }}
              >
                {item.body}
              </motion.p>
            </motion.div>

          </div>
        ))}

      </div>

      {/* ═══════════ CLOSING QUOTE ═══════════ */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="text-center px-6 md:px-14 lg:px-24 pb-24 md:pb-40"
        style={{ borderTop: "1px solid rgba(196,163,85,0.2)", paddingTop: "4rem" }}
      >
        <motion.p
          variants={fadeUp}
          className="font-inter mb-8"
          style={{ fontSize: "0.56rem", letterSpacing: "0.44em", color: "#C4A355" }}
        >
          THE VELOURA ATELIER
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="font-playfair font-light mx-auto"
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 3.2rem)",
            lineHeight: 1.25,
            color: "#1A1917",
            maxWidth: "760px",
          }}
        >
          Not manufactured.
          <br />
          <em className="italic font-light" style={{ color: "#7A6E62" }}>
            Made by hand. Made with love. Made to last.
          </em>
        </motion.p>
      </motion.div>

    </section>
  );
}
