/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4C6EF1",
        primary10: "#4F6BED1A",
        primary35: "#A1B1FB59",
        pb: "#1A1A1A",
        background: "#F7F7F9",
        gray400: "#9CA3AF",
      },
      fontFamily: {
        "Lato-Regular": ["Lato-Regular", "sens-serif"],
        "Lato-Bold": ["Lato-Bold", "sens-serif"],
        "Lato-SemiBold": ["Lato-SemiBold", "sens-serif"],
        "Lato-Medium": ["Lato-Medium", "sens-serif"],
        "Archivo-Regular": ["Archivo-Regular", "sens-serif"],
        "Inter-Regular": ["Inter-Regular", "sens-serif"],
        "Inter-Medium": ["Inter-Medium", "sens-serif"],
        "Inter-SemiBold": ["Inter-SemiBold", "sens-serif"],
        "Inter-Bold": ["Inter-Bold", "sens-serif"],
      },
    },
  },
  plugins: [],
};
