import PrimeUI from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {},
  },
   plugins: [PrimeUI]
}

