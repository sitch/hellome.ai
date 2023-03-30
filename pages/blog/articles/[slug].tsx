import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider } from '@mdx-js/react'
import Layout from '@/components/mdx/Layout'
import { MDXPageProps, processMDXPage, listEntries } from '@/lib/mdx'
import { site } from '@/data/siteConfig'
import { NextSeo } from 'next-seo'
import { castArticleSEOProps } from '@/next-seo.config'
import ArticlePage from '@/components/mdx/blog/articles/ArticlePage'
import { Article, ArticleSource, castArticle } from '@/lib/mdx/types'
import { ParsedUrlQuery } from 'querystring'

type Params = ParsedUrlQuery & {
  slug: string
}

type Props = MDXPageProps<ArticleSource> & {
  article: Article
}

const Page: NextPage<Props> = ({ source, article }: Props) => {
  // const title = `${article.title} | ${site.name}`

  return (
    <MDXProvider components={{ Image }}>
      <Layout>
        {/* <NextSeo {...castArticleSEOProps(article)} /> */}

        <ArticlePage article={article}>
          <MDXRemote {...source} />
        </ArticlePage>
      </Layout>
    </MDXProvider>
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
