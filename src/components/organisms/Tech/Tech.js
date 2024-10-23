import React from 'react'
import styled from 'styled-components'
// import { Heading, Text, Button } from 'theme-ui'
import GridWrapper from '../../../styles/gridWrapper'
import StyledSection from './Tech.styles'
import SkillIconList from '../../SkillIconList'
import theme from '../../../gatsby-plugin-theme-ui'
import { Text, Button, Box, Grid, Heading } from 'theme-ui'
import { Link } from 'gatsby'
import ResponsiveSection from '../../../styles/ResponsiveSection'

const Tech = ({ maxWidth }) => {
  const skills = [
    /* skills data here */
    {
      skill: 'HTML',
      level: 'advanced',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'CSS',
      level: 'advanced',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'SCSS',
      level: 'advanced',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'Styled Components',
      level: 'intermediate',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'Responsive Design',
      level: 'advanced',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'JavaScript',
      level: 'intermediate',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'React',
      level: 'advanced',
      color: 'rgb(236 201 137)',
    },

    {
      skill: 'AEM',
      level: 'beginner',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'Astro',
      level: 'intermediate',
      color: 'rgb(236 201 137)',
    },

    {
      skill: 'SEO',
      level: 'intermediate',
      color: 'rgb(236 201 137)',
    },

    {
      skill: 'Theme UI',
      level: 'intermediate',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'GraphQL',
      level: 'intermediate',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'a11y',
      level: 'beginner',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'Progressive enhancement',
      level: 'beginner',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'Design Graph',
      level: 'intermediate',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'MDX',
      level: 'beginner',
      color: 'rgb(236 201 137)',
    },

    {
      skill: 'Mongo DB',
      level: 'beginner',
      color: 'rgb(236 201 137)',
    },

    {
      skill: 'Supabase',
      level: 'beginner',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'Java Content Repository',
      level: 'intermediate',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'ACS Commons tools',
      level: 'intermediate',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'Photoshop',
      level: 'intermediate',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'Storybook',
      level: 'beginner',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'SSG',
      level: 'beginner',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'Redux',
      level: 'beginner',
      color: 'rgb(236 201 137)',
    },

    {
      skill: 'Next Js',
      level: 'beginner',
      color: 'rgb(236 201 137)',
    },
    {
      skill: 'Tailwind CSS',
      level: 'beginner',
      color: 'rgb(236 201 137)',
    },
  ]

  return (
    <Box
      as="section"
      sx={{
        maxWidth: '80rem',
        padding: '4rem 2rem',
        mx: 'auto',
        '@media screen and (max-width: 84em)': {
          columnGap: '6rem',
          rowGap: '8rem',
        },
        '@media screen and (max-width: 75em)': {
          columnGap: '4rem',
          rowGap: '6.9rem',
        },
        '@media screen and (max-width: 59em)': {
          columnGap: '4rem',
          rowGap: '6rem',
        },
        '@media screen and (max-width: 34em)': {
          rowGap: '5rem',
        },
      }}
    >
      <ResponsiveSection
        sx={{
          '@media screen and (max-width: 59em)': {
            '.grid--2-cols-other': {
              gridTemplateColumns: '1fr', // Switch to one column layout on smaller screens
            },
            '.data:nth-of-type(1)': {
              gridRow: '2', // Make the data section appear below the heading
            },
            '.skill-list': {
              marginTop: '1.5rem', // Increase margin for the skill list on small screens
            },
          },
        }}
      >
        <Grid className="grid--2-cols-other" columns={[1, 1, 2]} gap={[1, 1, '2rem']}>
          <Box className="data">
            <SkillIconList className="skill-list" />
          </Box>

          <Box>
            <Heading sx={{ ...theme.styles.h3 }}>Syntax and Systems</Heading>
            <Text sx={{ ...theme.text.paragraph }}>
              With many potential solutions available for creating modern web applications, the developer experience has
              never been more important.
            </Text>

            <Text sx={{ mt: 3, mb: 3, display: 'block', ...theme.text.heading }}>
              Some modern front-end development practices I've been digging into:
            </Text>
            <Box as="ul">
              <Text as="li">Component-Based Architecture</Text>
              <Text as="li">Atomic Design Principles</Text>
              <Text as="li">Styled Components and Theming</Text>
            </Box>

            <Button variant="secondary" sx={{ mt: 4, mb: 4 }}>
              <Link to="/topics/">Read more</Link>
            </Button>
          </Box>
        </Grid>
      </ResponsiveSection>
    </Box>
    // <StyledSection maxWidth="80rem">
    //   <GridWrapper className="grid--2-cols" columnGap="1rem" rowGap="1rem" columnGapSm="0.5rem" rowGapSm="0.5rem">
    //     <div className="data">
    //       <SkillIconList />
    //     </div>

    //     <div>
    //       <Heading
    //         sx={{
    //           ...theme.styles.h3,
    //         }}
    //       >
    //         Syntax and Systems
    //       </Heading>
    //       <Text sx={{ ...theme.text.paragraph }}>
    //         With many potential solutions available for creating modern web applications, the developer experience has
    //         never been more important.
    //       </Text>

    //       <Text
    //         sx={{
    //           mt: 3,
    //           display: 'block',
    //           ...theme.text.heading,
    //         }}
    //       >
    //         Some modern front-end development practices I've been digging into:
    //       </Text>
    //       <ul>
    //         <li>Component-Based Architecture</li>
    //         <li>Atomic Design Principles</li>
    //         <li>Styled Components and Theming</li>
    //       </ul>

    //       <Button variant="secondary" sx={{ mt: 3 }}>
    //         <Link to="/topics/">Read more</Link>
    //       </Button>
    //     </div>
    //   </GridWrapper>
    // </StyledSection>
  )
}

export default Tech

