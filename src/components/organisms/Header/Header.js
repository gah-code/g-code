// import React from 'react'
// import { Link } from 'gatsby'
// import styled from 'styled-components'
// import { useColorMode, Button } from 'theme-ui'

// import { useStaticQuery, graphql } from 'gatsby'

// const ToggleColorMode = () => {
//   const [colorMode, setColorMode] = useColorMode()
//   return (
//     <Button
//       onClick={() => {
//         setColorMode(colorMode === 'default' ? 'dark' : 'default')
//       }}
//     >
//       Toggle {colorMode === 'default' ? 'Dark' : 'Light'} Mode
//     </Button>
//   )
// }

// const StyledHeader = styled.header`
//   width: 100%;
//   max-width: 62.5rem;
//   height: 6.25rem;
//   margin: 0 auto;
//   padding: 0 2rem;
//   display: fle;
//   justify-content: flex-start;
//   align-items: center;
// `

// const StyledLogo = styled.div`
//   font-size: 2rem;
//   font-weight: 900;
// `
// const Header = () => {
//   const data = useStaticQuery(graphql`
//     query HeaderQuery {
//       site(siteMetadata: {}) {
//         siteMetadata {
//           logo
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <StyledHeader>
//         <Link to="/" aria-label="home">
//           <StyledLogo>{data.site.siteMetadata.logo}</StyledLogo>
//           <ToggleColorMode />
//         </Link>
//       </StyledHeader>
//     </>
//   )
// }

// export default Header

import React from 'react'
import { Link } from 'gatsby'
import { useColorMode, Button, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

const ToggleColorMode = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      onClick={() => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}
      sx={{ mt: [0, 0] }}
    >
      {colorMode === 'default' ? '🌙' : '💡'}
    </Button>
  )
}

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
      <ToggleColorMode />
    </Box>
  )
}

export default Header
