// Shared animation variants for luxury editorial experience
// Used with Framer Motion's motion components and whileInView

export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;
export const EDITORIAL_EASE = [0.25, 0.46, 0.45, 0.94] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 64 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: LUXURY_EASE },
  },
};

export const fadeUpSlow = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, ease: LUXURY_EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: LUXURY_EASE },
  },
};

export const lineReveal = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease: LUXURY_EASE },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

export const staggerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

// Viewport settings for scroll triggers
export const VIEWPORT = {
  once: true,
  margin: "-80px 0px",
};

export const VIEWPORT_EARLY = {
  once: true,
  margin: "-40px 0px",
};
