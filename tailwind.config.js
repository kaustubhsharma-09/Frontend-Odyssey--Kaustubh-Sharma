/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        background: "hsl(220 15% 7%)",
        foreground: "hsl(210 40% 92%)",
        card: "hsl(220 15% 10%)",
        muted: "hsl(220 15% 13%)",
        "muted-foreground": "hsl(215 20% 55%)",
        border: "hsl(220 15% 18%)",
        primary: "hsl(150 100% 45%)",
        accent: "hsl(280 100% 65%)",
        destructive: "hsl(0 80% 60%)",
        green: {
          400: "hsl(150 100% 45%)",
          500: "hsl(150 100% 40%)",
        },
        cyan: {
          400: "hsl(185 100% 55%)",
          500: "hsl(185 100% 45%)",
        },
        yellow: {
          400: "hsl(50 100% 60%)",
        },
        orange: {
          400: "hsl(25 100% 60%)",
        },
        purple: {
          400: "hsl(280 100% 65%)",
          950: "hsl(280 100% 8%)",
        },
        red: {
          400: "hsl(0 80% 60%)",
          950: "hsl(0 80% 8%)",
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "neon-flicker": "neon-flicker 3s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 1s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "neon-flicker": {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
            textShadow:
              "0 0 5px hsl(150 100% 45%), 0 0 10px hsl(150 100% 45%), 0 0 20px hsl(150 100% 45%)",
          },
          "20%, 22%, 24%, 55%": { textShadow: "none" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px hsl(150 100% 45% / 0.3), 0 0 20px hsl(150 100% 45% / 0.1)",
          },
          "50%": {
            boxShadow:
              "0 0 20px hsl(150 100% 45% / 0.6), 0 0 60px hsl(150 100% 45% / 0.3)",
          },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
