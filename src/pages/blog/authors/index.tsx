import { useState } from "react"
import { type GetStaticProps, type NextPage } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"

import { processMDXAuthors } from "@/lib/mdx"
import { type Author } from "@/lib/mdx/types"

import { Input } from "@/components/ui/input"

import { AuthorsPage } from "@/mdx/blog/authors/AuthorsPage"
import Hero from "@/mdx/Hero"
import { BlogLayout } from "@/mdx/Layout"

import { site } from "~/data/siteConfig"
import { type I18nNamespaces } from "~/i18next.d"
import i18NextConfig from "~/next-i18next.config"

const ns: (keyof I18nNamespaces)[] = ["common", "authors", "footer"]

type Props = {
  authors: Author[]
}

const AuthorsIndex: NextPage<Props> = ({ authors }: Props) => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState(["", ""])

  const filteredAuthors = authors
    .filter(({ name }) => name.toLowerCase().includes(searchValue[1]))
    .sort()

  return (
    <BlogLayout
      seo={
        <NextSeo
          title={t("authors:blog.seo.title")}
          description={t("authors:blog.seo.description")}
          canonical={`${site.url}/blog/authors`}
          openGraph={{
            url: `${site.url}/blog/authors`,
            title: t("authors:blog.seo.title"),
            description: t("authors:blog.seo.description"),
          }}
        />
      }
      search={
        <Input
          type="text"
          value={searchValue[0]}
          onChange={({ target: { value } }) =>
            setSearchValue([value, value.toLowerCase()])
          }
          aria-label={t("authors:blog.search.aria-label")}
          placeholder={t("authors:blog.search.placeholder")}
        />
      }
      hero={
        <Hero
          title={t("authors:blog.pages.index.title")}
          // description={t('articles:blog.pages.index.subtitle')}
        />
      }
    >
      <section id="authors">
        {filteredAuthors.length === 0 && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}

        <AuthorsPage authors={filteredAuthors} />

        {/* {filteredAuthors.map((author) => (
          <AuthorPage key={author.handle} author={author} />
        ))} */}
      </section>
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locale = i18NextConfig.i18n.defaultLocale,
}) => {
  const authors = await processMDXAuthors("blog/authors")
  return {
    props: {
      authors,
      ...(await serverSideTranslations(locale, ns)),
    },
  }
}

export default AuthorsIndex
