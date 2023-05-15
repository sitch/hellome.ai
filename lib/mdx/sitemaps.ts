import { type ISitemapField } from "next-sitemap"

import { fromUnixTime } from "date-fns"

import { listEntries } from "@/lib/mdx"
import { type Section } from "@/lib/mdx/types"

import blogArticleTimestamps from "@/@gen/next-sitemaps/blog-articles-timestamps.json"
import blogAuthorTimestamps from "@/@gen/next-sitemaps/blog-authors-timestamps.json"

type Filename = string
type UnixEpochTimestamp = number

type GitDateExtractorEntry = {
  created: UnixEpochTimestamp
  modified: UnixEpochTimestamp
}
type GitDateExtractorJSON = Record<Filename, GitDateExtractorEntry | undefined>

const timestamps: Record<Section, GitDateExtractorJSON | undefined> = {
  "blog/articles": blogArticleTimestamps,
  "blog/authors": blogAuthorTimestamps,
  company: undefined,
  customer: undefined,
  policies: undefined,
}

export const getSitemapFieldsBySection = (
  section: Section,
): ISitemapField[] => {
  const data = timestamps[section]

  if (!data) {
    throw new Error(
      `[next-sitemap] Timestamps not implemented for section: "${section}"`,
    )
  }
  return listEntries(section).map((slug) => {
    const entry = data[`${slug}.mdx`]

    if (!entry) {
      throw new Error(
        `[next-sitemap] Timestamp missing for "${slug}" in section: "${section}"`,
      )
    }
    return {
      loc: `${new URL(
        `/${section}/${slug}`,
        `https://${process.env.VERCEL_URL}`,
      )}`,
      lastmod: fromUnixTime(entry.modified).toISOString(),
    }
  })
}
