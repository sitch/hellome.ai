import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { useEffect } from 'react'

const redirects = {
  'reddit-forum': 'https://www.reddit.com/r/HelloMe.ai/',
  'join-discord': 'https://www.reddit.com/r/HelloMe.ai/',
}
type Slug = keyof typeof redirects
type Destination = string

type Props = {
  slug: Slug
  destination: Destination
}

type Params = ParsedUrlQuery & {
  slug: Slug
}

const Page: NextPage<Props> = ({ destination }: Props) => {
  const router = useRouter()
  // router.push(destination)

  useEffect(() => {
    window.location.href = destination
  })

  return <div></div>
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const slugs = Object.keys(redirects) as Slug[]
  const paths = slugs.map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  const slug = params!.slug
  const destination = redirects[slug]
  return {
    props: {
      slug,

      destination,
    },
    // redirect: {
    //   destination,
    //   permanent: false,
    // },
  }
}

export default Page
