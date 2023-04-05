// // @ts-check

/**
 * @type {import('next-pwa').PWAConfig}
 **/
const pwaConfig = {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  // fallbacks: {
  //   image: '/static/images/fallback.png',
  //   // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
  //   // font: '/static/font/fallback.woff2',
  //   // audio: ...,
  //   // video: ...,
  // },
}

const analyzeConfig = {
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
}

const withPWA = require('next-pwa')(pwaConfig)
const withRoutes = require('nextjs-routes/config')()
const withBundleAnalyzer = require('@next/bundle-analyzer')(analyzeConfig)
const i18nextConfig = require('./next-i18next.config')

// // You might need to insert additional domains in script-src if you are using external services
// const ContentSecurityPolicy = `
//   default-src 'self';
//   script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app;
//   style-src 'self' 'unsafe-inline';
//   img-src * blob: data:;
//   media-src 'none';
//   connect-src *;
//   font-src 'self';
//   frame-src giscus.app
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
      transform: 'lodash/fp/{{member}}',
      preventFullImport: true,
    },
    ['date-fns']: {
      transform: 'date-fns/{{member}}',
      preventFullImport: true,
    },
    ['@fortawesome/free-solid-svg-icons']: {
      transform: '@fortawesome/free-solid-svg-icons/{{member}}',
      skipDefaultConversion: true,
      preventFullImport: true,
    },
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blog/articles',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // {
          //   key: 'Content-Security-Policy',
          //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          // },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // {
          //   key: 'X-XSS-Protection',
          //   value: '1; mode=block',
          // },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-left',
  },
}

module.exports = withBundleAnalyzer(withPWA(withRoutes(nextConfig)))
