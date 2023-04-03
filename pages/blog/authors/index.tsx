import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { site } from '@/data/siteConfig'
import AuthorPage from '@/components/mdx/blog/authors/AuthorPage'
import Layout from '@/components/mdx/Layout'
import { processMDXAuthors } from '@/lib/mdx'
import { AuthorsPage } from '@/components/mdx/blog/authors/AuthorsPage'
import { Author } from '@/lib/mdx/types'
import { GetStaticProps, NextPage } from 'next'
import Hero from '@/components/mdx/Hero'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18NextConfig from '@/next-i18next.config'

type Props = {
  authors: Author[]
}

const Page: NextPage<Props> = ({ authors }: Props) => {
  const [searchValue, setSearchValue] = useState(['', ''])

  const filteredAuthors = authors
    .filter(({ name }) => name.toLowerCase().includes(searchValue[1]))
    .sort()

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

      <section id="authors">
        {filteredAuthors.length === 0 && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}

        <AuthorsPage authors={filteredAuthors} />

        {/* {filteredAuthors.map((author) => (
          <AuthorPage key={author.handle} author={author} />
        ))} */}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locale = i18NextConfig.i18n.defaultLocale,
}) => {
  const authors = await processMDXAuthors('blog/authors')
  return {
    props: {
      authors,
      ...(await serverSideTranslations(locale, ['authors'])),
    },
  }
}

export default Page
