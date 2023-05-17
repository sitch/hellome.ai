import { type ReactNode } from "react"

import { type Author } from "@/lib/mdx/types"

import { ArticleListItem } from "@/components/mdx/blog/articles/ArticleListItem"
import * as Media from "@/components/mdx/ui/Media"

type AuthorPageProps = {
  author: Author
  children: ReactNode
}

const AuthorPage = ({ author, children }: AuthorPageProps) => {
  const articles = author.articles ?? []
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col px-5 py-24">
          <div className="mx-auto lg:w-4/6">
            <div className="h-64 overflow-hidden rounded-lg">
              <Media.Img
                className="h-full w-full object-cover object-center"
                alt={author.name}
                src={author.photo}
                // width={255.994}
                // height={826.626}
                height={1024}
                width={1280}
              />
            </div>
            <div className="mt-10 flex flex-col sm:flex-row">
              <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                  {author.photo ? (
                    <Media.Img
                      className="rounded-full"
                      src={author.photo}
                      alt={`photo of ${author.name}`}
                      height={80}
                      width={80}
                    />
                  ) : (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-10 w-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  )}
                </div>
                <div className="format flex flex-col items-center justify-center text-center">
                  <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                    {author.name}
                  </h2>

                  {/* Line under author name */}
                  <div className="mb-4 mt-2 h-1 w-12 rounded bg-indigo-500"></div>

                  {/* <p className="m-0 p-0 text-base text-gray-700">
                    {author.location}
                  </p> */}

                  <p className="text-base">{author.title}</p>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
                <div className="format mb-4 text-lg leading-relaxed">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {articles.length > 0 && (
        <section>
          <div className="container mx-auto flex flex-col px-5 py-24">
            <div className="mx-auto lg:w-4/6">
              <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                More articles by the author
              </h2>

              {articles.map((article) => (
                <ArticleListItem
                  key={article.slug}
                  author={author}
                  article={article}
                  displayAuthorSection={false}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default AuthorPage
