import { extendTheme } from '@chakra-ui/core'

const styles = {
  global: {
    body: {
      bg: 'homeBg',
    },
  },
}

const fonts = {
  body: 'tex_gyre_adventor_regular',
}

const colors = {
  homeBg: '#FDFBF6',
  red: '#CE3C50',
  primaryBlack: '#102443',
  grey: '#3F3F3F',
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
    variants: {
      selected: {
        color: 'red',
      },
    },
  },
  Link: {
    variants: {
      button: {
        display: 'inline-block',
        textDecoration: 'none',
        color: 'primaryBlack',
        borderColor: 'primaryBlack',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '65px',
        px: 8,
        py: '3',
        _hover: {
          textDecoration: 'none',
          fontWeight: 'bold',
        },
      },
    },
  },
}

const appTheme = extendTheme({
  styles,
  fonts,
  colors,
  components,
})

export default appTheme
