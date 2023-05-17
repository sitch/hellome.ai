import Link from "next/link"

import { type Article, type Author } from "@/lib/mdx/types"

import * as DateTimes from "@/mdx/ui/DateTimes"
import * as Media from "@/mdx/ui/Media"

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
          className="hover:text-deep-purple-accent-400 inline-block text-black transition-colors duration-200"
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
            className="hover:text-deep-purple-accent-400 font-semibold text-gray-800 transition-colors duration-200"
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
  layout?: "top" | "default"
}

export const ArticleCard = ({ author, article, layout }: ArticleCardProps) => {
  if (layout === "top") {
    return <TopArticleCard author={author} article={article} />
  }

  return (
    //   <!--
    //   Heads up! 👋

    //   Custom CSS:
    //     - animate-background https://github.com/markmead/hyperui/blob/main/tailwind.preset.js
    // -->

    <article className="animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm">
      <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          10th Oct 2022
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            How to center an element using JavaScript and jQuery
          </h3>
        </a>

        <div className="mt-4 flex flex-wrap gap-1">
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            Snippet
          </span>

          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            JavaScript
          </span>
        </div>
      </div>
    </article>
  )

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
            className="hover:text-deep-purple-accent-400 inline-block text-black transition-colors duration-200"
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
              className="hover:text-deep-purple-accent-400 font-semibold text-gray-800 transition-colors duration-200"
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
