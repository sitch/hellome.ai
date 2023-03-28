import Link from 'next/link'
import Image from 'next/image'

export type BlogPostPageProps = {
  // title: string
  // image: string
  // summary: string
  // slug: string
  post: object
}

const BlogPostPage = ({ post }: BlogPostPageProps) => {
  return <>BLOG</>
  // const { title, image, summary, slug } = post
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

export default BlogPostPage
