import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1a1a1a",
        "secondary-dark": "#404040",
        "light-bg": "#f0f0f0",
        "light-gray": "#e8e8e8",
        "accent-purple": "#7c3aed",
        "accent-dark": "#6d28d9",
        "footer-dark": "#1a2332",
        "text-primary": "#ffffff",
        "text-secondary": "#1a1a1a",
        "text-body": "#666666",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-20px) rotate(2deg)" },
          "50%": { transform: "translateY(-30px) rotate(3deg)" },
          "75%": { transform: "translateY(-15px) rotate(1deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(-2deg)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
