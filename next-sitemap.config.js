// @ts-check

const siteConfig = require('./data/siteConfig')

/**
 * @type {import('next-sitemap').IConfig}
 **/
module.exports = {
  siteUrl: process.env.SITE_URL ?? siteConfig.site.url,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
