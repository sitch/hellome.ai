import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import Layout from '@/components/mdx/Layout'
import { MDXPageProps, processMDXPage, listEntries } from '@/lib/mdx'
import ArticlePage from '@/components/mdx/blog/articles/ArticlePage'
import {
  Article,
  ArticleSource,
  AuthorSource,
  castArticle,
} from '@/lib/mdx/types'
import { ParsedUrlQuery } from 'querystring'
import { ArticleSEO } from '@/components/seo/ArticleSEO'
import { DefaultArticleSEO } from '@/components/seo/DefaultArticleSEO'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18NextConfig from '@/next-i18next.config'

type Props = MDXPageProps<ArticleSource> & {
  article: Article
}

type Params = ParsedUrlQuery & {
  slug: string
}

const Page: NextPage<Props> = ({ source, article }: Props) => {
  return (
    <Layout>
      <DefaultArticleSEO />
      <ArticleSEO article={article} />
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
  locale = i18NextConfig.i18n.defaultLocale,
  params,
}) => {
  const slug = params!.slug
  const mdx = await processMDXPage<ArticleSource>('blog/articles', slug)
  const { data } = await processMDXPage<AuthorSource>(
    'blog/authors',
    mdx.data.authorHandle
  )
  return {
    props: {
      ...(await serverSideTranslations(locale, ['articles', 'footer'])),
      ...mdx,
      article: castArticle({ ...mdx.data, slug }, [data]),
    },
  }
}

export default Page
