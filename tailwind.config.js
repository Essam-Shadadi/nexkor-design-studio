/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        nk: {
          blue: "#1A73E8",      // Primary
          charcoal: "#111827",  // Deep gray
          green: "#10B981",
          yellow: "#FACC15",
          gray: "#E5E7EB",
          bg: "#F9FAFB",
          bgDark: "#0B1220"
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)']
      },
      borderRadius: { xl: "1rem", "2xl": "1.5rem" },
      transitionDuration: { 300: "300ms", 500: "500ms" }
    }
  },
  plugins: []
};
