/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 1s infinite cubic-bezier(0.4, 0, 1, 1);',
      }
    },
  },
  plugins: [],
}
