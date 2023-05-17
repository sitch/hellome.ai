/**
 * This is a dynamic sitemap rendered on the server with all posts
 * We use SSG with a cache of a few minutes instead of statically generating the sitemap
 * because we want to publish changes without redeploying and `next-sitemap` doesn't support ISG revalidation
 */

import { type GetServerSideProps } from "next"
import { getServerSideSitemapLegacy } from "next-sitemap"

import { getSitemapFieldsBySection } from "@/lib/mdx/sitemaps"

const cacheMaxAgeUntilStaleSeconds = 60 * 60 // 1 minute
const cacheMaxAgeStaleDataReturnSeconds = 15 * 60 * 60 // 15 minutes

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // for (const [header, value] of Object.entries(defaultSitemapHeaders)) {
  //   ctx.res.setHeader(header, value)
  // }

  ctx.res.setHeader(
    "Cache-Control",
    `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`,
  )

  // ctx.res.setHeader("Content-Type", "text/xml");
  // ctx.res.write(feed.xml());
  // ctx.res.end();

  return await getServerSideSitemapLegacy(ctx, [
    ...getSitemapFieldsBySection("blog/articles"),
    ...getSitemapFieldsBySection("blog/authors"),
  ])
}

export default function BlogSitemap() {}
