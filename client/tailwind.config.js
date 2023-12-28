/** @type {import('tailwindcss').Config} */
const withOpacity = (colorValue) => {
  return ({ opacityValue }) => {

    return opacityValue ? `hsla(var(${colorValue}, ${opacityValue}))` : `hsl(var(${colorValue}))`;
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: withOpacity("--clr-primary"),
      white: withOpacity("--clr-white-100"),
      'white-200': withOpacity("--clr-white-200"),
      'white-400': withOpacity("--clr-white-400"),
      'secondary': withOpacity("--clr-secondary"),
      'clr-bg': withOpacity("--clr-bg-black"),
      'hover': withOpacity("--clr-btn-hover"),
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1120px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        manrope: "'Manrope', sans-serif"
      },
    },
  },
  plugins: [],
}

