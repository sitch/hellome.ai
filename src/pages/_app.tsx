import { useEffect, useState } from "react"
import type { AppProps, NextWebVitalsMetric } from "next/app"
import Head from "next/head"
import Router from "next/router"
import { appWithTranslation } from "next-i18next"

import { CookieConsentProvider } from "@use-cookie-consent/react"
import { Analytics } from "@vercel/analytics/react"
import { event, GoogleAnalytics } from "nextjs-google-analytics"

import { FontFix } from "@/lib/fonts"
import { api } from "@/utils/api"

import { Toaster } from "@/components/ui/toaster"
import { PageLoader } from "@/components/app/loading/page-loader"
import { TailwindIndicator } from "@/components/app/tailwind-indicator"
import { ThemeProvider } from "@/components/app/theme-provider"
import { DefaultWebsiteSEO } from "@/components/seo/DefaultWebsiteSEO"

import { AppHeadMetadata } from "@/@gen/favicons/head-metadata"

import "@/components/books/BookCustomizer/styles.css"
import "@/styles/chrome-bug.css"
import "@/styles/filepond.css"
import "@/styles/globals.css"

import { AnimatePresence, motion } from "framer-motion"

// import "@/scenes/meshes/styles.css"

// import "@/components/characters/styles.css"

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

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  useEffect(() => {
    // Remove `loading` class when `document` is available.
    document.body.classList.remove("loading")
  }, [])

  return (
    <>
      <DefaultWebsiteSEO />
      <Head>
        <AppHeadMetadata />
        <FontFix />
      </Head>
      {process.env.NODE_ENV !== "production" && (
        <GoogleAnalytics trackPageViews />
      )}

      <CookieConsentProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            {loading ? (
              <PageLoader />
            ) : (
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <Component {...pageProps} key={router.asPath} />
              </motion.div>
            )}
          </AnimatePresence>
          <TailwindIndicator />
          <Toaster />
        </ThemeProvider>
      </CookieConsentProvider>

      <Analytics mode="production" />
    </>
  )
}

/**
 * @link https://github.com/i18next/next-i18next#unserializable-configs
 */
export default api.withTRPC(appWithTranslation(MyApp))
