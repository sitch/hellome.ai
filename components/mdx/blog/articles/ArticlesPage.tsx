import Link from 'next/link'
import { Article } from '@/lib/mdx/types'
import { useTranslation } from 'next-i18next'

import * as Heading from '@/components/mdx/ui/Heading'
import * as Lists from '@/components/mdx/ui/Lists'
import * as DateTimes from '@/components/mdx/ui/DateTimes'
import * as Media from '@/components/mdx/ui/Media'
import * as Typography from '@/components/mdx/ui/Typography'

type TopArticleListItemProps = {
  article: Article
}

const TopArticleListItem = ({ article }: TopArticleListItemProps) => {
  return (
    <>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
        <DateTimes.PublishTime
          dateTime={article.publishedAt}
          format="readable"
        />
      </p>
      <div className="mb-3">
        <Link
          href={article.url}
          aria-label="Article"
          className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
            {article.title}
          </p>
        </Link>
      </div>
      <p className="mb-4 text-base text-gray-700 md:text-lg">
        {article.summary}
      </p>
      <div className="flex items-center">
        <Link href={article.author.url} aria-label="Author" className="mr-3">
          <Media.Img
            className="h-10 w-10 rounded-full object-cover shadow-sm"
            src={article.photo}
            alt={`photo of ${article.author.name}`}
            height={40}
            width={40}
          />
        </Link>
        <div>
          <Link
            href={article.author.url}
            aria-label="Author"
            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            {article.author.name}
          </Link>
          <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
        </div>
      </div>
    </>
  )
}

type ArticleListItemProps = {
  article: Article
}

const ArticleListItem = ({ article }: ArticleListItemProps) => {
  return (
    <>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
          <DateTimes.PublishTime
            dateTime={article.publishedAt}
            format="readable"
          />
        </p>
        <div className="mb-3">
          <Link
            href={article.url}
            aria-label="Article"
            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
              {article.title}
            </p>
          </Link>
        </div>
        <p className="mb-4 text-base text-gray-700 md:text-lg">
          {article.summary}
        </p>
        <div className="flex items-center">
          <Link href={article.author.url} aria-label="Author" className="mr-3">
            <Media.Img
              className="h-10 w-10 rounded-full object-cover shadow-sm"
              src={article.photo}
              alt={`photo of ${article.author.name}`}
              height={40}
              width={40}
            />
          </Link>
          <div>
            <Link
              href={article.author.url}
              aria-label="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {article.author.name}
            </Link>
            <p className="text-sm font-medium leading-4 text-gray-600">
              {article.author.title}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

type TopArticlesProps = {
  articles: Article[]
}

export const TopArticles = ({ articles }: TopArticlesProps) => {
  const articleTop = articles[0]
  const articlesList = articles.slice(1, 3)

  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="row-gap-8 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <TopArticleListItem article={articleTop} />
        </div>
        <div className="flex flex-col space-y-8 lg:col-span-3">
          {articlesList.map((article) => (
            <ArticleListItem key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}

export type ArticlesPageProps = {
  articles: Article[]
}

export const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  // const articlesTop = articles.slice(0, 3)
  // const articlesRest = articles.slice(3)

  const { t } = useTranslation('articles')

  return (
    <>
      <section className="body-font overflow-hidden text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="flex flex-wrap py-8 md:flex-nowrap"
              >
                <div className="mb-6 flex shrink-0 flex-col md:mb-0 md:w-64">
                  <span className="title-font font-semibold text-gray-700">
                    {article.category}
                  </span>
                  <span className="mt-1 text-sm text-gray-500">
                    <DateTimes.PublishTime
                      dateTime={article.publishedAt}
                      format="readable"
                    />
                  </span>
                </div>
                <div className="md:grow">
                  <Link
                    href={article.url}
                    aria-label="Article"
                    // className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    <h2 className="title-font mb-2 text-2xl font-medium text-gray-900">
                      {article.title}
                    </h2>
                    <p className="leading-relaxed">{article.summary}</p>
                  </Link>

                  <div>
                    <Link
                      href={article.url}
                      aria-label="Article"
                      className="mt-4 inline-flex items-center text-indigo-500"
                      // className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      {t('ClickLink')}

                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                      {/* </a> */}
                    </Link>

                    <div className="flex items-center">
                      <Link
                        href={article.author.url}
                        aria-label="Author"
                        className="mr-3"
                      >
                        <Media.Img
                          className="h-10 w-10 rounded-full object-cover shadow-sm"
                          src={article.photo}
                          alt={`photo of ${article.author.name}`}
                          height={40}
                          width={40}
                        />
                      </Link>
                      <div>
                        <Link
                          href={article.author.url}
                          aria-label="Author"
                          className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          {article.author.name}
                        </Link>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                          Author
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )

  // return (
  //   <>
  //     {/* <TopArticles articles={articlesTop} /> */}

  //     <main className="bg-white pb-16 pt-8 dark:bg-gray-900 lg:pb-24 lg:pt-16">
  //       <div className="mx-auto flex max-w-screen-xl justify-between px-4 ">
  //         <article className="format-sm format format-blue mx-auto w-full max-w-2xl dark:format-invert sm:format-base lg:format-lg">
  //           <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
  //             <div className="grid gap-5 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-1">
  //               {articles.map((article) => (
  //                 <ArticleListItem key={article.slug} article={article} />
  //               ))}
  //             </div>
  //           </div>
  //         </article>
  //       </div>
  //     </main>
  //   </>
  // )
}
