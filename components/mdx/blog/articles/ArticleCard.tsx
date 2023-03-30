import { Article } from '@/lib/mdx/types'

export interface ArticleCardProps {
  article: Article
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return <>Article Card</>
}
