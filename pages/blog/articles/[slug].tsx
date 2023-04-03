import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import Layout from '@/components/mdx/Layout'
import { MDXPageProps, processMDXPage, listEntries } from '@/lib/mdx'
import { site } from '@/data/siteConfig'
import { NextSeo } from 'next-seo'
import { castArticleSEOProps } from '@/next-seo.config'
import ArticlePage from '@/components/mdx/blog/articles/ArticlePage'
import { Article, ArticleSource, castArticle } from '@/lib/mdx/types'
import { ParsedUrlQuery } from 'querystring'
// import type { RoutedQuery } from "nextjs-routes";

type Props = MDXPageProps<ArticleSource> & {
  article: Article
}

type Params = ParsedUrlQuery & {
  slug: string
}

const Page: NextPage<Props> = ({ source, article }: Props) => {
  // const title = `${article.title} | ${site.name}`

  return (
    <Layout>
      {/* <NextSeo {...castArticleSEOProps(article)} /> */}

      <ArticlePage article={article}>
        <MDXRemote {...source} />
      </ArticlePage>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const entries = listEntries('blog/articles')
  const paths = entries.map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const mdx = await processMDXPage<ArticleSource>('blog/articles', params!.slug)
  return {
    props: {
      ...mdx,
      article: castArticle(mdx.data),
    },
  }
}

export default Page
