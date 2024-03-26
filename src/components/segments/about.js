import React from "react"
import styled from "styled-components"
import aboutImg from "../../images/about.jpg"
import { Heading, Text } from "theme-ui"
import theme from "../../gatsby-plugin-theme-ui"
import { graphql } from "gatsby"

const About = ({ content, alt, maxWidth }) => {
  const { frontmatter, rawMarkdownBody } = content
  return (
    <StyledSection>
      <div className="container grid-2">
        <div>
          <Heading
            sx={{
              ...theme.styles.h2,
            }}
          >
            {frontmatter.title}
          </Heading>
          <Text sx={theme.text.default}>{frontmatter.life}</Text>
          {/* <span className="highlighted">{frontmatter.subtitleHighlight}</span> */}
        </div>
        <PhotoWrapper>
          <Photo src={aboutImg} alt={alt} maxWidth={maxWidth} />
        </PhotoWrapper>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 4rem 0;

  .subtitle {
    margin-top: 2rem;
  }
  .highlighted {
    color: hsl(260, 20%, 40%);
    font-size: 1.2rem;
    display: grid;
    padding: 1rem 0 2rem 0;
    /* margin-top: 2rem; */
    /* box-shadow: inset 0 -2.5rem 0 hsl(260, 100%, 80%); */
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
`

const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
`

const Photo = styled.img`
  max-width: ${p => p.maxWidth};
  border-radius: 10px;
`

export default About
