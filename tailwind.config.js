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
        ], // h1: 60px 300 weight
        h2: [
          "2.5rem",
          { lineHeight: "1", fontWeight: "100", letterSpacing: "2px" },
        ], // h2: 40px 300 weight
        h3: [
          "2.25rem",
          { lineHeight: "1.25", fontWeight: "100", letterSpacing: "2px" },
        ], // h3: 36px 300 weight
        h4: ["1.25rem", { lineHeight: "1.25", fontWeight: "300" }], // h4: 20px 300 weight
        h5: ["1rem", { lineHeight: "1", fontWeight: "100" }], // h5: 16px 300 weight
        h6: ["0.875rem", { lineHeight: "1", fontWeight: "300" }], // h6: 14px 300 weight
      },
      container: {
        center: true, // this will center the container
        padding: "1rem", // default padding for container
        screens: {
          sm: "640px", // custom width for sm breakpoint
          md: "768px", // custom width for md breakpoint
          lg: "1024px", // custom width for lg breakpoint
          xl: "1280px", // custom width for xl breakpoint
          "2xl": "1440px", // custom width for 2xl breakpoint
        },
      },
    },
  },
  plugins: [],
};
