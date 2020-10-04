const path = require('path')
const withReactSvg = require('next-react-svg')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [withImages],
  [withReactSvg, { include: path.resolve(__dirname, 'src/svg') }],
])
