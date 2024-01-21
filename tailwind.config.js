/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#190F14",
        secondary: "#494949",
        accent: "#DBD3CB",
        link: "#007BFF",
        dark: "#242221",
        gray: "#75787B",
        darkGray: "#1B1B1B",
        whiteGray: "#F5F5F5",
        lightGray: "#D5D5D5",
      },
      fontSize: {
        h1: [
          "3.75rem",
          { lineHeight: "1", fontWeight: "100", letterSpacing: "2px" },
        ],
        h2: [
          "2.5rem",
          { lineHeight: "1", fontWeight: "100", letterSpacing: "2px" },
        ],
        h3: [
          "2.25rem",
          { lineHeight: "1.25", fontWeight: "100", letterSpacing: "2px" },
        ],
        h4: ["1.25rem", { lineHeight: "1.25", fontWeight: "300" }],
        h5: ["1rem", { lineHeight: "1", fontWeight: "100" }], //
        h6: ["0.875rem", { lineHeight: "1", fontWeight: "300" }],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};
