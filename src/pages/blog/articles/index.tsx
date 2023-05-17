import { useState } from "react"
import { type GetStaticProps, type NextPage } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"

import { processMDXArticles } from "@/lib/mdx"
import { type Article } from "@/lib/mdx/types"

import { Input } from "@/components/ui/input"

import Hero from "@/mdx/Hero"
import { BlogLayout } from "@/mdx/Layout"
import { ArticlesPage } from "@/mdx/blog/articles/ArticlesPage"

import { site } from "~/data/siteConfig"
import { type I18nNamespaces } from "~/i18next.d"
import i18NextConfig from "~/next-i18next.config"

const ns: (keyof I18nNamespaces)[] = ["common", "articles", "footer"]

type Props = {
  articles: Article[]
}

const ArticlesIndex: NextPage<Props> = ({ articles }: Props) => {
  const { t } = useTranslation()

  const [searchValue, setSearchValue] = useState(["", ""])

  const filteredArticles = articles
    .filter(({ title }) => title.toLowerCase().includes(searchValue[1]))
    .sort()

  return (
    <>
      <BlogLayout
        seo={
          <NextSeo
            title={t("articles:blog.seo.title")}
            description={t("articles:blog.seo.description")}
            canonical={`${site.url}/blog/articles`}
            openGraph={{
              url: `${site.url}/blog/articles`,
              title: t("articles:blog.seo.title"),
              description: t("articles:blog.seo.description"),
            }}
          />
        }
        search={
          <Input
            value={searchValue[0]}
            onChange={({ target: { value } }) =>
              setSearchValue([value, value.toLowerCase()])
            }
            aria-label={t("articles:blog.search.aria-label")}
            placeholder={t("articles:blog.search.placeholder")}
          />
        }
        hero={
          <Hero
            title={t("articles:blog.pages.index.title")}
            // description={t('articles:blog.pages.index.subtitle')}
          />
        }
      >
        {/* {filteredArticles.length === 0 && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}

        {filteredArticles.map((article) => (
          <ArticlePage key={article.title} article={article} />
        ))} */}

        <ArticlesPage articles={filteredArticles} />
      </BlogLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locale = i18NextConfig.i18n.defaultLocale,
}) => {
  const articles = await processMDXArticles("blog/articles")
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
      articles,
    },
  }
}

export default ArticlesIndex
