import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import Layout from '@/components/mdx/Layout'
import { MDXPageProps, processMDXPage, listEntries } from '@/lib/mdx'
import { site } from '@/data/siteConfig'
import { NextSeo } from 'next-seo'
import { castArticleSEOProps } from '@/next-seo.config'
import { Data } from '@/lib/mdx'
import { ParsedUrlQuery } from 'querystring'
import { Heading, Typography } from '@/components/mdx/ui'

type Props = MDXPageProps<Data> & {}

type Params = ParsedUrlQuery & {
  slug: string
  referrer?: string
}

const Page: NextPage<Props> = ({ source, data }: Props) => {
  return (
    <Layout>
      {/* <NextSeo {...castArticleSEOProps(article)} /> */}

      <div className="prose format m-auto max-w-prose p-8">
        <div className="relative mx-auto max-w-[37.5rem] pb-24 pt-20 text-center">
          <Heading.H1>{data.title}</Heading.H1>

          <Typography.Paragraph className="mt-4 text-base leading-7 text-slate-600">
            {data.description}
          </Typography.Paragraph>
        </div>

        <div className="prose prose-sm prose-slate mx-auto max-w-[40rem] prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
          <MDXRemote {...source} />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const entries = listEntries('customer')
  const paths = entries.map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const mdx = await processMDXPage<Data>('customer', params!.slug)
  return {
    props: {
      ...mdx,
    },
  }
}

export default Page
