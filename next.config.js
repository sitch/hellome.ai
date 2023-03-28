// @ts-check

const i18nextConfig = require('./next-i18next.config')
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  // fallbacks: {
  //   image: '/static/images/fallback.png',
  //   // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
  //   // font: '/static/font/fallback.woff2',
  //   // audio: ...,
  //   // video: ...,
  // },
})

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  i18n: i18nextConfig.i18n,
  // experimental: {
  //   // Prefer loading of ES Modules over CommonJS
  //   esmExternals: true,
  // },
}

module.exports = withPWA(nextConfig)
