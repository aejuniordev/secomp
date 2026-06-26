/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secomp-dark": "#0d1117",
        "secomp-darker": "#010409",
        "secomp-card": "#161b22",
        "secomp-border": "#30363d",
        "secomp-cyan": "#00d4ff",
        "secomp-text": "#8b949e",
        "secomp-text-light": "#c9d1d9",
        "secomp-card-stroke": "#3773c2",
        "secomp-text-blue-light": "#0992f7",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
