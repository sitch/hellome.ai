import Link from 'next/link'
import { Article, Author } from '@/lib/mdx/types'
import { useTranslation } from 'next-i18next'

import * as Heading from '@/components/mdx/ui/Heading'
import * as Lists from '@/components/mdx/ui/Lists'
import * as DateTimes from '@/components/mdx/ui/DateTimes'
import * as Media from '@/components/mdx/ui/Media'
import * as Typography from '@/components/mdx/ui/Typography'

type ArticleListItemProps = {
  author: Author
  article: Article
  displayAuthorSection?: boolean
}

export const ArticleListItem = ({
  author,
  article,
  displayAuthorSection = true,
}: ArticleListItemProps) => {
  const { t } = useTranslation('articles')

  const viewCount = 0
  const commentCount = 0

  return (
    <>
      <div key={article.slug} className="flex flex-wrap py-8 md:flex-nowrap">
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
            href={article.route}
            aria-label="Article"
            // className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            <h2 className="title-font mb-2 text-2xl font-medium text-gray-900">
              {article.title}
            </h2>
            <p className="leading-relaxed">{article.summary}</p>
          </Link>

          <div className="mb-4 mt-auto flex w-full flex-wrap items-center border-b-2 border-gray-100 pb-4">
            {/* <Link
              href={article.route}
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
            </Link> */}

            <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400">
              <svg
                className="mr-1 h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {viewCount}
            </span>
            <span className="inline-flex items-center text-sm leading-none text-gray-400">
              <svg
                className="mr-1 h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              {commentCount}
            </span>

            {/* 
        <a className="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/103x103" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">Alper Kamu</span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span>
          </span>
        </a>

 */}
          </div>

          {displayAuthorSection && (
            <div className="flex items-center">
              <Link
                href={author.route}
                as={author.url}
                aria-label={author.name}
                className="mr-3"
              >
                <Media.Img
                  className="h-10 w-10 rounded-full object-cover shadow-sm"
                  src={article.photo}
                  alt={`photo of ${author.name}`}
                  height={40}
                  width={40}
                />
              </Link>
              <div>
                <Link
                  href={author.route}
                  as={author.url}
                  aria-label={author.name}
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  {author.name}
                </Link>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  {author.title}
                </p>
              </div>
            </div>
          )}

          {/* <Link
                  href={author.route}
                  as={author.url}
                  aria-label={author.name}
                  // className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  className="inline-flex items-center"
                >


          <Media.Img
                  // className="h-10 w-10 rounded-full object-cover shadow-sm"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  src={article.photo}
                  alt={`photo of ${author.name}`}
                  height={64}
                  width={64}
                />

          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900"> {author.name}</span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5"> {author.title}</span>
          </span>
          </Link> */}
        </div>
      </div>
    </>
  )
}
