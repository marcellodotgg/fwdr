/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "16px",
        center: true
      },
      colors: {
        primary: {
          DEFAULT: "#320232",
          50: "#490449",
          100: "#320232",
          200: "#200120",
          300: "#0B000B",
        }
      }
    }
  },
  plugins: []
};
