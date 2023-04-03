import { ReactNode } from 'react'
import { Article } from '@/lib/mdx/types'

import * as Heading from '@/components/mdx/ui/Heading'
import * as Lists from '@/components/mdx/ui/Lists'
import * as DateTimes from '@/components/mdx/ui/DateTimes'
import * as Media from '@/components/mdx/ui/Media'
import * as Typography from '@/components/mdx/ui/Typography'

export type ArticleHeaderProps = {
  article: Article
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <>
      <header className="not-format mb-4 lg:mb-6">
        <address className="mb-6 flex items-center not-italic">
          <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
            <Media.Img
              className="mr-4 h-16 w-16 rounded-full"
              src={article.photo}
              alt={`photo of ${article.author.name}`}
              height={64}
              width={64}
            />
            <div>
              <a
                href="#"
                rel="author"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                {article.author.name}
              </a>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                {article.author.title}
              </p>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                <DateTimes.PublishTime dateTime={article.publishedAt} />
              </p>
            </div>
          </div>
        </address>
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl">
          {article.title}
        </h1>
      </header>
      <p className="lead">{article.summary}</p>
    </>
  )
}

export type ArticleProps = {
  article: Article
  children?: ReactNode
}

const Article = ({ article, children }: ArticleProps) => {
  return (
    <>
      <main className="bg-white pb-16 pt-8 dark:bg-gray-900 lg:pb-24 lg:pt-16">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4 ">
          <article className="format-sm format format-blue mx-auto w-full max-w-2xl dark:format-invert sm:format-base lg:format-lg">
            <ArticleHeader article={article} />
            {children}
          </article>
        </div>
      </main>
    </>
  )
}

export default Article
