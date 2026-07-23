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
        background: "#F7F2EA",
        surface: "#FFFFFF",
        accent: {
          DEFAULT: "#C2703F",
          dark: "#9C5730",
        },
        primary: "#2B2420",
        muted: "#6B6058",
        border: "#E7DDD0",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -12px rgba(43, 36, 32, 0.16)",
        card: "0 8px 28px -10px rgba(43, 36, 32, 0.12)",
        float: "0 10px 30px -8px rgba(43, 36, 32, 0.18)",
      },
      borderRadius: {
        soft: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
