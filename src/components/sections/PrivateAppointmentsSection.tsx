"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, fadeIn, scaleReveal, stagger, VIEWPORT } from "@/lib/animations";

export default function PrivateAppointmentsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);
  const imgParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (bgParallaxRef.current) {
        gsap.to(bgParallaxRef.current, {
          y: "-15%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      if (imgParallaxRef.current) {
        gsap.to(imgParallaxRef.current, {
          y: "-10%",
          ease: "none",
          scrollTrigger: {
            trigger: imgParallaxRef.current.parentElement,
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
      id="appointments"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1A1917", minHeight: "100vh" }}
    >

      {/* ═══════════ BACKGROUND IMAGE — Private Appointment Scene ═══════════ */}
      <div className="absolute inset-0">
        <div
          ref={bgParallaxRef}
          className="absolute inset-0"
          style={{ top: "-16%", bottom: "-16%" }}
        >
          <Image
            src="/assets/images/Private_Appointment_Scene.webp"
            alt="Veloura Studio — Private appointment"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Dark overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(18,16,14,0.88) 0%, rgba(18,16,14,0.65) 50%, rgba(18,16,14,0.78) 100%)",
          }}
        />
      </div>

      {/* ═══════════ CONTENT ═══════════ */}
      <div className="relative z-10 px-6 md:px-14 lg:px-24 py-24 md:py-36 lg:py-48">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">

          {/* Left — main content */}
          <div className="lg:w-1/2 xl:w-5/12">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.p
                variants={fadeUp}
                className="font-inter mb-7"
                style={{ fontSize: "0.6rem", letterSpacing: "0.48em", color: "#C4A355" }}
              >
                — 05 &nbsp; PRIVATE APPOINTMENTS
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-playfair font-light mb-8"
                style={{
                  fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                  lineHeight: 0.96,
                  color: "#FAF9F7",
                  letterSpacing: "-0.01em",
                }}
              >
                An Experience
                <br />
                <em className="italic font-light" style={{ color: "rgba(250,249,247,0.65)" }}>Designed</em>
                <br />
                For You
              </motion.h2>

              <motion.div
                variants={fadeIn}
                className="mb-10"
                style={{ width: "56px", height: "1px", background: "rgba(196,163,85,0.7)" }}
              />

              <motion.p
                variants={fadeUp}
                className="font-cormorant mb-8"
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.18rem)",
                  lineHeight: 1.9,
                  color: "rgba(250,249,247,0.65)",
                }}
              >
                Your story deserves a beginning that feels like a dream.
                Step into our private atelier, where time slows, where
                possibilities unfurl, and where your vision transforms into
                something eternal.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="font-cormorant mb-12"
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.18rem)",
                  lineHeight: 1.9,
                  color: "rgba(250,249,247,0.55)",
                }}
              >
                Our stylists curate a selection of pieces tailored exclusively
                to your vision — accompanied by champagne, complete privacy,
                and unhurried time.
              </motion.p>

              {/* Services list */}
              <motion.div variants={stagger} className="mb-12 space-y-4">
                {[
                  "Exclusive one-on-one styling sessions",
                  "Bespoke and made-to-measure consultations",
                  "Early access to new collections",
                  "Complimentary alterations and fitting service",
                ].map((service) => (
                  <motion.div
                    key={service}
                    variants={fadeUp}
                    className="flex items-center gap-4"
                  >
                    <div
                      style={{ width: "24px", height: "1px", flexShrink: 0, background: "#C4A355" }}
                    />
                    <p
                      className="font-cormorant"
                      style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "rgba(250,249,247,0.7)", letterSpacing: "0.02em" }}
                    >
                      {service}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="https://fashiondesigners.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-inter transition-all duration-600"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.38em",
                    color: "#1A1917",
                    backgroundColor: "#FAF9F7",
                    padding: "1rem 2.5rem",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C4A355";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FAF9F7";
                  }}
                >
                  REQUEST AN APPOINTMENT
                </a>
                <div className="flex items-center gap-3">
                  <div style={{ width: "24px", height: "1px", background: "rgba(196,163,85,0.5)" }} />
                  <p className="font-inter" style={{ fontSize: "0.56rem", letterSpacing: "0.3em", color: "rgba(196,163,85,0.7)" }}>
                    BY INVITATION
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* Right — Contact Scene image */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative overflow-hidden lg:w-1/2 xl:w-7/12"
            style={{ height: "clamp(380px, 65vh, 720px)" }}
          >
            <div
              ref={imgParallaxRef}
              className="absolute inset-0"
              style={{ top: "-12%", bottom: "-12%" }}
            >
              <Image
                src="/assets/images/Contact_Section.webp"
                alt="Veloura Studio — The boutique atelier"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Luxury border frame effect */}
            <div
              className="absolute"
              style={{
                inset: "16px",
                border: "1px solid rgba(196,163,85,0.25)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          </motion.div>

        </div>

        {/* ═══════════ CONTACT INFO BAR ═══════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-20 md:mt-28 flex flex-col sm:flex-row gap-8 sm:gap-16"
          style={{ borderTop: "1px solid rgba(250,249,247,0.08)", paddingTop: "2.5rem" }}
        >
          {[
            { label: "LOCATION", value: "By Private Address" },
            { label: "HOURS", value: "Mon–Sat, 10am–6pm" },
            { label: "CONTACT", value: "atelier@velourastudio.com" },
          ].map((item) => (
            <motion.div key={item.label} variants={fadeUp}>
              <p className="font-inter mb-2" style={{ fontSize: "0.52rem", letterSpacing: "0.4em", color: "#C4A355" }}>
                {item.label}
              </p>
              <p className="font-cormorant" style={{ fontSize: "1rem", color: "rgba(250,249,247,0.60)", letterSpacing: "0.02em" }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
