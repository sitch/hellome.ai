// Base
import "@/styles/global/main.css"
import "@/styles/global/chrome-bug.css"
import "@/styles/global/dark-mode.css"
import "@/styles/global/filepond.css"
// import "@fontsource/inter";
// import "@fontsource/maven-pro"

// Icons
import "@fortawesome/fontawesome-svg-core/styles.css"
import { useEffect } from "react"
import type { AppProps, NextWebVitalsMetric } from "next/app"
import Head from "next/head"
import { config } from "@fortawesome/fontawesome-svg-core"
import { Analytics } from "@vercel/analytics/react"
import { appWithTranslation } from "next-i18next"
import { GoogleAnalytics, event, pageView } from "nextjs-google-analytics"

import { trpc } from "@/utils/trpc"
import { DefaultWebsiteSEO } from "@/components/seo/DefaultWebsiteSEO"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  // // Theme
  // const { activeTheme, inactiveTheme } = useThemeDetector()
  // useEffect(() => {
  //   document.documentElement.classList?.add(activeTheme)
  //   document.documentElement.classList?.remove(inactiveTheme)
  // }, [activeTheme, inactiveTheme])

  // // Analytics
  // const router = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     pageView({
  //       location: url,
  //       // title: "",
  //       // path: "",
  //       // sendPageView: true,
  //       // userId: "",
  //     })
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  // Apply loading class
  useEffect(() => {
    document.body.classList.remove("loading")
  }, [])

  return (
    <>
      <DefaultWebsiteSEO />

      <Head>
        {/* <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        /> */}
      </Head>
      {process.env.NODE_ENV !== "production" && (
        <GoogleAnalytics trackPageViews />
      )}

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />

        <TailwindIndicator />
      </ThemeProvider>

      {/* <Analytics mode="production" /> */}
    </>
  )
}

/**
 * @link https://github.com/i18next/next-i18next#unserializable-configs
 */
export default trpc.withTRPC(appWithTranslation(MyApp))
