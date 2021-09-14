/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const withOffline = require('next-offline')

module.exports = {
  reactStrictMode: true,
  withPWA: () =>
    withPWA({
      pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/,
          },
        ],
      },
    }),
  withOffline: () =>
    withOffline({
      workboxOpts: {
        swDest: 'public/service-worker.js',
        runtimeCaching: [
          {
            handler: 'networkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
}
