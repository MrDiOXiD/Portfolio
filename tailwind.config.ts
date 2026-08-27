import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep bed the whole page sits on — near-black teal, not pure black.
        bed: "#071416",
        // Glass panels floating on the bed.
        panel: "#0A2928",
        panel2: "#0B2227",
        // Three-note accent chord, carried over from the source identity
        // and tuned for a calmer, editorial reading.
        turquoise: "#43EAD3",
        blue: "#4387FF",
        purple: "#9B6CFF",
        // Text
        mist: "#DCFFF7",
        muted: "#79AAA4",
        hairline: "#175450",
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", "Tahoma", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        aurora:
          "radial-gradient(60% 50% at 20% 15%, rgba(67,234,211,0.16) 0%, rgba(67,234,211,0) 60%), radial-gradient(55% 45% at 85% 10%, rgba(67,135,255,0.14) 0%, rgba(67,135,255,0) 60%), radial-gradient(50% 40% at 50% 100%, rgba(155,108,255,0.12) 0%, rgba(155,108,255,0) 60%)",
        grain: "url('/images/noise.svg')",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.04)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", filter: "blur(2px)" },
          "50%": { opacity: "1", filter: "blur(0.5px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        drift: "drift 14s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
