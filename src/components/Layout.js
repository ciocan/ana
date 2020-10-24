import PropTypes from 'prop-types'
import Head from 'next/head'
import { Grid, Flex } from '@chakra-ui/core'

import { Footer, Header } from '@components'
import { useBackground } from '@hooks'

export function Layout({ children }) {
  const bg = useBackground()
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid
        as="article"
        gridTemplateRows="auto 1fr auto"
        gridTemplateColumns="100%"
        minHeight="100vh"
        bg={bg}
      >
        <Header />
        <Flex as="main" direction="column" justifyContent="flex-start">
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
