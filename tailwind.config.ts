import type { Config } from "tailwindcss";
  // TAFADZWA MUNYUKI
  // https://github.com/tafadzwamunyuki 

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     container: {
      center: true,
      padding: "20px",
     },
     colors: {
      accent: "#b2d8d8",
     },
    },
  },
  plugins: [],
};
export default config;
