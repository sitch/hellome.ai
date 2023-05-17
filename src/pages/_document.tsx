import Document, { Head, Html, Main, NextScript } from "next/document"
import i18nextConfig from "next-i18next.config"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { DocumentHeadMetadata } from "@/components/@gen/pwa/head-metadata"

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
          <DocumentHeadMetadata />

          {/* NewRelic */}
          {/* <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: this.props.browserTimingHeader }}
          /> */}
        </Head>

        <body
          className={cn(
            "loading",
            "min-h-screen",
            "bg-background",
            "font-sans antialiased",
            fontSans.variable,
          )}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
