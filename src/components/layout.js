import React from 'react'
import Header from './organisms/Header/Header'
import Footer from './organisms/Footer/Footer'
import { StrictMode } from 'react'

import { ThemeUIProvider } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui' // Ensure this path is correct
// import Projects from './Projects'
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyle' // Ensure this path is correct
import ColorModeToggle from './ColorModeToggle'

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
    <StrictMode>
      <ThemeUIProvider theme={theme}>
        <StyledLayout>
          <GlobalStyle />
          <Header />
          {/* <ColorModeToggle /> */}

          {/* <Projects /> */}
          {/* <ToggleColorMode /> */}

          {/* <Navbar /> */}
          <main id="main-content">{children}</main>

          <Footer />
        </StyledLayout>
      </ThemeUIProvider>
    </StrictMode>
  )
}

export default Layout

