/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },

  theme: {
      extend: {
        colors: {
          'midnight-blue': {
            '50': '#cee5fd',
            '100': '#b1d5fb',
            '200': '#8fc8fa',
            '300': '#55b9f7',
            '400': '#109df4',
            '500': '#0a77d6',
            '600': '#0a5cd6',
            '700': '#0a4bd6',
            '800': '#0945be',
            '900': '#07418d',
            '950': '#003670',
        },        
        }
    }
  },
  darkMode: "class",

};
