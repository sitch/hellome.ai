/**
 * This is a dynamic RSS feed rendered on the server with all blog posts
 * We use SSG with a cache of a few minutes instead of statically generating the file because we want
 * new blog posts and edits to automatically show up here
 */

import { type GetServerSideProps } from "next"

import RSS from "rss"

import { env } from "@/config/env.mjs"

import { site } from "@/data/siteConfig"
import nextI18nextConfig from "@/next-i18next.config"

const cacheMaxAgeUntilStaleSeconds = 60 * 60 // 1 minute
const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60 // 60 minutes

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const feed = new RSS({
    title: site.title,
    description: site.description,
    language: nextI18nextConfig.i18n.defaultLocale,
    copyright: `©${new Date().getFullYear()} ${site.name}`,
    site_url: env.VERCEL_URL,
    feed_url: `${new URL("rss.xml", env.VERCEL_URL)}`,
  })

  // const posts = getBlogPosts()
  // posts.forEach((post) => {
  //   feed.item({
  //     guid: post.id,
  //     title: post.title,
  //     description: post.excerpt,
  //     url: `${env.VERCEL_URL}${getBlogPostPath(post.slug)}`,
  //     date: new Date(post.datePublished),
  //     categories: post.tags.map((tag) => tag),
  //     enclosure: {
  //       url: post.imageSrc,
  //     },
  //   });
  // });

  ctx.res.setHeader(
    "Cache-Control",
    `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`,
  )

  ctx.res.setHeader("Content-Type", "text/xml")
  ctx.res.write(feed.xml())
  ctx.res.end()

  return { props: {} }
}

// Default export to prevent next.js errors
export default function RssPage() {}
