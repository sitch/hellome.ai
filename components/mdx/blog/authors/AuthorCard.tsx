import { Author } from '@/lib/mdx/types'

export type AuthorCardProps = {
  author: Author
}

export const AuthorCard = ({ author }: AuthorCardProps) => {
  return <>Author Card</>
}
