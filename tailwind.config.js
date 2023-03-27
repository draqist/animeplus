const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["2rem", { lineHeight: "3rem" }],
      "4xl": ["2.5rem", { lineHeight: "3rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    boxShadow: {
      sm: "0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)",
      md: "0 4px 4px rgba(0,0,0,0.16)",
      lg: "0 8px 16px rgba(0,0,0,0.24)",
    },
    extend: {
      fontFamily: {
        sans: ["Whitney", "Open Sans", ...defaultTheme.fontFamily.sans],
        title: ["Ginto", "Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: "#5965F2",
        gray: {
          50: "#ECEDEE",
          100: "#DCDDDE",
          200: "#B9BBBE",
          300: "#8E9297",
          400: "#72767D",
          500: "#5C6067",
          550: "#4f545c",
          600: "#464950",
          700: "#36393F",
          800: "#2F3136",
          900: "#202225",
          950: "#040405",
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s linear forwards",
        marquee: "marquee var(--marquee-duration) linear infinite",
        "spin-slow": "spin 4s linear infinite",
        "spin-slower": "spin 6s linear infinite",
        "spin-reverse": "spin-reverse 1s linear infinite",
        "spin-reverse-slow": "spin-reverse 4s linear infinite",
        "spin-reverse-slower": "spin-reverse 6s linear infinite",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      colors: ({ colors }) => ({
        gray: colors.neutral,
      }),
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "spin-reverse": {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
      maxWidth: {
        "2xl": "40rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
