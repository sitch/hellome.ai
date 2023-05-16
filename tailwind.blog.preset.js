import plugin from "tailwindcss/plugin"

/**
 * Source: https://github.com/markmead/hyperui/blob/main/tailwind/blogs.config.ts
 * @type {import('tailwindcss').Config}
 **/
const config = {
  darkMode: "class",
  content: ["./**/*.mdx"],
  theme: {
    textShadow: {
      sm: "0 1px 2px var(--tw-shadow-color)",
      DEFAULT: "0 2px 4px var(--tw-shadow-color)",
      lg: "0 8px 16px var(--tw-shadow-color)",
    },
  },
  plugins: [
    // @ts-ignore
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        { "text-shadow": (textShadow) => ({ textShadow }) },
        { values: theme("textShadow") },
      )
    }),
  ],
}

export default config
