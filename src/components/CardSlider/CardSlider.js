import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { motion } from 'framer-motion'
import slugify from 'slugify'
import Card from './Card'
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
        <h3 className="section-title">
          <span className="highlighted">NOTES</span>
        </h3>
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

