import React from 'react'
import { Link } from 'gatsby'
import { Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

// import ToggleColorMode from '../../ToggleColorMode/ToggleColorMode'

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site(siteMetadata: {}) {
        siteMetadata {
          logo
        }
      }
    }
  `)

  return (
    <Box
      as="header"
      sx={{
        width: '100%',
        maxWidth: '62.5rem',
        height: '6.25rem',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link to="/" aria-label="home" sx={{ display: 'flex', alignItems: 'center' }}>
        <Box as="div" sx={{ fontSize: '2rem', fontWeight: '900' }}>
          {data.site.siteMetadata.logo}
        </Box>
      </Link>
      {/* <ToggleColorMode /> */}
    </Box>
  )
}

export default Header
