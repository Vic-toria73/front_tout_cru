/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#000000',
        background: '#FFFFFF',
        'background-alt': '#EEEBEB',
        primary: '#2ECC71',
        link: '#2ECC71',  
      },
      fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    },
  },
  plugins: [],
}
