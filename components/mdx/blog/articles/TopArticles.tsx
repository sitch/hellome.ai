import { Article } from "@/lib/mdx/types"

import { ArticleCard } from "./ArticleCard"

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
          <ArticleCard
            layout="top"
            author={articleTop.author!}
            article={articleTop}
          />
        </div>
        <div className="flex flex-col space-y-8 lg:col-span-3">
          {articlesList.map((article) => (
            <ArticleCard
              key={article.slug}
              author={article.author!}
              article={article}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
