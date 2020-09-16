import App from 'next/app'
import React from 'react'
import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import theme from '../theme'

import { Layout } from '@components'

export default class MyApp extends App {
  render() {
    const { Component, pageProps, ...rest } = this.props
    return (
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Layout>
          <Component {...pageProps} {...rest} />
        </Layout>
      </ChakraProvider>
    )
  }
}
