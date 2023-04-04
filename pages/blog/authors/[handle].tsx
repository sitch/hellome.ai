import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import Layout from '@/components/mdx/Layout'
import {
  MDXPageProps,
  processMDXPage,
  listEntries,
  listArticleSources,
} from '@/lib/mdx'
import AuthorPage from '@/components/mdx/blog/authors/AuthorPage'
import { Author, AuthorSource, castAuthor } from '@/lib/mdx/types'
import { ParsedUrlQuery } from 'querystring'
import { DefaultAuthorSEO } from '@/components/seo/DefaultAuthorSEO'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { AuthorSEO } from '@/components/seo/AuthorSEO'
import i18NextConfig from '@/next-i18next.config'

type Props = MDXPageProps<AuthorSource> & {
  author: Author
}

type Params = ParsedUrlQuery & {
  handle: string
}

const Page: NextPage<Props> = ({ source, author }: Props) => {
  return (
    <Layout>
      <DefaultAuthorSEO />
      {/* <AuthorSEO author={author} /> */}
      <AuthorPage author={author}>
        <MDXRemote {...source} />
      </AuthorPage>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const entries = listEntries('blog/authors')
  const paths = entries.map((handle) => ({ params: { handle } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  locale = i18NextConfig.i18n.defaultLocale,
  params,
}) => {
  const handle = params!.handle
  const mdx = await processMDXPage<AuthorSource>('blog/authors', handle)
  const articles = await listArticleSources()
  return {
    props: {
      ...(await serverSideTranslations(locale, ['authors', 'footer'])),
      ...mdx,
      author: castAuthor(
        { ...mdx.data, handle },
        articles.filter(({ authorHandle }) => authorHandle === mdx.data.handle)
      ),
    },
  }
}

export default Page
