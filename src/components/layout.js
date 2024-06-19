import React from 'react'
import { ThemeUIProvider } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyle'
import Header from './header'
import Footer from './footer'

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;

  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeUIProvider theme={theme}>
      <StyledLayout>
        <GlobalStyle />
        <Header />

        <main id="main-content">{children}</main>

        <Footer />
      </StyledLayout>
    </ThemeUIProvider>
  )
}

export default Layout

