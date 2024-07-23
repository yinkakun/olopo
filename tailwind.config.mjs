const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Ojuju", ...defaultTheme.fontFamily.sans],
        serif: ["PT Serif", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
