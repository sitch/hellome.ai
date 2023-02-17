import '@/assets/main.css'
import '@/assets/chrome-bug.css'
import '@/styles/globals.css'

import { useEffect } from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics, event } from 'nextjs-google-analytics'

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

export default function MyApp({ Component, pageProps }: AppProps) {
  // const { activeTheme, inactiveTheme } = useThemeDetector()
  // useEffect(() => {
  //   document.documentElement.classList?.add(activeTheme)
  //   document.documentElement.classList?.remove(inactiveTheme)
  // }, [activeTheme, inactiveTheme])

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
