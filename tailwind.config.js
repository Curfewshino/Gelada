/** @type {import('tailwindcss').Config} */
export default {
  future:{
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "san-serif"],
        ubuntu: ["Ubuntu", "san-serif"]
      }
    }
  },
  darkMode: 'selector',
  plugins: []
};

