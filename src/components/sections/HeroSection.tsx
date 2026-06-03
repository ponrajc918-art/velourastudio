"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "600px", backgroundColor: "#141210" }}
    >
      {/* ═══════════════════════════════════════════════════════════
          CINEMATIC VIDEO — autoplay / loop / muted — NEVER stops
          ═══════════════════════════════════════════════════════════ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/assets/videos/ad001.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradient — depth + legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(14,12,10,0.42) 0%, rgba(14,12,10,0.08) 48%, rgba(14,12,10,0.72) 100%)",
        }}
      />

      {/* Vignette — editorial focus toward center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 78% 88% at 50% 50%, transparent 42%, rgba(10,9,8,0.52) 100%)",
        }}
      />

      {/* ═══════════════════════════════════════════════════════════
          BRAND IDENTITY OVERLAY
          ═══════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <div className="text-center">

          {/* Top vertical accent line */}
          <motion.div
            className="mx-auto mb-8"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transformOrigin: "top",
              width: "1px",
              height: "54px",
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.38))",
            }}
          />

          {/* EST. label */}
          <motion.p
            className="font-inter"
            style={{
              fontSize: "0.56rem",
              letterSpacing: "0.55em",
              color: "rgba(255,255,255,0.38)",
              marginBottom: "1.5rem",
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.8 }}
          >
            EST.&nbsp;&nbsp;MMXX
          </motion.p>

          {/* VELOURA — primary brand mark */}
          <motion.h1
            className="font-playfair font-light"
            style={{
              fontSize: "clamp(2.8rem, 9vw, 7.5rem)",
              letterSpacing: "0.22em",
              lineHeight: 1,
              color: "#FAF9F7",
            }}
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            VELOURA
          </motion.h1>

          {/* Gold hairline divider */}
          <motion.div
            className="mx-auto my-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              height: "1px",
              maxWidth: "260px",
              background:
                "linear-gradient(to right, transparent, rgba(196,163,85,0.55), transparent)",
              transformOrigin: "center",
            }}
          />

          {/* STUDIO */}
          <motion.p
            className="font-inter"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.65em",
              color: "rgba(255,255,255,0.46)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.75 }}
          >
            STUDIO
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="font-cormorant italic"
            style={{
              fontSize: "clamp(1.05rem, 2.6vw, 1.9rem)",
              letterSpacing: "0.07em",
              color: "rgba(255,255,255,0.80)",
              marginTop: "2.2rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.05, ease: [0.16, 1, 0.3, 1] }}
          >
            Crafting Timeless Elegance
          </motion.p>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCROLL INDICATOR
          ═══════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex flex-col items-center gap-3"
        style={{ transform: "translateX(-50%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.0 }}
        aria-hidden="true"
      >
        <motion.div
          style={{
            width: "1px",
            height: "46px",
            background: "rgba(255,255,255,0.28)",
          }}
          animate={{ opacity: [0.2, 0.65, 0.2], scaleY: [0.55, 1, 0.55] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <p
          className="font-inter"
          style={{ fontSize: "0.5rem", letterSpacing: "0.46em", color: "rgba(255,255,255,0.28)" }}
        >
          SCROLL
        </p>
      </motion.div>

    </section>
  );
}
