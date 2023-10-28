import React from "react"
import styled from "styled-components"
import aboutImg from "../images/about.jpg"
import { Heading, Text, sx, Container } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import { graphql } from "gatsby"

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
    grid-template-columns: repeat(1, 2.1fr 2fr);
  }

  /* Medium screens */
  @media (min-width: 481px) and (max-width: 768px) {
    .grid--2-cols-other {
      grid-template-columns: 1fr;
    }
  }

  .projects {
    width: 444px;
    display: flex;
    flex-direction: column;
    gap: 28px;

    justify-content: center;
  }

  .item {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    padding: 10px 18px;
    padding-right: 20px;
    cursor: pointer;
    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;
    border-radius: 20px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 24px;
    row-gap: 32px;
    align-items: center;
    background: #7887;
  }

  .project {
    border-radius: 30px;
    /* padding: 1rem 2rem; */
    background-color: blue;
  }

  ul {
    background-color: red;
  }

  li {
    color: #263147;
    background-color: blue;
    max-width: 30rem;
  }
`

const About = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content
  return (
    <StyledSection>
      <div className="container grid grid--2-cols-other">
        <div>
          <Heading
            sx={{
              ...theme.styles.h3,
            }}
          >
            {frontmatter.title}
          </Heading>
          {/* <h2 className="title fluid-type">{frontmatter.title}</h2> */}
          <Text sx={theme.text.default}>{frontmatter.life}</Text>
        </div>
        <div className="step-img-box">
          <img src={aboutImg} alt="" />
        </div>
      </div>
      {/* <div className="container grid grid--2-cols-other">
        <div className="projects">
          <div className="item">Myphotoloop</div>
          <div className="item">gcode</div>
          <div className="item">learning</div>
        </div>

        <div>
          <Heading
            sx={{
              ...theme.styles.h3,
            }}
          >
            {frontmatter.update}
          </Heading>
          <Text sx={theme.text.default}>{rawMarkdownBody}</Text>
          <ul>
            <li>{frontmatter.list}</li>
          </ul>
        </div>
      </div> */}
    </StyledSection>
  )
}

export default About
