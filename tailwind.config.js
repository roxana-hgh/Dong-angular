import PrimeUI from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  darkMode: ['class', '.app-dark'], // Use the same selector as PrimeNG
  theme: {
    extend: {},
  },
   plugins: [PrimeUI]
}

