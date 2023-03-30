import { Author } from '@/lib/mdx/types'

export interface AuthorCardProps {
  author: Author
}

export const AuthorCard = ({ author }: AuthorCardProps) => {
  return <>Author Card</>
}
