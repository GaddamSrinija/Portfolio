import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        surface: "#12161F",
        "surface-2": "#171C27",
        hairline: "#232935",
        "hairline-strong": "#2E3644",
        ink: "#E8EAED",
        muted: "#8B93A1",
        faint: "#5A6272",
        amber: "#E8A33D",
        "amber-dim": "#B9812E",
        cyan: "#4FD1C5",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1A1F2B 1px, transparent 1px), linear-gradient(to bottom, #1A1F2B 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateX(-4%)" },
          "100%": { transform: "translateX(104%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        scan: "scan 3.6s ease-in-out infinite alternate",
        blink: "blink 2s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
