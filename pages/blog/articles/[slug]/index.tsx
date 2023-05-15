import { type ParsedUrlQuery } from "querystring"
import { type GetStaticPaths, type GetStaticProps, type NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { MDXRemote } from "next-mdx-remote"

import { listEntries, processMDXPage, type MDXPageProps } from "@/lib/mdx"
import {
  castArticle,
  type Article,
  type ArticleSource,
  type AuthorSource,
} from "@/lib/mdx/types"

import { BlogLayout } from "@/components/mdx/Layout"
import { ArticleBody } from "@/components/mdx/blog/articles/ArticleBody"
import { ArticleHero } from "@/components/mdx/blog/articles/ArticleHero"
import { ArticleSEO } from "@/components/seo/ArticleSEO"

import { type I18nNamespaces } from "@/i18next.d"
import i18NextConfig from "@/next-i18next.config"

const ns: (keyof I18nNamespaces)[] = ["common", "articles", "footer"]

type Params = ParsedUrlQuery & {
  slug: string
}

type Props = MDXPageProps<ArticleSource> & {
  article: Article
}

const ArticleShow: NextPage<Props> = ({ source, article }: Props) => {
  return (
    <BlogLayout
      seo={<ArticleSEO article={article} />}
      // hero={<ArticleHero article={article} />}
    >
      <ArticleBody article={article}>
        <MDXRemote {...source} />
      </ArticleBody>
    </BlogLayout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const entries = listEntries("blog/articles")
  const paths = entries.map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  locale = i18NextConfig.i18n.defaultLocale,
  params,
}) => {
  const slug = params!.slug
  const mdx = await processMDXPage<ArticleSource>("blog/articles", slug)
  const { data } = await processMDXPage<AuthorSource>(
    "blog/authors",
    mdx.data.authorHandle,
  )
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
      ...mdx,
      article: castArticle({ ...mdx.data, slug }, [data]),
    },
  }
}

export default ArticleShow
