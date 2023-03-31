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
  reactStrictMode: true,
  i18n: i18nextConfig.i18n,

  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-left',
  },

  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
    ['date-fns']: {
      transform: 'date-fns/fp/{{member}}',
    },
    ['@fortawesome/free-solid-svg-icons']: {
      transform: '@fortawesome/free-solid-svg-icons/{{member}}',
    },
  },

  swcMinify: true,
  outputFileTracing: true,
  productionBrowserSourceMaps: true,

  // compiler: {
  //   removeConsole: {
  //     exclude: ['error'],
  //   },
  // },

  // experimental: {
  //   optimizeCss: true,
  //   swcTraceProfiling: true,
  //   // mdxRs: true,
  // },
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
}

module.exports = withBundleAnalyzer(withPWA(withRoutes(nextConfig)))
