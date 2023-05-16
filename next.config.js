// /**
//  * @link https://github.com/pixelass/pwa-template/blob/main/next.config.mjs
//  * @param {((config?: object) => import('next').NextConfig)[]} plugins
//  * @param {import('next').NextConfig} config
//  * @returns {import('next').NextConfig}
//  */
// function withPlugins(plugins, config) {
//   return plugins.reduce((prev, next) => next(prev), config)
// }

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
require.resolve("./config/env.mjs")

/**
 * @type {import('next-pwa').PWAConfig}
 **/
const pwaConfig = {
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // fallbacks: {
  //   image: '/static/images/fallback.png',
  //   // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
  //   // font: '/static/font/fallback.woff2',
  //   // audio: ...,
  //   // video: ...,
  // },
}
const i18nextConfig = require("./next-i18next.config")

const analyzeConfig = {
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
}

const withPWA = require("next-pwa")(pwaConfig)
// @ts-ignore
const withRoutes = require("nextjs-routes/config")({
  outDir: "",
})
const withBundleAnalyzer = require("@next/bundle-analyzer")(analyzeConfig)
// const { withSentryConfig } = require('@sentry/nextjs')

// // You might need to insert additional domains in script-src if you are using external services
// const ContentSecurityPolicy = `
//   default-src 'self';
//   script-src 'self' 'unsafe-eval' 'unsafe-inline' hellome.ai;
//   style-src 'self' 'unsafe-inline';
//   img-src * blob: data:;
//   media-src 'none';
//   connect-src *;
//   font-src 'self';
//   frame-src hellome.ai
// `

// const securityHeaders = [
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
//   {
//     key: 'Content-Security-Policy',
//     value: ContentSecurityPolicy.replace(/\n/g, ''),
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
//   {
//     key: 'Referrer-Policy',
//     value: 'strict-origin-when-cross-origin',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
//   {
//     key: 'X-Frame-Options',
//     value: 'DENY',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
//   {
//     key: 'X-Content-Type-Options',
//     value: 'nosniff',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
//   {
//     key: 'X-DNS-Prefetch-Control',
//     value: 'on',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
//   {
//     key: 'Strict-Transport-Security',
//     value: 'max-age=31536000; includeSubDomains',
//   },
//   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
//   {
//     key: 'Permissions-Policy',
//     value: 'camera=(), microphone=(), geolocation=()',
//   },
// ]

// image-src 'self';
// script-src 'self' google-analytics.com;
// default-src 'self';
const ContentSecurityPolicy = `
  default-src 'self' data: blob:;
  script-src 'self' 'unsafe-inline' 'unsafe-eval' data: recaptcha.net;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self';
  connect-src 'self' ws: recaptcha.net;
  worker-src 'self';
  child-src 'self';
`
// font-src * 'unsafe-inline' data: blob:;
// script-src 'self' 'unsafe-inline' 'unsafe-eval' data: recaptcha.net;

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    optimizeCss: true,
    swcTraceProfiling: true,
    // mdxRs: true,
  },
  i18n: i18nextConfig.i18n,
  swcMinify: true,
  reactStrictMode: true,
  outputFileTracing: true,
  productionBrowserSourceMaps: true,
  // compiler: {
  //   removeConsole: {
  //     exclude: ['error'],
  //   },
  // },
  modularizeImports: {
    lodash: {
      // issue with fp: range
      // transform: "lodash/fp/{{member}}",
      transform: "lodash/{{member}}",
      preventFullImport: true,
    },
    ["date-fns"]: {
      transform: "date-fns/{{member}}",
      preventFullImport: true,
    },
  },
  images: {
    domains: [
      `${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`,
      `${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com`,
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blog/articles",
        permanent: true,
      },
      {
        source: "/pwa/:asset",
        destination: "/:asset",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      // {
      //   source: '/(.*)',
      //   headers: [
      //     {
      //       key: 'X-Frame-Options',
      //       value: 'DENY',
      //     },
      //     // {
      //     //   key: 'Content-Security-Policy',
      //     //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
      //     // },
      //     {
      //       key: 'X-Content-Type-Options',
      //       value: 'nosniff',
      //     },
      //     // {
      //     //   key: 'X-XSS-Protection',
      //     //   value: '1; mode=block',
      //     // },
      //     {
      //       key: 'Permissions-Policy',
      //       value: 'camera=(), microphone=(), geolocation=()',
      //     },
      //     {
      //       key: 'Referrer-Policy',
      //       value: 'origin-when-cross-origin',
      //     },
      //   ],
      // },
    ]
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-left",
  },
}

// See: https://blog.sentry.io/2022/09/27/deploy-your-next-js-application-on-vercel-using-sentry-and-github-actions/

// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

/**
 * @link https://github.com/getsentry/sentry-webpack-plugin#options
 * @type {Partial<import('@sentry/nextjs').SentryWebpackPluginOptions>}
 **/
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // <https://github.com/getsentry/sentry-webpack-plugin#options>.
}

/**
 * @type {import('@sentry/nextjs/types/config/types').UserSentryOptions}
 **/
const userSentryOptions = {
  hideSourceMaps: true,
}

// module.exports = withSentryConfig(
//   withBundleAnalyzer(withPWA(withRoutes(nextConfig))),
//   sentryWebpackPluginOptions,
//   userSentryOptions
// )

module.exports = withBundleAnalyzer(withPWA(withRoutes(nextConfig)))
