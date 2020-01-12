const withCSS = require('@zeit/next-css')
const withReactSvg = require('next-react-svg')
const withImages = require('next-images')
const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')

const offlineConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest),
  workboxOpts: {
    modifyURLPrefix: {
      'static/': '_next/static/',
      'public/': '/',
    },
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            // maxAgeSeconds: 3 * 24 * 60 * 60, // 3 days
            maxAgeSeconds: 60, //
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

module.exports = withPlugins([withImages, withCSS, [withOffline, offlineConfig]])
