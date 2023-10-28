import React from "react"
import styled from "styled-components"
import aboutImg from "../../images/about.jpg"
import theme from "../../gatsby-plugin-theme-ui"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Heading, Text, sx, Container, Grid, Box } from "theme-ui"

const StyledSection = styled.section`
  .step-img-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
  }

  img {
    max-width: 250px;
    border-radius: 10px;
  }

  .grid--2-cols-other {
    grid-template-columns: repeat(1, 1fr 1.2fr);
  }

  .projects {
    width: 360px;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .item {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;
    border-radius: 20px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 24px;
    row-gap: 32px;
    align-items: center;
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/

  @media (max-width: 34em) {
    .grid--2-cols-other {
      grid-template-columns: 1fr;
    }
    .project-box:nth-child(2) {
      grid-row: 1;
    }
  }
`

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
      <div className="container grid grid--2-cols-other">
        <div className="projects project-box">
          <ul>
            <li>{frontmatter.list}</li>
            <li>{frontmatter.list}</li>
            <li>{frontmatter.list}</li>
          </ul>
        </div>
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

export default Update
