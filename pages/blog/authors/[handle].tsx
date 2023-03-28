import { GetStaticProps } from 'next'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider } from '@mdx-js/react'
import Hero from '@/components/mdx/Hero'
import Layout from '@/components/mdx/Layout'
import { MDXStaticProps, getMDX, listEntries } from '@/lib/mdx'
import { NextSeo } from 'next-seo'
import AuthorPage from '@/components/mdx/blog/AuthorPage'
// import { castAuthorSEOProps } from '@/next-seo.config'

type MDXAuthor = {
  handle: string
  name: string
  photo: string
  startDate: string
}

type AuthorProps = MDXStaticProps<MDXAuthor>

export default function Author({ content, data: author }: AuthorProps) {
  const title = `${author.name} - ${author.handle}`

  return (
    <MDXProvider components={{ Image }}>
      <Layout HeroComp={() => <Hero heroData={{ title }} />}>
        {/* <NextSeo {...castAuthorSEOProps(author)} /> */}

        <AuthorPage author={author} />

        <section>
          <aside>
            <div>
              <Image
                src={author.photo}
                width={400}
                height={400}
                alt={`photo of ${author.name} - ${author.handle}`}
              />
            </div>
            <div>
              <MDXRemote {...content} />
            </div>
          </aside>
        </section>
      </Layout>
    </MDXProvider>
  )
}

export async function getStaticPaths() {
  const authors = await listEntries('blog/authors')
  const paths = authors.map((handle) => ({ params: { handle } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const props = await getMDX('blog/authors', params?.handle)
  return { props }
}
