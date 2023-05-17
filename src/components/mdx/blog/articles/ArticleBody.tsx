import { type ReactNode } from "react"

import { type Article } from "@/lib/mdx/types"

import ArticleHeader from "@/components/mdx/blog/articles/ArticleHeader"

type ArticleBodyProps = {
  article: Article
  children: ReactNode
}

export const ArticleBody = ({ article, children }: ArticleBodyProps) => {
  return (
    <>
      <main className="bg-white pb-16 pt-8 dark:bg-gray-900 lg:pb-24 lg:pt-16">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4 ">
          <article className="prose prose-sm prose-blue mx-auto w-full max-w-2xl dark:prose-invert sm:prose-base lg:prose-lg">
            <ArticleHeader article={article} />
            {children}
            {/* <section className="">{children}</section> */}
          </article>
        </div>
      </main>
    </>
  )
}
