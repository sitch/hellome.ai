// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 * @link https://www.i18next.com/overview/configuration-options
 */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeDetection: true,
    // localeExtension: "json",
    // localeExtension: 'yml',
  },

  /**
   * To avoid issues when deploying to some PaaS (vercel)
   */
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  /**
   * Logging
   * @link https://www.i18next.com/overview/configuration-options#logging
   */
  reloadOnPrerender: process.env.NODE_ENV === "development",
  // debug: process.env.NODE_ENV === "development",

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}
