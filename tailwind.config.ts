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
        cream: {
          DEFAULT: "#F7F3EC",
          soft: "#FBF8F3",
          deep: "#EDE6DA",
        },
        terracotta: {
          DEFAULT: "#C97B4A",
          dark: "#A85F35",
          light: "#E4A67A",
        },
        ink: {
          DEFAULT: "#2C2622",
          muted: "#5C534C",
          soft: "#7A7168",
        },
        sand: "#E8DFD2",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -12px rgba(44, 38, 34, 0.18)",
        card: "0 8px 28px -10px rgba(44, 38, 34, 0.14)",
        float: "0 10px 30px -8px rgba(44, 38, 34, 0.2)",
      },
      borderRadius: {
        soft: "1.25rem",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
