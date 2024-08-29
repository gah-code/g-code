import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ThemeUIProvider } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui' // Ensure this path is correct
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyle' // Ensure this path is correct

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
        {/* <Navbar /> */}
        <main id="main-content">{children}</main>

        <Footer />
      </StyledLayout>
    </ThemeUIProvider>
  )
}

export default Layout

