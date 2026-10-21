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
        paper: {
          50: "#faf9f6",
          100: "#f6f5f2",
          200: "#eeece8",
          300: "#e2dfd9",
          400: "#cac6be",
        },
        ink: {
          900: "#121212",
          800: "#1e1e1e",
          700: "#2d2d2d",
          600: "#55524e",
          500: "#787571",
        },
        brand: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
      },
      fontFamily: {
        serif: ["Erode", "Newsreader", "Georgia", "serif"],
        heading: ["Erode", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        sans: ["var(--font-inter)", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
