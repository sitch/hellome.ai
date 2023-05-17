import { NextSeo, type DefaultSeoProps } from "next-seo"
import { type OpenGraph } from "next-seo/lib/types"

import { site } from "@mdx/siteConfig"
import { uniq } from "lodash"

import { type Article, type LocaleCode } from "@/lib/mdx/types"

import { DefaultArticleSEO } from "@/components/seo/DefaultArticleSEO"

export const defaults: DefaultSeoProps = {
  titleTemplate: `%s | ${site.name} Blog`,
}

type ArticleSEOProps = {
  article: Article
}

const urlForArticle = ({ slug }: Article, locale?: LocaleCode) => {
  if (locale) {
    return `${site.url}/${locale}/blog/articles/${slug}`
  }
  return `${site.url}/blog/articles/${slug}`
}

const openGraphForArticle = (article: Article): OpenGraph => {
  const {
    title,
    summary: description,
    locale = site.i18n.defaultLocale,
    section,
    publishedAt,
    modifiedAt,
    expirationAt,
  } = article

  const url = urlForArticle(article)
  const authors = (article.authors ?? []).map(
    ({ handle }) => `${site.url}/authors/${handle}`,
  )

  const sectionTags = section
    ? site.sections[section].tags.map(({ name }) => name)
    : []

  const tags = uniq([...sectionTags, ...(article.tags ?? [])])

  return {
    type: "article",
    locale,
    url,
    title,
    description,
    images: [
      {
        url: `${site.url}/open-graph/${locale}/og_article_3200x1400.png`,
        secureUrl: `${site.url}/open-graph/${locale}/og_article_3200x1400.png`,
        alt: title,
        width: 3200,
        height: 1400,
      },
      {
        url: `${site.url}/open-graph/${locale}/og_article_1200x630.png`,
        secureUrl: `${site.url}/open-graph/${locale}/og_article_1200x630.png`,
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
    article: {
      section,
      authors,
      tags,
      publishedTime: new Date(publishedAt).toISOString(),
      ...(modifiedAt
        ? { modifiedTime: new Date(modifiedAt).toISOString() }
        : {}),
      ...(expirationAt
        ? { expirationTime: new Date(expirationAt).toISOString() }
        : {}),
    },
  }
}

export const ArticleSEO = ({ article }: ArticleSEOProps) => {
  const {
    title,
    summary: description,
    locale = site.i18n.defaultLocale,
    locales = [],
    section,
  } = article

  const themeColor = section
    ? // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      site.sections[section].theme.color ?? site.theme.color
    : site.theme.color

  const canonical = urlForArticle(article, locale)
  const languageAlternates = locales.map((locale) => ({
    hrefLang: locale,
    href: urlForArticle(article, locale),
  }))

  return (
    <>
      <DefaultArticleSEO />

      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        languageAlternates={languageAlternates}
        openGraph={openGraphForArticle(article)}
        themeColor={themeColor}
        // additionalMetaTags={[]}
        // additionalLinkTags={[]}
      />
    </>
  )
}
