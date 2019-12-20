import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Footer } from '~components/Footer'
import Head from '~components/Head'
import { NavBar } from '~components/NavBar'
import Colors from '~lib/colors'
import { navigationPages } from '~lib/constants'
import { down } from 'styled-breakpoints'

const theme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}

export const Layout = ({ children, title = '', description = '', keywords = '' }) => (
  <ThemeProvider theme={theme}>
    <Head title={`${title} Ana State`} description={description} keywords={keywords} />
    <Frame>
      <NavBar items={navigationPages} />
      <Container>{children}</Container>
      <Footer />
    </Frame>
  </ThemeProvider>
)

const Frame = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  background-color: ${Colors.background};
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  flex-grow: 1;

  ${down('sm')} {
    margin-top: 0;
  }
`
