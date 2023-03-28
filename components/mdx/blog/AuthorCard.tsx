import Link from 'next/link'
import Image from 'next/image'

export type AuthorCardProps = {
  title: string
  image: string
  summary: string
  slug: string
  author: object
}

const AuthorCard = ({ title, image, summary, slug }: AuthorCardProps) => {
  return (
    <aside>
      <Image src={image} alt={`Image of ${title}`} width="300" height="180" />
      <Link legacyBehavior href={`/blog/${slug}`}>
        <h3>{title}</h3>
      </Link>
      <p>{summary}</p>
    </aside>
  )
}

export default AuthorCard
