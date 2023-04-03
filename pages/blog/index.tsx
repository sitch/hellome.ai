import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { site } from '@/data/siteConfig'
import ArticlePage from '@/components/mdx/blog/articles/ArticlePage'
import Layout from '@/components/mdx/Layout'
import { processMDXArticles } from '@/lib/mdx'
import { Article } from '@/lib/mdx/types'
import { GetStaticProps, NextPage } from 'next'
import Hero from '@/components/mdx/Hero'

export type Props = {
  articles: Article[]
}

const Page: NextPage<Props> = ({ articles }: Props) => {
  const [searchValue, setSearchValue] = useState(['', ''])

  const filteredArticles = articles
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
    <Layout
    // HeroComp={() => <Hero heroData={heroData} />}
    >
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
        {filteredArticles.length === 0 && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No articles found.
          </p>
        )}
        {filteredArticles.map((article) => (
          <ArticlePage key={article.title} article={article}>
            Children
          </ArticlePage>
        ))}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = await processMDXArticles('blog/articles')
  return {
    props: {
      articles,
    },
  }
}

export default Page
