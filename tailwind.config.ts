import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#11100E",
        espresso: "#1C1814",
        ivory: "#F5EBDD",
        sand: "#CBBBA0",
        gold: "#C49A4A",
        bottle: "#2F5D50",
        copper: "#A45A3A",
        bronze: "#5A4632",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(196, 154, 74, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;