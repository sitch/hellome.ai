const plugin = require('tailwindcss/plugin')

/**
 * Source: https://github.com/markmead/hyperui/blob/main/tailwind/blogs.config.ts
 * @type {import('tailwindcss').Config}
 **/
module.exports = {
  darkMode: 'class',
  content: ['./**/*.mdx', './public/blogs/*.html'],
  theme: {
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        { 'text-shadow': (textShadow) => ({ textShadow }) },
        { values: theme('textShadow') }
      )
    }),
  ],
}
