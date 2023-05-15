// @ts-check
/**
 * `next-sitemap` config
 *
 *   Do not forget to submit your Sitemap through the Google Search Console so that Google knows of your website right away.
 *
 * Library:
 * @link https://github.com/iamvishnusankar/next-sitemap
 *
 * Resources:
 * @link https://github.com/guillermodlpa/site
 * @link https://makerkit.dev/blog/tutorials/sitemap-nextjs
 */

// Save crawling budget by not fetching SSG meta files
const NEXT_SSG_FILES = [
  "/*.json$",
  "/*_buildManifest.js$",
  "/*_middlewareManifest.js$",
  "/*_ssgManifest.js$",
  "/*.js$",
]

const exclude = [
  // Remove "thin" pages that don't require robots indexing
  "/app*",

  // Blog posts are indexed in the dynamic blog sitemap
  // `next-sitemap` can actually put them here, but we want to keep it dynamic to allow regeneration without deployment
  "/blog/*",
  "/rss.xml",
  "/sitemap-*.xml",
]

const additionalSitemaps = [
  // Blog
  `${new URL("sitemap-blog.xml", process.env.VERCEL_URL)}`,
]

/**
 * @type {import('next-sitemap').IConfig}
 **/
module.exports = {
  // export default {
  siteUrl: process.env.VERCEL_URL,
  changefreq: "daily",
  generateRobotsTxt: true,
  exclude,
  robotsTxtOptions: {
    additionalSitemaps,
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
}
