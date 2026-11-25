/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(34px, 5vw, 60px)", { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" }],
        section: ["clamp(34px, 3.2vw, 40px)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        body: ["17px", { lineHeight: "1.65", fontWeight: "400" }],
        eyebrow: ["12px", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "600" }],
        button: ["16px", { lineHeight: "1.4", fontWeight: "600" }],
      },
    },
  },
};
