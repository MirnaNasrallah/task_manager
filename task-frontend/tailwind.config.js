/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/*.{js,ts,jsx,tsx}', // This includes your app directory
    './src/app/components/**/*.{js,ts,jsx,tsx}', // If you have a components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#10B981',
        accent: '#F59E0B',
        neutral: '#F3F4F6',
        dark: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
