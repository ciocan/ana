import { extendTheme } from '@chakra-ui/core'

const fonts = {
  body: 'tex_gyre_adventor_regular',
}

const colors = {
  red: '#C2211C',
  primaryBlack: '#102443',
}

const components = {
  Heading: {
    baseStyle: {
      color: 'primaryBlack',
      fontFamily: 'tex_gyre_adventor_bold',
    },
  },
  Text: {
    baseStyle: {
      color: 'primaryBlack',
    },
  },
}

const appTheme = extendTheme({
  fonts,
  colors,
  components,
})

export default appTheme
