/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        colors: {
          lightCoral: "#e0777dff",
          whiteSmoke: "#f5f5f5ff",
          verdigris: "#51a3a3ff",
          marianBlue: "#414288ff",
          celestialBlue: "#1b98e0ff",
        },
      },
    },
  },
  plugins: [],
};
