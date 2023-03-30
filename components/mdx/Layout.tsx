import { JSXElementConstructor, ReactNode } from 'react'
import { DefaultSeo } from 'next-seo'
import { MDXProvider } from '@mdx-js/react'
import { MDXType } from '@/lib/mdx/types'

import type { MDXComponents } from 'mdx/types.js'
import * as Heading from '@/components/mdx/ui/Heading'
import * as Lists from '@/components/mdx/ui/Lists'
import * as Media from '@/components/mdx/ui/Media'
import * as Typography from '@/components/mdx/ui/Typography'
import Header from '@/components/mdx/Header'
import Footer from '@/components/mdx/Footer'
import SEO from '@/next-seo.config'

const components: MDXComponents = {
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
}

export interface LayoutProps {
  type?: MDXType
  HeroComp?: JSXElementConstructor<{}>
  children: ReactNode
}
const Layout = ({ type, children, HeroComp }: LayoutProps) => {
  // Required
  if (typeof window === undefined) {
    return null
  }

  return (
    <>
      <MDXProvider components={components}>
        {/* <DefaultSeo {...SEO} /> */}
        {/* <Header HeroComp={HeroComp} /> */}
        {children}
        {/* <Footer /> */}
      </MDXProvider>
    </>
  )
}

export default Layout
