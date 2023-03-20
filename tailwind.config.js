/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryFashion: '#323232',
        yellowPrimary: '#FDEB37',
        starPrimary: '#FBD103',
        greenFashion: '#74CA4D',
        textColor: '#C2C2C2',
      },
    },
    lineHeight: {
      14: '14px',
    },
    backgroundImage: {
      newspaper: "url('/images/newspaper_bg.png')",
      yellowImage: "url('/yellow_background.svg')",
    },
  },
  plugins: [],
}
