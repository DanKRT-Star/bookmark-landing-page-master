/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'primary-blue': 'hsl(231, 69%, 60%)',
            'primary-red': 'hsl(0, 94%, 66%)',
            'neutral-grey-50': 'hsl(0, 0%, 97%)',
            'neutral-blue-950': 'hsl(229, 31%, 21%)',
        },
        fontFamily: {
            'Rubik': ['Rubik', 'sans-serif'],
        },
    },
  },
  plugins: [],
}