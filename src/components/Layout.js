import PropTypes from 'prop-types'
import Head from 'next/head'
import { Grid, Flex } from '@chakra-ui/core'

import { Footer, Header } from '@components'

export function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid
        as="article"
        minHeight="100%"
        gridTemplateRows="auto 1fr auto"
        gridTemplateColumns="100%"
      >
        <Header />
        <Flex as="main" p="4" direction="column" justifyContent="flex-start" height="100%">
          {children}
        </Flex>
        <Footer />
      </Grid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
