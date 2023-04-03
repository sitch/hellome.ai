import { Article } from '@/lib/mdx/types'

export type ArticleCardProps = {
  article: Article
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return <>Article Card</>
}
