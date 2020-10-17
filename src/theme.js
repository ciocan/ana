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
      fontFamily: 'tex_gyre_adventor_bold',
    },
  },
}

const breakpoints = ['30em', '48em', '62em', '80em']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const appTheme = extendTheme({
  fonts,
  breakpoints,
  colors,
  components,
})

export default appTheme
