import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"

import styled from "styled-components"
import GlobalStyle from "../styles/globalStyle"
import Header from "./header"
import Footer from "./footer"

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: hsl(292deg 21% 87% / 0.5);
  background: linear-gradient(
    0deg,
    hsl(292deg 21% 87% / 0.5),
    rgba(242, 243, 244, 1) 100%
  );

  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    /* padding: 0 2rem; */
  }

  /* #main-content #hero {
    max-width: 120rem;
    background: hsl(292deg 21% 87% / 0.5);
    background: linear-gradient(
      0deg,
      hsl(292deg 21% 87% / 0.5),
      rgba(242, 243, 244, 1) 100%
    );
  } */
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <GlobalStyle />
        <Header />

        <main id="main-content">{children}</main>

        <Footer />
      </StyledLayout>
    </ThemeProvider>
  )
}

export default Layout
