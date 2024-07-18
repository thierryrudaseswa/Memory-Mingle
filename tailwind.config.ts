import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-1': 'linear-gradient(90deg, #845EC2, #D65DB1, #FF6F91, #FF9671, #FFC75F, #F9F871)',
        'custom-gradient-2': 'linear-gradient(to right, #845EC2, #2C73D2, #0081CF, #0089BA, #008E9B, #008F7A)',
      },
      animation: {
        'gradient-change': 'gradientChange 30s ease infinite',
      },
      keyframes: {
        gradientChange: {
          '0%': { backgroundImage: 'linear-gradient(90deg, #845EC2, #D65DB1, #FF6F91, #FF9671, #FFC75F, #F9F871)' },
          '50%': { backgroundImage: 'linear-gradient(to right, #845EC2, #2C73D2, #0081CF, #0089BA, #008E9B, #008F7A)' },
          '100%': { backgroundImage: 'linear-gradient(90deg, #845EC2, #D65DB1, #FF6F91, #FF9671, #FFC75F, #F9F871)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
