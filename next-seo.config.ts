// // @ts-check

// const { site, social } = require('./@mdx/siteConfig')

// /**
//  * @type {import('next-seo').DefaultSeoProps}
//  */
// module.exports = {
//   title: site.title,
//   description: site.description,
//   titleTemplate: '%s | ' + site.name,
//   canonical: site.url,
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: site.url,
//     title: site.title,
//     description: site.description,
//     images: [
//       {
//         url: `${site.url}/images/banner.png`,
//         alt: site.title,
//         width: 1350,
//         height: 650,
//       },
//     ],
//   },
//   twitter: {
//     handle: social.twitter.handle,
//     site: social.twitter.url,
//     cardType: 'summary_large_image',
//   },
//   instagram: {
//     handle: social.instagram.handle,
//     site: social.instagram.url,
//     cardType: 'summary_large_image',
//   },
//   facebook: {
//     handle: social.facebook.handle,
//     site: social.facebook.url,
//     cardType: 'summary_large_image',
//   },
// }

// const page = ({locale, url, title, description} : {locale: string, url: string, title: string, description: string}) =>  ({
//   type: 'website',
//   locale,
//   url: url,
//   title,
//   description,
//   images: [
//     {url: `${site.url}/open-graph/${locale}/og_homepage_3200x1400.png`, alt: title, width: 3200, height: 1400,},
//     {url: `${site.url}/open-graph/${locale}/og_homepage_1200x630.png`, alt: title, width: 1200, height: 630,},
//     {url: `${site.url}/open-graph/${locale}/og_homepage_600x315.png`, alt: title, width: 600, height: 315,},
//     {url: `${site.url}/open-graph/${locale}/og_homepage_1200x1200.png`, alt: title, width: 1200, height: 1200,},
//     {url: `${site.url}/open-graph/${locale}/og_homepage_600x600.png`, alt: title, width: 600, height: 600,},
//   ],
// })

// const article = ({locale, url, title, description} : {locale: string, url: string, title: string, description: string}) =>  ({
//   type: 'website',
//   locale,
//   url: url,
//   title,
//   description,
//   images: [
//     {url: `${site.url}/open-graph/${locale}/og_article_3200x1400.png`, alt: title, width: 3200, height: 1400,},
//     {url: `${site.url}/open-graph/${locale}/og_article_1200x630.png`, alt: title, width: 1200, height: 630,},
//   ],
// })

import { type DefaultSeoProps, type NextSeoProps } from "next-seo"

import { uniq } from "lodash"

import { type Article } from "@/lib/mdx/types"

import { site, social } from "~/@mdx/siteConfig"

const defaultSEOWebsiteProps: DefaultSeoProps = {
  titleTemplate: `%s | ${site.name}`,
  title: site.title,
  description: site.description,
  canonical: site.url,
  themeColor: site.theme.color,
  languageAlternates: site.i18n.locales.map((locale: string) => ({
    hrefLang: locale,
    href: `${site.url}/${locale}`,
  })),
  openGraph: {
    type: "website",
    locale: site.i18n.defaultLocale,
    url: `${site.url}/${site.i18n.defaultLocale}`,
    title: site.title,
    siteName: site.name,
    description: site.description,
    images: [
      {
        url: `${site.url}/open-graph/${site.i18n.defaultLocale}/og_homepage_3200x1400.png`,
        type: "image/png",
        width: 3200,
        height: 1400,
      },
      {
        url: `${site.url}/open-graph/${site.i18n.defaultLocale}/og_homepage_1200x1200.png`,
        type: "image/png",
        width: 1200,
        height: 1200,
      },
      {
        url: `${site.url}/open-graph/${site.i18n.defaultLocale}/og_homepage_600x600.png`,
        type: "image/png",
        width: 600,
        height: 600,
      },
      {
        url: `${site.url}/open-graph/${site.i18n.defaultLocale}/og_homepage_1200x630.png`,
        type: "image/png",
        width: 1200,
        height: 630,
      },
      {
        url: `${site.url}/open-graph/${site.i18n.defaultLocale}/og_homepage_600x315.png`,
        type: "image/png",
        width: 600,
        height: 315,
      },
    ].map((props) => ({ ...props, alt: site.title, secureUrl: props.url })),
  },
  facebook: {
    appId: social.facebook.app.id,
  },
  twitter: {
    handle: social.twitter.handle,
    // site: social.twitter.url,
    site: site.url,
    cardType: "summary_large_image",
  },
  additionalMetaTags: [],
  additionalLinkTags: [],
}

type BlogPost = {
  slug: string
  title: string
  image: string
  summary: string
  publishedAt: string
  modifiedAt?: string
  expirationAt?: string
  section: string
  locale: string
  tags?: string[]
  authors: string[]
  locales: string[]
}

export const castArticleSEOProps = ({
  title,
  summary,
  slug,
  locale,
  locales = [],
  section,
  tags = [],
  publishedAt,
  modifiedAt,
  expirationAt,
  authors = [],
}: Article): NextSeoProps => {
  const url = `${site.url}/blog/${slug}`

  return {
    titleTemplate: `%s | ${site.name} Blog`,
    title,
    description: summary,
    canonical: url,
    themeColor: section
      ? site.sections[section]?.theme?.color ?? site.theme.color
      : site.theme.color,
    languageAlternates: locales.map((locale: string) => ({
      hrefLang: locale,
      href: `${site.url}/${locale}/blog/${slug}`,
    })),
    openGraph: {
      type: "article",
      locale,
      url,
      title,
      description: summary,
      images: [
        {
          url: `${site.url}/open-graph/${locale}/og_article_3200x1400.png`,
          alt: title,
          width: 3200,
          height: 1400,
        },
        {
          url: `${site.url}/open-graph/${locale}/og_article_1200x630.png`,
          alt: title,
          width: 1200,
          height: 630,
        },
      ].map((props) => ({ ...props, alt: site.title, secureUrl: props.url })),
      article: {
        section,
        authors: authors.map((handle) => `${site.url}/authors/${handle}`),
        tags: uniq([
          ...(section
            ? site.sections[section]?.tags.map(({ name }) => name) ?? []
            : []),
          ...tags,
        ]),
        ...(publishedAt
          ? { publishedTime: new Date(publishedAt).toISOString() }
          : {}),
        ...(modifiedAt
          ? { modifiedTime: new Date(modifiedAt).toISOString() }
          : {}),
        ...(expirationAt
          ? { expirationTime: new Date(expirationAt).toISOString() }
          : {}),
      },
    },
    facebook: defaultSEOWebsiteProps.facebook,
    twitter: defaultSEOWebsiteProps.twitter,
    additionalMetaTags: [],
    additionalLinkTags: [],
  }
}

const article = ({
  locale,
  url,
  title,
  description,
}: {
  locale: string
  url: string
  title: string
  description: string
}) => ({
  type: "website",
  locale,
  url: url,
  title,
  description,
  images: [
    {
      url: `${site.url}/open-graph/${locale}/og_article_3200x1400.png`,
      alt: title,
      width: 3200,
      height: 1400,
    },
    {
      url: `${site.url}/open-graph/${locale}/og_article_1200x630.png`,
      alt: title,
      width: 1200,
      height: 630,
    },
  ],
})

export default defaultSEOWebsiteProps
