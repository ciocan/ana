const path = require('path')
const withCSS = require('@zeit/next-css')
const withReactSvg = require('next-react-svg')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [withImages],
  [withCSS],
  [withReactSvg, { include: path.resolve(__dirname, 'src/svg') }],
])
