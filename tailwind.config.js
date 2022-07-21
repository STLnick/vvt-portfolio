const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#6ee7b7',
          DEFAULT: '#10b981',
          dark: '#047857',
        },
        'secondary': {
          lightest: '#c2c4d7',
          light: '#8589af',
          DEFAULT: '#2B2D42',
          dark: '#151621',
        },
        'accent': {
          light: '#f3b4c8',
          DEFAULT: '#E86A92',
          dark: '#92163d',
        },
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
