import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        DMSerif: ['DM Serif Display', 'serif'],
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        black_primary: '#0F0F0F',
        main_tone_primary: '#F9DBB3',
        main_tone_secondary: '#f8c582'
      }
    },
  },
  plugins: [],
};
export default config;
