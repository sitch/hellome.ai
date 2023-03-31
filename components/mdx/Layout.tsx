import { JSXElementConstructor, ReactNode, Suspense } from 'react'
import { DefaultSeo } from 'next-seo'
import { MDXProvider } from '@mdx-js/react'
import type { MDXComponents } from 'mdx/types'
import { DateTimes, Heading, Lists, Media, Typography } from './ui'
import Link from 'next/link'
import { LinkProps } from 'next/link'
import { route } from 'nextjs-routes'

export const components: MDXComponents = {
  ...DateTimes,
  ...Heading,
  ...Lists,
  ...Media,
  ...Typography,
  img: Media.ResponsiveImage,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  ol: Lists.OrderedList,
  li: Lists.ListItem,
  p: Typography.Paragraph,
  pre: Typography.Pre,
  code: Typography.Code,
  // a: ({ ref: _ref, href, ...props }) => (
  //   <Link href={route({ pathname: href! } as Route)} {...props} />
  // ),
  Link,
}

export type LayoutProps = {
  // type?: MDXType
  HeroComp?: JSXElementConstructor<{}>
  children: ReactNode
}
const Layout = ({ children, HeroComp }: LayoutProps) => {
  // if(typeof window === 'undefined' ) {
  //   return null
  // }

  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <MDXProvider components={components}>
          {/* <DefaultSeo {...SEO} /> */}
          {/* <Header HeroComp={HeroComp} /> */}
          {children}
          {/* <Footer /> */}
        </MDXProvider>
      </Suspense>
    </>
  )
}

export default Layout
