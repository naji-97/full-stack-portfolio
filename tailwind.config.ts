import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    screens: {
      // xs: "480px",
      // sm: "640px",
      // md: "768px",
      // lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },
    fontFamily: {
      primary:"var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent:{
          DEFAULT: "#00ff99",
          hover: "#00e187",
        }

      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-down 0.3s ease-out reverse",},
    },
  },
  plugins: [],
}

export default config



