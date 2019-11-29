/* eslint-disable */
const withCSS = require('@zeit/next-css')
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withCSS(
  withReactSvg({
    include: path.resolve(__dirname, 'src/icons'),
    webpack(config, options) {
      return config
    },
  })
)
