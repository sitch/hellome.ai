import Document, { Head, Html, Main, NextScript } from "next/document"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { site } from "@/data/siteConfig"
import i18nextConfig from "@/next-i18next.config"

type NewRelicProps = {
  browserTimingHeader: string
}

class MyDocument extends Document<NewRelicProps> {
  render() {
    const lang =
      this.props.locale ??
      this.props.__NEXT_DATA__.locale ??
      i18nextConfig.i18n.defaultLocale

    return (
      <Html lang={lang}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="application-name" content={site.name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={site.name} />
          <meta name="description" content={site.description} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />

          {/* NewRelic */}
          {/* <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: this.props.browserTimingHeader }}
          /> */}
        </Head>

        <body
          className={`loading ${cn(
            "bg-background min-h-screen font-sans antialiased",
            fontSans.variable,
          )}`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
