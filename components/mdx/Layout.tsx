import Header from '@/components/mdx/Header'
import Footer from '@/components/mdx/Footer'
import { DefaultSeo } from 'next-seo'
import SEO from '@/next-seo.config'
import { JSXElementConstructor, ReactNode } from 'react'

export type LayoutProps = {
  HeroComp: JSXElementConstructor<{}>
  children: ReactNode
}
const Layout = ({ children, HeroComp }: LayoutProps) => {
  if (typeof window === undefined) {
    return null
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <Header HeroComp={HeroComp} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
