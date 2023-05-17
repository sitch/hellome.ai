import { DefaultSeo, type DefaultSeoProps } from "next-seo"

import { site } from "~/data/siteConfig"

export const defaults: DefaultSeoProps = {
  titleTemplate: `%s | ${site.name} Blog Article`,
}

export const DefaultArticleSEO = () => {
  return <DefaultSeo {...defaults} />
}
