import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF9F7",
          dark: "#F5F0E8",
        },
        pearl: "#F8F4EE",
        champagne: "#E8D5B0",
        beige: "#D9C5A0",
        stone: {
          light: "#C4B9A5",
          DEFAULT: "#A89882",
          dark: "#7A6E62",
        },
        warm: {
          black: "#1A1917",
          dark: "#2C2820",
          brown: "#4A3F32",
        },
        gold: {
          light: "#D4B870",
          DEFAULT: "#C4A355",
          dark: "#9E7E35",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "ultra-wide": "0.35em",
        luxury: "0.25em",
        editorial: "0.18em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
        editorial: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};

export default config;
