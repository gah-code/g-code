import React from "react"
import styled from "styled-components"
import { Grid, Heading, sx, Text } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"

const StyledSection = styled.section`
  /* background: hsl(292deg 21% 87% / 0.5);
  background: linear-gradient(
    0deg,
    hsl(292deg 21% 87% / 0.5),
    rgba(242, 243, 244, 1) 100%
  ); */
  padding: 0 0 8rem 2rem;

  .title {
    margin-bottom: 0.8rem;
    padding-top: 3.5rem;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    color: #222;
    box-shadow: inset 0 -2.5rem 0 #bd83b8;
  }

  .description {
    padding: 1rem 0 0.5rem 0;
  }

  .data {
    padding: 32px 0;
    padding-top: 10px;
  }

  .skill-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
    max-width: 32rem;
  }

  .skill {
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0.6rem 1.1rem;
    border-radius: 25px;
    text-decoration: none;
    box-shadow: inset 0 0 0 2px #222;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 6px;
    text-transform: uppercase;
    color: #06142e;
    letter-spacing: 0.5px;
  }
  @media (max-width: 34em) {
    .skill-list {
      gap: 6px;
      margin-top: 10px;
    }
    .skill {
      padding: 0.4rem 0.81rem;
      font-size: 0.7rem;
    }
  }
`

const Hero = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content
  return (
    <StyledSection id="hero">
      <Heading
        sx={{
          ...theme.styles.h1,
        }}
      >
        {frontmatter.greetings}
        <span role="img" aria-label="emoji">
          {frontmatter.emoji}
        </span>
        <br />
        {frontmatter.title}
      </Heading>
      <Heading
        sx={{
          ...theme.styles.h3,
        }}
      >
        {frontmatter.subtitlePrefix}{" "}
        <span className="highlighted">{frontmatter.subtitleHighlight}</span>
      </Heading>
      <div className="description">{rawMarkdownBody}</div>
    </StyledSection>
  )
}

export default Hero
