import { type Metadata } from "next"

import { siteConfig } from "@/config/site"

import { SiteHeader } from "@/components/site-header"

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    // <>
    //   <SiteHeader />
    //   <main>{children}</main>
    // </>

    <>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
      </div>
    </>
  )
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}
