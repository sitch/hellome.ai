import { type ParsedUrlQuery } from "querystring"
import { type GetStaticPaths, type GetStaticProps, type NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { MDXRemote } from "next-mdx-remote"
import { NextSeo } from "next-seo"

import {
  listEntries,
  processMDXPage,
  type Data,
  type MDXPageProps,
} from "@/lib/mdx"

import Layout from "@/components/mdx/Layout"
import { Heading, Typography } from "@/components/mdx/ui"

import { site } from "@/data/siteConfig"
import i18NextConfig from "@/next-i18next.config"
import { castArticleSEOProps } from "@/next-seo.config"

type Props = MDXPageProps<Data> & {
  slug: string
  // article: Article
}

type Params = ParsedUrlQuery & {
  slug: string
  referrer?: string
}

const Page: NextPage<Props> = ({ source, data }: Props) => {
  return (
    <Layout>
      {/* <NextSeo {...castArticleSEOProps(article)} /> */}

      <div className="format prose m-auto max-w-prose p-8">
        <div className="relative mx-auto max-w-[37.5rem] pb-24 pt-20 text-center">
          <Heading.H1>{data.title}</Heading.H1>

          <Typography.Paragraph className="mt-4 text-base leading-7 text-slate-600">
            {data.description}
          </Typography.Paragraph>
        </div>

        <div className="prose prose-sm prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600 mx-auto max-w-[40rem]">
          <MDXRemote {...source} />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const entries = listEntries("policies")
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
  const mdx = await processMDXPage<Data>("policies", slug)
  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer"])),
      slug,
      ...mdx,
    },
  }
}

export default Page
