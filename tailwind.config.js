/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "JarBlue-1": "#7598BC",
        "JarBlue-2": "#243c5a",
        "JarBlue-3": "#1D324D",
        "JarGray-1": "#575757",
        "JarGray-2": "#EAEAEE",
        "JarGray-3": "#EFEFEE",
        "JarGray-4": "#F9F9F9",
      },
      fontFamily: {
        'proxima-nova': ['Proxima Nova', 'sans-serif'],
        'proxima-nova-bold': ['Proxima Nova Bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
