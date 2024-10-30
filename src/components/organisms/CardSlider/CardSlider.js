import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { motion } from 'framer-motion'
import slugify from 'slugify'
import Card from '../../molecules/Card/Card'
import { Heading, Text, Box } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

import { StyledSection, StyledContentWrapper, ArticlesWrapper } from './CardSlider.styles'

const CardSlider = () => {
  // Move the query directly inside the component
  const data = useStaticQuery(graphql`
    query {
      allContentfulNote {
        nodes {
          description {
            description
          }
          featured
          id
          title
          content {
            tags
          }
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
  `)

  const notes = data.allContentfulNote.nodes

  return (
    <StyledSection initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <StyledContentWrapper>
        <Box
          sx={{
            margin: '3rem 1rem 3rem 2rem',
          }}
        >
          <Heading sx={{ ...theme.styles.h3 }}>Deep Dives & Discoveries Notes</Heading>
          <Text sx={theme.text.paragraph}>
            {' '}
            Get the latest on my deep dives, projects, and explorations—follow along as I share insights, discoveries,
            and everything I’m currently fascinated by.
          </Text>
        </Box>

        <ArticlesWrapper>
          {notes.map((note) => {
            const { id, title, content } = note
            const slug = slugify(title, { lower: true })
            const firstTag = content.tags?.[0] || 'No Tag'

            return (
              <Link key={id} to={`/${slug}`} style={{ textDecoration: 'none' }}>
                <Card title={title} firstTag={firstTag} />
              </Link>
            )
          })}
        </ArticlesWrapper>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default CardSlider

