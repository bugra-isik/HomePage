/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#161616",
        dark2: "#141414bf",
        light: "#fcfcfc",
        light2: "#f5f5f5bf",
        "dark-0.75": "rgba(22, 22, 22, 0.75)",
        "light-0.75": "rgba(252, 252, 252, 0.75)",
        yellow: "#eed272",
        yellow2: "#f9eeb4",
        blue: "#305c96",
        blue2: "#87c0f1",
      },
      backgroundImage: {
        grad: "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(4, 0, 255, 0.5), rgba(255,255,255,0) )",
        dividerDark:
          "radial-gradient(50% 100% at 50% 100%, #141414bf 0%, rgba(0, 0, 0, 0) 100%)",
        dividerLight:
          "radial-gradient(50% 100% at 50% 100%, #f5f5f5bf 0%, rgba(0, 0, 0, 0) 100%)",
      },
      fontFamily: {
        inter: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        hyperlegible: [
          "Atkinson Hyperlegible",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        ibm: ["IBM Plex Serif", "serif"],
      },
    },
  },
  plugins: [],
};
