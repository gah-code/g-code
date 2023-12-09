import React from "react"
import styled from "styled-components"
import { Heading, sx, Text, Link } from "theme-ui"
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
    /* font-size: 24px; */
    font-weight: 700;
    /* color: #777; */
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

  /* .data {
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
  } */
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
        , a renowned company specializing in capturing wedding moments. During
        my free time, I immerse myself in the ever-evolving world of front-end
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
