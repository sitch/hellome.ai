import { GetStaticProps } from 'next'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider } from '@mdx-js/react'
import Hero from '@/components/mdx/Hero'
import Layout from '@/components/mdx/Layout'
import { MDXStaticProps, getMDX, listEntries } from '@/lib/mdx'
import { site } from '@/data/siteConfig'
import { NextSeo } from 'next-seo'
import { castArticleSEOProps } from '@/next-seo.config'

type MDXArticle = {
  slug: string
  publishedAt: string
  photo: string
  authorHandle: string
  authorName: string
  title: string
  summary: string
}

type ArticleProps = MDXStaticProps<MDXArticle>

export default function Article({ content, data: article }: ArticleProps) {
  const title = `${article.title} | ${site.name}`

  return (
    <MDXProvider components={{ Image }}>
      <Layout
        HeroComp={() => (
          <Hero heroData={{ title, subtitle: () => <>{article.summary}</> }} />
        )}
      >
        {/* <NextSeo {...castArticleSEOProps(article)} /> */}

        <section>
          <aside>
            <h1 className="mb-12 mt-24 text-7xl font-bold">{article.title}</h1>
            <time className="italic text-gray-500">{article.publishedAt}</time>

            <Image
              src={article.photo}
              width={400}
              height={400}
              alt={`thumbnail for ${title}}`}
            />

            <p className="prose mt-12">Content</p>
            <MDXRemote {...content} />
          </aside>
        </section>
      </Layout>
    </MDXProvider>
  )
}

export async function getStaticPaths() {
  const articles = await listEntries('blog/posts')
  const paths = articles.map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const props = await getMDX('blog/posts', params?.slug)
  return { props }
}
