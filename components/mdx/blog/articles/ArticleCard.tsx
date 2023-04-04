import Link from 'next/link'
import { Article, Author } from '@/lib/mdx/types'
import { useTranslation } from 'next-i18next'

import * as Heading from '@/components/mdx/ui/Heading'
import * as Lists from '@/components/mdx/ui/Lists'
import * as DateTimes from '@/components/mdx/ui/DateTimes'
import * as Media from '@/components/mdx/ui/Media'
import * as Typography from '@/components/mdx/ui/Typography'

type TopArticleCardProps = {
  author: Author
  article: Article
}

const TopArticleCard = ({ author, article }: TopArticleCardProps) => {
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
          href={article.route}
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
        <Link
          href={author.route}
          as={author.url}
          aria-label={author.title}
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
            aria-label={author.title}
            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            {author.name}
          </Link>
          {/* <p className="text-sm font-medium leading-4 text-gray-600">Author</p> */}
        </div>
      </div>
    </>
  )
}

type ArticleCardProps = {
  author: Author
  article: Article
  layout?: 'top' | 'default'
}

export const ArticleCard = ({ author, article, layout }: ArticleCardProps) => {
  if (layout === 'top') {
    return <TopArticleCard author={author} article={article} />
  }

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
            href={article.route}
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
          <Link
            href={author.route}
            as={author.url}
            aria-label={author.title}
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
              aria-label={author.title}
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {author.name}
            </Link>
            <p className="text-sm font-medium leading-4 text-gray-600">
              {author.title}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
