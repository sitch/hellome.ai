import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider } from '@mdx-js/react'
import Layout from '@/components/mdx/Layout'
import { MDXPageProps, processMDXPage, listEntries } from '@/lib/mdx'
import { site } from '@/data/siteConfig'
import { NextSeo } from 'next-seo'
// import { castAuthorSEOProps } from '@/next-seo.config'
import AuthorPage from '@/components/mdx/blog/authors/AuthorPage'
import { Author, AuthorSource, castAuthor } from '@/lib/mdx/types'
import { ParsedUrlQuery } from 'querystring'

type Params = ParsedUrlQuery & {
  handle: string
}

type Props = MDXPageProps<AuthorSource> & {
  author: Author
}

const Page: NextPage<Props> = ({ source, author }: Props) => {
  return (
    <MDXProvider components={{ Image }}>
      <Layout>
        {/* <NextSeo {...castAuthorSEOProps(author)} /> */}

        <AuthorPage author={author}>
          <MDXRemote {...source} />
        </AuthorPage>
      </Layout>
    </MDXProvider>
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
  params,
}) => {
  const mdx = await processMDXPage<AuthorSource>('blog/authors', params!.handle)
  return {
    props: {
      ...mdx,
      author: castAuthor(mdx.data),
    },
  }
}

export default Page
