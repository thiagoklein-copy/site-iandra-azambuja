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
        background: "#F7F3EE",
        surface: "#FFFFFF",
        accent: {
          DEFAULT: "#5B7C99",
          dark: "#425A70",
        },
        primary: "#211F1D",
        muted: "#6B6058",
        border: "#E7DDD0",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -12px rgba(33, 31, 29, 0.16)",
        card: "0 8px 28px -10px rgba(33, 31, 29, 0.12)",
        float: "0 10px 30px -8px rgba(33, 31, 29, 0.18)",
      },
      borderRadius: {
        soft: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
