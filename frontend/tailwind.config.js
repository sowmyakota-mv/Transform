/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-slow": "pulse 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
