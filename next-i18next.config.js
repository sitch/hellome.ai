// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  /**
   * Debug
   * @link https://www.i18next.com/overview/configuration-options#logging
   */
  debug: process.env.NODE_ENV === "development",

  /**
   * i18n
   */
  i18n: {
    defaultLocale: "en",
    locales: ["en"],

    localeDetection: true,
    localeExtension: "json",
    // localeExtension: 'yml',
  },

  /**
   * To avoid issues when deploying to some PaaS (vercel)
   */
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}
