import React from "react"
import styled from "styled-components"
import aboutImg from "../../images/about.jpg"
import theme from "../../gatsby-plugin-theme-ui"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Heading, Text, sx, Grid, Box } from "theme-ui"

const posts = [
  // An array of post objects with properties like id, slug, title, date, and excerpt
  // Example: { id: 1, slug: '/post-1', title: 'Post 1', date: '2023-08-28', excerpt: '...' }
  // ...

  {
    id: 1,
    slug: "/post-1",
    title: "Post 1",
    date: "2023-08-28",
    excerpt: "...",
  },
]

const Update = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content

  return (
    <StyledSection>
      <div className="container grid-2">
        <div className="project-box">
          <Heading
            sx={{
              ...theme.styles.h3,
            }}
          >
            {frontmatter.title}
          </Heading>
          <Text sx={theme.text.default}>{rawMarkdownBody}</Text>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .grid--2-cols-other {
    grid-template-columns: repeat(1, 1fr 1.2fr);
  }

  /* BELOW 544px (Phones) */
  @media (max-width: 34em) {
    .grid-2:nth-child(2) {
      grid-row: 1;
    }
  }
`

export default Update
