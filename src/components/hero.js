import React from "react"
import styled from "styled-components"
import { Heading, Text, Link } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"

const StyledSection = styled.section`
  padding: 5rem 2rem 8rem 2rem;

  .title {
    margin-bottom: 0.8rem;
    padding-top: 3.5rem;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #55c57a;
  }

  .description {
    padding: 8rem 0 1rem 0;
    font-family: system-ui, sans-serif;
    font-weight: 700;
    line-height: 1;
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
    .description {
      padding: 5rem 0 1rem 0;
    }
  }
`

const Hero = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content
  return (
    <StyledSection>
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
      <Heading
        sx={{
          ...theme.styles.h4,
        }}
      >
        {rawMarkdownBody}
      </Heading>
      <Text>
        Currently, I work full-time as a web developer at{" "}
        <Link
          href="https://www.roberthalf.com/us/en"
          sx={{
            variant: "links.bold",
          }}
        >
          {" "}
          Robert Half.{" "}
        </Link>{" "}
        On the side, I also work as a photographer at{" "}
        <Link
          href="https://www.georgestreetphoto.com/"
          sx={{
            variant: "links.bold",
          }}
        >
          George Street{" "}
        </Link>{" "}
        , a company specializing in capturing wedding events. During my free
        time, I immerse myself in the ever-evolving world of front-end
        technology. I stay active by building my own projects, taking courses to
        improve my web development skills, and some hack the box every so often.
        I always keep things exciting by mixing it up!
      </Text>

      {/* <div className="description">random things</div>
      <ul>
        <li>My very first job was working as a photographer </li>
        <li>My dog's name is burrito</li>
        <li>Mr. Robot is my fav</li>
        <li>Currenly reading </li>
      </ul> */}
    </StyledSection>
  )
}

export default Hero
