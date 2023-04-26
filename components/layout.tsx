import { SiteHeader } from '@/components/site-header'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  )
}
