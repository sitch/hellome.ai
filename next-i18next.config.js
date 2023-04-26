// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    // localeExtension: 'yml',
    localeDetection: true,
  },
  /**
   * To avoid issues when deploying to some PaaS (vercel)
   */
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  /**
   * Development
   * @link https://www.i18next.com/overview/configuration-options#logging
   */
  reloadOnPrerender: process.env.NODE_ENV === "development",
  debug: process.env.NODE_ENV === "development",
}
