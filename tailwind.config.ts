import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: '#9BF00B',
        grayScale: {
          primary: '#777777',
          secondary: '#333333',
          clean: '#C0C0C0'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
