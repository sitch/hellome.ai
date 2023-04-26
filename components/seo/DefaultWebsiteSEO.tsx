import { DefaultSeo, DefaultSeoProps } from "next-seo"

import { site, social } from "@/data/siteConfig"

const defaults: DefaultSeoProps = {
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

export const DefaultWebsiteSEO = () => {
  return <DefaultSeo {...defaults} />
}
