/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        condominios: {
          primary: '#3da9fc',
          secondary: '#90b4ce',
          accent: '#094067', // headline, stroke
          neutral: '#d8eefe', // light blue background
          tertiary: '#ef4565',
          'base-100': '#fffffe',
          'base-200': '#5f6c7b',
        },
      },
      'dark',
      'cupcake',
    ],
    darkTheme: 'condominios', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
};
