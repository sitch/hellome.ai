import "@/styles/chrome-bug.css"
import "@/styles/filepond.css"
import "@/styles/globals.css"
import { useEffect } from "react"
import type { AppProps, NextWebVitalsMetric } from "next/app"
import Head from "next/head"
import { appWithTranslation } from "next-i18next"

import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics, event } from "nextjs-google-analytics"

import { env } from "@/config/env.mjs"
import { fontSans } from "@/lib/fonts"
import { api } from "@/utils/api"

import { DefaultWebsiteSEO } from "@/components/seo/DefaultWebsiteSEO"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

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
  useEffect(() => {
    // Remove `loading` class when `document` is available.
    document.body.classList.remove("loading")
  }, [])

  return (
    <>
      <DefaultWebsiteSEO />
      <Head>
        {/* Start Font Fix */}
        {/* See: https://levelup.gitconnected.com/how-to-make-next-js-13s-optimized-fonts-work-with-tailwind-css-c3c5e57d38aa */}
        <style
          // eslint-disable-next-line react/no-unknown-property
          jsx
          // eslint-disable-next-line react/no-unknown-property
          global
        >
          {`
            :root {
              --font-sans: ${fontSans.style.fontFamily};
            }
          `}
        </style>
        {/* End Font Fix */}
      </Head>
      {process.env.NODE_ENV !== "production" && (
        <GoogleAnalytics trackPageViews />
      )}

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />

        <TailwindIndicator />
      </ThemeProvider>

      <Analytics mode="production" />
    </>
  )
}

/**
 * @link https://github.com/i18next/next-i18next#unserializable-configs
 */
export default api.withTRPC(appWithTranslation(MyApp))
