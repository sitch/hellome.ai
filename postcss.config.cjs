/**
 * @typedef {import('postcss').ProcessOptions} ProcessOptions
 */

/**
 * TODO: replace with property options type
 *
 * @typedef PostcssLoaderOptions
 * @property {object | string[]} [plugins]
 * @property {string} [parser]
 */

/**
 * @type {PostcssLoaderOptions}
 */
const config = {
  plugins: [
    "postcss-import",
    "postcss-easings",
    "tailwindcss/nesting",
    "tailwindcss",
    "autoprefixer",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
          "nesting-rules": true,
        },
      },
    ],
  ],
}

module.exports = config
