// Base
import '@/styles/global/main.css'
import '@/styles/global/chrome-bug.css'
import '@/styles/global/dark-mode.css'

// Icons
import '@fortawesome/fontawesome-svg-core/styles.css'

import { useEffect } from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics, event, pageView } from 'nextjs-google-analytics'
import { useRouter } from 'next/router'
import { config } from '@fortawesome/fontawesome-svg-core'
import { DefaultSeo } from 'next-seo'
import SEO from '@/next-seo.config'

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
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
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
    document.body.classList.remove('loading')
  }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        {/* <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        /> */}
      </Head>
      {process.env.NODE_ENV !== 'production' && (
        <GoogleAnalytics trackPageViews />
      )}

      <Component {...pageProps} />
      <Analytics mode="production" />
    </>
  )
}

/**
 * @link https://github.com/i18next/next-i18next#unserializable-configs
 */
export default appWithTranslation(MyApp)
