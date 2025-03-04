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
        accent: {
          50: "#fcfee7",
          100: "#f7fcc2",
          200: "#f1fa98",
          300: "#eaf76b",
          400: "#e3f344",
          500: "#e1f40f",
          600: "#d4e102",
          700: "#c2ca00",
          800: "#b2b200",
          900: "#978a00",
        },
      },
      fontFamily: {
        agnes: 'var(--font-agnes)',
      },
    },
  },
  plugins: [],
} satisfies Config;

