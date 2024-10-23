// import React, { useState, useEffect, useRef, useContext } from 'react'
// import PropTypes from 'prop-types'
// // import Img from 'gatsby-image'
// // import VisibilitySensor from 'react-visibility-sensor'
// import { motion } from 'framer-motion'

// import { Box, Grid, Heading, Text, Button, Link } from 'theme-ui'
// // import { useOnScreen } from '../../hooks'
// // import Context from '../../context'
// // import Icon from '../../components/icons'
// import { theme } from '../gatsby-plugin-theme-ui'

// const Projects = ({ content }) => {
//   const { darkMode } = useContext(Context).state
//   const sectionDetails = content[0].node
//   const projects = content.slice(1)

//   const [visibleProject, setVisibleProject] = useState(1)
//   const [onScreen, setOnScreen] = useState({})

//   const handleOnScreen = (el) => {
//     if (!onScreen[el]) {
//       setOnScreen((prevState) => ({
//         ...prevState,
//         [el]: true,
//       }))
//     }
//   }

//   const pVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   }

//   useEffect(() => {
//     setVisibleProject(1)
//     const initial = {}
//     projects.forEach((project) => {
//       initial[project.node.frontmatter.position] = false
//     })
//     setOnScreen(initial)
//   }, [projects])

//   const tRef = useRef()
//   const tOnScreen = useOnScreen(tRef)
//   const tVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   }

//   const bRef = useRef()
//   const bOnScreen = useOnScreen(bRef)
//   const bVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   }

//   return (
//     <Box
//       as="section"
//       id="projects"
//       sx={{
//         width: '100%',
//         height: 'auto',
//         background: 'background',
//         marginTop: '6rem',
//         padding: ['4rem 2rem'],
//       }}
//     >
//       <Box
//         sx={{
//           width: '100%',
//           height: '100%',
//           position: 'relative',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           paddingX: [0, '2.5rem'],
//           '@media (min-width: 34em)': {
//             '.projects': {
//               flexDirection: 'column',
//               overflow: 'visible',
//             },
//           },
//         }}
//       >
//         <motion.div ref={tRef} variants={tVariants} animate={tOnScreen ? 'visible' : 'hidden'}>
//           <Heading as="h3" className="section-title" sx={{ ...theme.styles.h3, paddingX: ['2.5rem', 0] }}>
//             {sectionDetails.frontmatter.title}
//           </Heading>
//           <Box sx={{ position: 'absolute', top: '2.2rem', right: '2.5rem', fontSize: '1.125rem', fontWeight: 500 }}>
//             {visibleProject} / {projects.length}
//           </Box>
//         </motion.div>

//         <Grid
//           className="projects"
//           columns={[1, 2]}
//           gap={3}
//           sx={{
//             display: 'flex',
//             flexDirection: ['row', 'column'],
//             marginTop: [-2.5, 0],
//             padding: '2.5rem',
//             overflowX: ['scroll', 'visible'],
//             overflowY: 'hidden',
//             WebkitOverflowScrolling: 'touch',
//             '&::-webkit-scrollbar': {
//               display: ['none', 'block'],
//               height: '0.8rem',
//             },
//             '&::-webkit-scrollbar-thumb': {
//               borderRadius: '8px',
//               border: '0.2rem solid',
//               backgroundColor: 'scrollBar',
//             },
//             '&::-webkit-scrollbar-track': {
//               backgroundColor: 'background',
//               borderRadius: '8px',
//             },
//           }}
//         >
//           {projects.map((project, key) => {
//             const { frontmatter } = project.node
//             return (
//               <VisibilitySensor key={key} onChange={() => handleOnScreen(key + 1)} partialVisibility minTopValue={100}>
//                 <motion.div
//                   sx={{
//                     display: 'flex',
//                     flexDirection: ['column-reverse', 'row'],
//                     justifyContent: ['flex-end', 'space-between'],
//                     alignItems: 'center',
//                     paddingRight: [0, '5rem'],
//                     maxWidth: ['20rem', '62.5rem'],
//                     marginBottom: ['2rem', '10rem'],
//                     flexDirection: { md: (key + 1) % 2 !== 0 ? 'row' : 'row-reverse' },
//                   }}
//                   variants={pVariants}
//                   animate={onScreen[frontmatter.position] ? 'visible' : 'hidden'}
//                 >
//                   <Box
//                     className="details"
//                     sx={{
//                       width: '100%',
//                       maxWidth: '25rem',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       marginTop: ['3rem', 0],
//                     }}
//                   >
//                     <Text
//                       className="category"
//                       sx={{
//                         fontSize: '0.875rem',
//                         lineHeight: '1rem',
//                         textTransform: 'uppercase',
//                         letterSpacing: '+1px',
//                       }}
//                     >
//                       {frontmatter.emoji} {frontmatter.category}
//                     </Text>
//                     <Heading
//                       as="h4"
//                       className="title"
//                       sx={{
//                         mt: '0.625rem',
//                         mb: '0.625rem',
//                         fontSize: '1.375rem',
//                         lineHeight: '1.625rem',
//                         fontWeight: 700,
//                       }}
//                     >
//                       {frontmatter.title}
//                     </Heading>
//                     <Box
//                       className="tags"
//                       sx={{ display: 'flex', flexWrap: 'wrap', mt: '1.5rem', lineHeight: '1.2rem' }}
//                     >
//                       {frontmatter.tags.map((tag) => (
//                         <Text as="span" key={tag} sx={{ mr: '1rem', mb: '1rem' }}>
//                           {tag}
//                         </Text>
//                       ))}
//                     </Box>
//                     <Box
//                       className="links"
//                       sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mt: '1rem' }}
//                     >
//                       {frontmatter.github && (
//                         <Link
//                           href={frontmatter.github}
//                           target="_blank"
//                           rel="nofollow noopener noreferrer"
//                           aria-label="GitHub Link"
//                           sx={{ mr: '2rem' }}
//                         >
//                           <Icon name="github" color={darkMode ? darkTheme.colors.subtext : lightTheme.colors.subtext} />
//                         </Link>
//                       )}
//                       {frontmatter.external && (
//                         <Link
//                           href={frontmatter.external}
//                           target="_blank"
//                           rel="nofollow noopener noreferrer"
//                           aria-label="External Link"
//                           sx={{ mr: '2rem' }}
//                         >
//                           <Icon
//                             name="external"
//                             color={darkMode ? darkTheme.colors.subtext : lightTheme.colors.subtext}
//                           />
//                         </Link>
//                       )}
//                     </Box>
//                   </Box>
//                   <VisibilitySensor onChange={() => setVisibleProject(frontmatter.position)}>
//                     <Img
//                       className="screenshot"
//                       fluid={frontmatter.screenshot.childImageSharp.fluid}
//                       sx={{
//                         width: '100%',
//                         maxWidth: '25rem',
//                         height: ['15rem', '18.75rem'],
//                         borderRadius: '8px',
//                         boxShadow: '0 0 2.5rem rgba(0, 0, 0, 0.16)',
//                         transition: 'all 0.3s ease-out',
//                         '&:hover': {
//                           transform: 'translate3d(0px, -0.125rem, 0px)',
//                           boxShadow: '0 0 2.5rem rgba(0, 0, 0, 0.32)',
//                         },
//                       }}
//                     />
//                   </VisibilitySensor>
//                 </motion.div>
//               </VisibilitySensor>
//             )
//           })}
//         </Grid>
//       </Box>

//       {sectionDetails.frontmatter.buttonVisible && (
//         <motion.a
//           ref={bRef}
//           variants={bVariants}
//           animate={bOnScreen ? 'visible' : 'hidden'}
//           className="cta-btn"
//           href={sectionDetails.frontmatter.buttonUrl}
//           target="_blank"
//           rel="nofollow noopener noreferrer"
//           aria-label="External Link"
//           sx={{
//             display: 'block',
//             textAlign: 'center',
//             margin: ['2rem auto', '0 auto'],
//           }}
//         >
//           <Button type="button" textAlign="center">
//             {sectionDetails.frontmatter.buttonText}
//           </Button>
//         </motion.a>
//       )}
//     </Box>
//   )
// }

// Projects.propTypes = {
//   content: PropTypes.arrayOf(
//     PropTypes.shape({
//       node: PropTypes.shape({
//         frontmatter: PropTypes.object.isRequired,
//       }).isRequired,
//     }).isRequired
//   ).isRequired,
// }

// export default Projects

import React, { useState } from 'react'
import styled from 'styled-components'

export const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: #ddf3e4;
  margin-top: 6rem;
`

export const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;

  @media (min-width: 768px) {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  }

  .section-title {
    padding-right: 2.5rem;
    padding-left: 2.5rem;

    @media (min-width: 768px) {
      padding-right: 0;
      padding-left: 0;
    }
  }
`

export const StyledInterests = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
  gap: 1rem;
  padding: 0 2.5rem 1.25rem 2.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: '';
    width: 2.5rem;
  }

  @media (min-width: 768px) {
    overflow: visible;
    padding: 0;
  }

  @media (hover: hover) {
    &::-webkit-scrollbar {
      display: block;
      -webkit-appearance: none;
      height: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 0.2rem solid #ddf3e4;
      background-color: #aaa;
    }

    &::-webkit-scrollbar-track {
      background-color: #ddf3e4;
      border-radius: 8px;
    }
  }

  .interest {
    width: 100%;
    max-width: 15.625rem;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    border: 0.125rem solid #2a3439;
    border-radius: 0.5rem;
    background: #fff;

    .icon {
      margin-right: 0.5rem;
    }
  }
`

export const LoadMoreButton = styled.button`
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  background-color: #6c3082;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`

const Interests = ({ interests }) => {
  const [shownInterests, setShownInterests] = useState(6)

  const showMoreItems = () => {
    setShownInterests(shownInterests + 4)
  }

  return (
    <StyledSection>
      <StyledContentWrapper>
        <h3 className="section-title">Interests</h3>
        <StyledInterests>
          {interests.slice(0, shownInterests).map((interest, index) => (
            <div className="interest" key={index}>
              <img className="icon" src={interest.icon} alt={`${interest.name} Icon`} />
              {interest.name}
            </div>
          ))}
        </StyledInterests>
        {shownInterests < interests.length && <LoadMoreButton onClick={showMoreItems}>+ Load more</LoadMoreButton>}
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Interests

