import React from 'react'
import styled from 'styled-components'
import { Link } from 'theme-ui'
import { FaLinkedin, FaCodepen, FaGithub } from 'react-icons/fa'

const StyledFooter = styled.footer`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  display: grid;
  padding: 9rem 0 6rem 0;
  grid-template-columns: 1fr;
  margin: 0 auto;
  text-align: center;
  justify-items: center;
  justify-content: center;
`

const Footer = () => (
  <StyledFooter>
    <footer
      sx={{
        fontSize: 1,
        variant: 'styles.footer',
      }}
    >
      <div
        sx={{
          display: 'grid',
          gridTemplateRows: 'repeat(4, 32px)',
          gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
          gridAutoFlow: 'column',
          px: 2,
          py: 4,
        }}
      >
        <Link href="https://www.linkedin.com/in/gilbert-haro-2b108222b/" sx={{ variant: 'styles.navlink', p: 2 }}>
          <FaLinkedin />
        </Link>
        <Link href="https://codepen.io/Gilbert-Haro" sx={{ variant: 'styles.navlink', p: 2 }}>
          <FaCodepen />
        </Link>
        <Link href="https://github.com/gah-code" sx={{ variant: 'styles.navlink', p: 2 }}>
          <FaGithub />
        </Link>
      </div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 4,
        }}
      >
        {/* <Link to="/privacy-policy" sx={{ color: "inherit" }}>
          Privacy Policy
        </Link>
        <div sx={{ mx: 1 }} />
        <Link to="/terms-of-use" sx={{ color: "inherit" }}>
          Terms of Use
        </Link> */}
        <div sx={{ mx: 1 }} />© 2024 Website by Gilberto A. Haro
      </div>
    </footer>
  </StyledFooter>
)

export default Footer

