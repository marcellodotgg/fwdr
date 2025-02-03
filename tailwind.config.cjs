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
          DEFAULT: "#060e1c",
          50: "#11274c",
          100: "#0c1b35",
          200: "#091429",
          300: "#030710",
        }
      }
    }
  },
  plugins: []
};
