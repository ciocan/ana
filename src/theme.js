import theme from '@chakra-ui/theme'

const fonts = { ...theme.fonts, mono: `'Menlo', monospace` }
const colors = {
  ...theme.colors,
}

const breakpoints = ['30em', '48em', '62em', '80em']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const appTheme = {
  ...theme,
  fonts,
  breakpoints,
  colors,
}

export default appTheme
