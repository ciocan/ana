import { extendTheme } from '@chakra-ui/core'

const fonts = {
  body: 'tex_gyre_adventor_regular',
}

const colors = {
  // homeBg: '#FDFBF6',
  homeBg: '#fff',
  red: '#CE3C50',
  primaryBlack: '#102443',
  grey: '#3F3F3F',
  lightGrey: '#979797',
  lightBg: '#FAFAFA',
}

const components = {
  Heading: {
    baseStyle: {
      color: 'primaryBlack',
      fontFamily: 'tex_gyre_adventor_bold',
    },
    variants: {
      project: {
        fontSize: '2.125rem',
        lineHeight: '2.25rem',
      },
      content: {
        fontSize: '2.125rem',
        lineHeight: '2.25rem',
        color: '#343541',
      },
      small: {
        fontSize: '1.125rem',
        lineHeight: '2rem',
        pb: '1rem',
      },
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
      caption: {
        alignSelf: 'center',
        color: 'lightGrey',
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
        borderRadius: '60px',
        px: 6,
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
  fonts,
  colors,
  components,
})

export default appTheme
