/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@downwindcss/easings'),
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography'),
    // require('tailwind-scrollbar-hide'),
    require('flowbite/plugin')
  ],

  safelist: ['outline-none'],
  theme: {
    extend: {
      // ***********************************************************
      animation: {
        bg: 'bg 1.0s ease infinite',
        text: 'text 2.2s ease infinite',
        button: 'button 2.2s ease infinite',
      },
      keyframes: {
        bg: {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '366px 0' },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        button: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },

      // ***********************************************************
      // maxWidth: {
      //   '8xl': '1920px',
      // },
      // colors: {
      //   primary: 'var(--primary)',
      //   'primary-2': 'var(--primary-2)',
      //   secondary: 'var(--secondary)',
      //   'secondary-2': 'var(--secondary-2)',
      //   hover: 'var(--hover)',
      //   'hover-1': 'var(--hover-1)',
      //   'hover-2': 'var(--hover-2)',
      //   'accent-0': 'var(--accent-0)',
      //   'accent-1': 'var(--accent-1)',
      //   'accent-2': 'var(--accent-2)',
      //   'accent-3': 'var(--accent-3)',
      //   'accent-4': 'var(--accent-4)',
      //   'accent-5': 'var(--accent-5)',
      //   'accent-6': 'var(--accent-6)',
      //   'accent-7': 'var(--accent-7)',
      //   'accent-8': 'var(--accent-8)',
      //   'accent-9': 'var(--accent-9)',
      //   violet: 'var(--violet)',
      //   'violet-light': 'var(--violet-light)',
      //   'violet-dark': 'var(--violet-dark)',
      //   pink: 'var(--pink)',
      //   'pink-light': 'var(--pink-light)',
      //   cyan: 'var(--cyan)',
      //   blue: 'var(--blue)',
      //   green: 'var(--green)',
      //   red: 'var(--red)',
      // },
      // textColor: {
      //   base: 'var(--text-base)',
      //   primary: 'var(--text-primary)',
      //   secondary: 'var(--text-secondary)',
      // },
      // boxShadow: {
      //   'outline-normal': '0 0 0 2px var(--accent-2)',
      //   magical:
      //     'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      // },
      // lineHeight: {
      //   'extra-loose': '2.2',
      // },
      // scale: {
      //   120: '1.2',
      // },
    },
  },
}
