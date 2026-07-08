import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0B0F",
        elevated: "#121212",
        surface: "#1D1D1D",
        gold: {
          DEFAULT: "#C99A3C",
          light: "#F6C94A",
        },
        cream: "#FFF3D6",
        red: {
          DEFAULT: "#F74747",
          light: "#FE6868",
          deep: "#6B1019",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 40px -8px rgba(201, 154, 60, 0.45)",
        "gold-glow-lg": "0 0 80px -12px rgba(244, 201, 107, 0.35)",
        "soft": "0 8px 30px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(201,154,60,0.12), transparent 60%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
