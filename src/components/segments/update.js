import React from "react"
import styled from "styled-components"
import aboutImg from "../../images/about.jpg"
import theme from "../../gatsby-plugin-theme-ui"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Heading, Text, sx, Container, Grid, Box } from "theme-ui"

const StyledSection = styled.section`
  /* background: #eff; */
  /* ul {
    background-color: red;
  } */

  /* li {
    color: #263147;
    background-color: orange;
    max-width: 30rem;
  } */
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

  /* Medium screens */
  @media (min-width: 481px) and (max-width: 768px) {
    .grid--2-cols-other {
      grid-template-columns: 1fr;
    }
  }

  /* .projects {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
  }

  .project {
    background-color: blue;
  } */

  .projects {
    width: 400px;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .item {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    /* padding: 10px 12px; */
    /* padding-right: 48px; */
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
        <div className="projects">
          <ul>
            <li>{frontmatter.list}</li>
            <li>{frontmatter.list}</li>
            <li>{frontmatter.list}</li>
          </ul>
        </div>

        <div>
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
