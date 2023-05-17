import { NextSeo, type DefaultSeoProps } from "next-seo"
import { type OpenGraph } from "next-seo/lib/types"

import { type Author, type LocaleCode } from "@/lib/mdx/types"

import { DefaultAuthorSEO } from "@/components/seo/DefaultAuthorSEO"

import { site } from "~/@mdx/siteConfig"

export const defaults: DefaultSeoProps = {
  titleTemplate: `%s | ${site.name} Blog`,
}

type AuthorSEOProps = {
  author: Author
}

const urlForAuthor = ({ handle }: Author, locale?: LocaleCode) => {
  if (locale) {
    return `${site.url}/${locale}/blog/authors/${handle}`
  }
  return `${site.url}/blog/authors/${handle}`
}

const openGraphForAuthor = (author: Author): OpenGraph => {
  const {
    firstName: firstName,
    lastName: lastName,
    handle: username,
    about: description,
    gender,
    title,
    locale = site.i18n.defaultLocale,
  } = author

  const url = urlForAuthor(author)

  return {
    type: "author",
    locale,
    url,
    title,
    description,
    images: [
      {
        url: `${site.url}/open-graph/${locale}/og_author_3200x1400.png`,
        secureUrl: `${site.url}/open-graph/${locale}/og_author_3200x1400.png`,
        alt: title,
        width: 3200,
        height: 1400,
      },
      {
        url: `${site.url}/open-graph/${locale}/og_author_1200x630.png`,
        secureUrl: `${site.url}/open-graph/${locale}/og_author_1200x630.png`,
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
    profile: {
      firstName,
      lastName: lastName,
      username,
      gender,
    },
  }
}

export const AuthorSEO = ({ author }: AuthorSEOProps) => {
  const {
    title,
    about: description,
    locale = site.i18n.defaultLocale,
    locales = [],
    color,
  } = author

  const canonical = urlForAuthor(author, locale)
  const languageAlternates = locales.map((locale) => ({
    hrefLang: locale,
    href: urlForAuthor(author, locale),
  }))
  const openGraph = openGraphForAuthor(author)
  const themeColor = color ?? site.theme.color

  return (
    <>
      <DefaultAuthorSEO />

      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        languageAlternates={languageAlternates}
        openGraph={openGraph}
        themeColor={themeColor}
        // additionalMetaTags={[]}
        // additionalLinkTags={[]}
      />
    </>
  )
}
