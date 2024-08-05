const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["PT Serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        orange: {
          50: '#FFECE5',
          100: '#FFDACC',
          200: '#FFB094',
          300: '#FF8B61',
          400: '#FF6229',
          500: '#F54100',
          600: '#C23400',
          700: '#942700',
          800: '#611A00',
          900: '#330E00',
          950: '#190700',
        },
      }
    },
  },
  plugins: [],
};
