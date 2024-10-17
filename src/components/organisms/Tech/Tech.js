import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Button } from 'theme-ui'
import GridWrapper from '../../../styles/gridWrapper'
import SkillList from './SkillList'
import StyledSection from './Tech.styles'
import theme from '../../../gatsby-plugin-theme-ui'
import { Link } from 'gatsby'

const Tech = () => {
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
    <StyledSection>
      <GridWrapper className="grid--2-cols">
        <div className="data">
          <SkillList skills={skills} />
        </div>
        <div>
          <div>
            <Heading
              sx={{
                ...theme.styles.h3,
              }}
            >
              Syntax and Systems
            </Heading>
            <Text sx={theme.text.paragraph}>
              With many possible solutions for building modern web applications, developer experience could be
              considered like never before.
            </Text>

            <Text
              sx={{
                mt: 3,
                display: 'block',
                ...theme.text.heading,
              }}
            >
              What I've been digging into this year:
            </Text>
            <ul>
              <li>Headless Content Modeling </li>
              <li>Component driven architecture </li>
              <li>Node types </li>
            </ul>

            <Button variant="secondary" sx={{ mt: 2 }}>
              <Link to="/topics/">Read more</Link>
            </Button>
          </div>
        </div>
      </GridWrapper>
    </StyledSection>
  )
}

export default Tech
