import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { site } from '@/data/siteConfig'
import AuthorPage from '@/components/mdx/blog/AuthorPage'
import Layout from '@/components/mdx/Layout'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Hero from '@/components/mdx/Hero'
import { AuthorsPage } from '@/components/mdx/blog/AuthorsPage'

export type MDXAuthorPost = {
  slug: string
  title: string
  image: string
  summary: string
  publishedAt: string
  modifiedAt?: string
  expirationAt?: string
  section: string
  locale: string
  tags?: string[]
  authors?: string[]
}

export type AuthorsProps = {
  posts: MDXAuthorPost[]
}

export default function Authors({ posts }: AuthorsProps) {
  const [searchValue, setSearchValue] = useState(['', ''])

  const filteredAuthors = posts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .filter(({ title }) => title.toLowerCase().includes(searchValue[1]))

  const heroData = {
    title: 'All Blogs',
    subtitle: () => (
      <input
        aria-label="Search blogs"
        type="text"
        onChange={({ target: { value } }) =>
          setSearchValue([value, value.toLowerCase()])
        }
        value={searchValue[0]}
        autoFocus
        placeholder="Search blogs"
      />
    ),
  }

  return (
    <Layout HeroComp={() => <Hero heroData={heroData} />}>
      <NextSeo
        title="Blog Page - HelloMe.ai"
        description="Blog for this website are available here. You can find blog using input box provided in the top. "
        canonical={`${site.url}/blog`}
        openGraph={{
          url: `${site.url}/blog`,
          title: 'Blog Page - HelloMe.ai',
          description:
            'Blog for this website are available here. You can find blog using input box provided in the top. ',
        }}
      />

      <AuthorsPage authors={filteredAuthors} />

      <section id="authors">
        {filteredAuthors.length === 0 && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredAuthors.map((frontMatter) => (
          <AuthorPage key={frontMatter.title} author={frontMatter} />
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog/authors')
  return { props: { posts } }
}
