import { DefaultSeo, type DefaultSeoProps } from "next-seo"

import { site } from "@mdx/siteConfig"

export const defaults: DefaultSeoProps = {
  titleTemplate: `%s | ${site.name} Blog Article`,
}

export const DefaultArticleSEO = () => {
  return <DefaultSeo {...defaults} />
}
