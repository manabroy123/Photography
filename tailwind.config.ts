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
        background: "#080808",
        surface: "#111111",
        "surface-light": "#171717",
        "surface-card": "#131313",
        // Light yellow primary palette
        primary: {
          DEFAULT: "#fef08a", // Tailwind yellow-200 (warm light yellow)
          light: "#fef9c3",   // Tailwind yellow-100 (pale soft yellow)
          hover: "#fffbeb",   // ultra soft yellow
          accent: "#fde047",  // Tailwind yellow-300
          dark: "#eab308",    // deep gold accent
          muted: "rgba(254, 240, 138, 0.12)",
          border: "rgba(254, 240, 138, 0.25)",
        },
        border: "rgba(255, 255, 255, 0.08)",
        "border-hover": "rgba(254, 240, 138, 0.3)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.2em",
        "ultra-wide": "0.3em",
      },
      boxShadow: {
        "yellow-glow": "0 0 35px -5px rgba(254, 240, 138, 0.25)",
        "yellow-sm": "0 0 15px -3px rgba(254, 240, 138, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
