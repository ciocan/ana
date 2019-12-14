/* eslint-disable */
const withCSS = require('@zeit/next-css')
const withReactSvg = require('next-react-svg')
const path = require('path')
const withImages = require('next-images')

module.exports = withImages(
  withCSS(
    withReactSvg({
      include: path.resolve(__dirname, 'src/icons'),
      webpack(config, options) {
        return config
      },
    })
  )
)
