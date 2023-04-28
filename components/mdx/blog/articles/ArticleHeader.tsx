import { ReactNode } from "react"
import Link from "next/link"

import { Article } from "@/lib/mdx/types"

import * as DateTimes from "@/components/mdx/ui/DateTimes"
import * as Heading from "@/components/mdx/ui/Heading"
import * as Lists from "@/components/mdx/ui/Lists"
import * as Media from "@/components/mdx/ui/Media"
import * as Typography from "@/components/mdx/ui/Typography"

export type ArticleHeaderProps = {
  article: Article
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <>
      <header className="not-format mb-4 lg:mb-6">
        <address className="mb-6 flex items-center not-italic">
          <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
            <Link
              href={article.author!.route}
              as={article.author!.url}
              rel="author"
              aria-label={article.author!.name}
            >
              <Media.Img
                className="mr-4 h-16 w-16 rounded-full"
                src={article.photo}
                alt={`photo of ${article.author!.name}`}
                height={64}
                width={64}
              />
            </Link>
            <div>
              <Link
                href={article.author!.route}
                rel="author"
                as={article.author!.url}
                aria-label={article.author!.name}
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                {article.author!.name}
              </Link>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                {article.author!.title}
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

export default ArticleHeader
