import { cn } from "@/lib/utils"

import {
  PageRefresh,
  type PageRefreshProps,
} from "@/components/ui/page-refresh"
import { CookieBanner } from "@/components/app/cookie-banner"
import { SiteHeader } from "@/components/app/site-header"

// import { type Metadata } from "next"
// import { siteConfig } from "@/config/site"
// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// }

type LayoutProps = PageRefreshProps & {
  children: React.ReactNode
}

export function Layout({ children, ...pageRefreshProps }: LayoutProps) {
  return (
    <>
      <div
        className={cn(
          "relative flex min-h-screen flex-col",
          // "bg-gray-100 dark:bg-gray-900",
          "bg-background dark:bg-background/80",
        )}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </div>

      <CookieBanner />
      <PageRefresh {...pageRefreshProps} />
    </>
  )
}
