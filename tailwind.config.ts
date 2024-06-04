import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        epic_page_desk: "5rem",
        epic_page_mob: "1.5rem",
      },
      colors: {
        epic_primary: "#582849",
        epic_secondary: "#ff4313",
        epic_variant: "#ffdeb0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(to right, white 75%, #582849 30%)",
        "custom-gradient-to-b":
          "linear-gradient(to right, white 60%, #582849 40%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
