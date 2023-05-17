import { type ParsedUrlQuery } from "querystring"
import { type GetStaticPaths, type GetStaticProps, type NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { MDXRemote } from "next-mdx-remote"

import {
  listArticleSources,
  listEntries,
  processMDXPage,
  type MDXPageProps,
} from "@/lib/mdx"
import { castAuthor, type Author, type AuthorSource } from "@/lib/mdx/types"

import { AuthorSEO } from "@/components/seo/AuthorSEO"

import { BlogLayout } from "@/mdx/Layout"
import AuthorPage from "@/mdx/blog/authors/AuthorPage"

import { type I18nNamespaces } from "~/i18next.d"
import i18NextConfig from "~/next-i18next.config"

const ns: (keyof I18nNamespaces)[] = ["common", "authors", "footer"]

type Props = MDXPageProps<AuthorSource> & {
  author: Author
}

type Params = ParsedUrlQuery & {
  handle: string
}

const AuthorShow: NextPage<Props> = ({ source, author }: Props) => {
  return (
    <BlogLayout seo={<AuthorSEO author={author} />}>
      <AuthorPage author={author}>
        <MDXRemote {...source} />
      </AuthorPage>
    </BlogLayout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const entries = listEntries("blog/authors")
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
  const mdx = await processMDXPage<AuthorSource>("blog/authors", handle)
  const articles = await listArticleSources()
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
      ...mdx,
      author: castAuthor(
        { ...mdx.data, handle },
        articles.filter(({ authorHandle }) => authorHandle === mdx.data.handle),
      ),
    },
  }
}

export default AuthorShow
