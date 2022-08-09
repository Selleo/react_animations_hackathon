/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderRadius: {
      "0": "0",
      "base": "4px",
      "full": "999px",
    },
    colors: {
      "black": "#2F3033",
      "white": "#ffffff",
      current: 'currentColor',
      transparent: 'transparent',
      "primary": {
        "100": "#fff8f5",
        "200": "#ffeae0",
        "400": "#ff905d",
        "500": "#ff6d2a",
        "600": "#e25718",
      },
      "secondary": {
        "100": "#f3f8fc",
        "200": "#dfebf6",
        "500": "#5c99d2",
        "600": "#3871a5",
      },
      "neutral": {
        "100": "#f4f5f5",
        "200": "#eaeaeb",
        "300": "#bfc0c4",
        "400": "#95979d",
        "500": "#696b72",
        "600": "#4c4d52",
      },
    },
    dropShadow: {
      DEFAULT: [
        '0 0 16px rgba(47, 48, 51, .1)',
        '0 32px 72px rgba(47, 48, 51, .14)',
      ]
    },
    fontFamily: {
      sans: ["sofia-pro", "sans-serif"],
    },
    fontSize: {
      xs: [".875rem", "1rem"],
      sm: ["1rem", "1rem"],
      md: ["1.125rem", "2rem"],
      lg: ["1.5rem", "2rem"],
      xl: ["2rem", "2rem"],
      "2xl": ["3rem", "3rem"],
    },
    fontWeight: {
      normal: 400,
      bold: 600,
      black: 900,
    },
    letterSpacing: {
      normal: "0%",
      wide: ".01em",
      wider: ".15em",
    },
    spacing: {
      0: "0",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "48px",
      5: "72px",
      6: "144px",
    },
  },
  plugins: [],
}
