/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: "Poppins , sans-serif",
      },
      boxShadow: {
        rd: "4px 4px 4px lightgray",
        jb: "0px 3px 8px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
});
