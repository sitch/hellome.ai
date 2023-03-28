import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { site } from '@/data/siteConfig'
import BlogPostPage from '@/components/mdx/blog/BlogPostPage'
import Layout from '@/components/mdx/Layout'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Hero from '@/components/mdx/Hero'

export type MDXBlogPost = {
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

export type BlogProps = {
  posts: MDXBlogPost[]
}

export default function Blog({ posts }: BlogProps) {
  const [searchValue, setSearchValue] = useState(['', ''])

  const filteredBlogPosts = posts
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
      <section id="blogs">
        {filteredBlogPosts.length === 0 && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPostPage key={frontMatter.title} post={frontMatter} />
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog/posts')
  return { props: { posts } }
}
