import Link from 'next/link'
import Image from 'next/image'

export type AuthorPageProps = {
  // title: string
  // image: string
  // summary: string
  // slug: string
  author: object
}

const AuthorPage = ({ author }: AuthorPageProps) => {
  return <>AUTHOR</>
  // const { title, image, summary, slug } = author
  // return (
  //   <aside>
  //     <Image src={image} alt={`Image of ${title}`} width="300" height="180" />
  //     <Link legacyBehavior href={`/blog/${slug}`}>
  //       <h3>{title}</h3>
  //     </Link>
  //     <p>{summary}</p>
  //   </aside>
  // )
}

export default AuthorPage
