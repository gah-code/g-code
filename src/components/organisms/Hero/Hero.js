import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import { graphql, useStaticQuery } from 'gatsby'

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
    box-shadow: inset 0 -2.5rem 0 #61ad7c;
  }

  .description {
    padding: 8rem 0 1rem 0;
    font-family: system-ui, sans-serif;
    font-weight: 700;
    line-height: 1;
  }

  @media (max-width: 59em) {
    .description {
      padding: 5rem 0 3rem 0;
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          author
          siteDescription
          siteTitle
          siteTitleTwo
          hero {
            heroHeading
            heroDescription
            heroSubdescription
          }
          socialLinks {
            platform
            url
          }
        }
      }
    }
  `)

  console.log(data)

  const configHero = data?.allDataJson?.nodes[0]

  if (!configHero) {
    return <div>No data found</div>
  }
  return (
    <StyledSection>
      <Heading
        sx={{
          ...theme.styles.h1,
        }}
      >
        {configHero.siteTitle}
        <span role="img" aria-label="emoji"></span>
        <br />
        {configHero.siteTitleTwo}
      </Heading>
      <Heading
        sx={{
          ...theme.styles.h3,
        }}
      >
        Surfing the world wide web
        <br />
        <span className="highlighted">for all front end dev insight</span>
      </Heading>{' '}
      <Heading
        sx={{
          ...theme.styles.h4,
        }}
      >
        Thanks for stopping by!
      </Heading>
      <Text sx={theme.text.paragraph}>{configHero.hero.heroDescription}</Text>{' '}
      <Text
        sx={{
          mt: 4,
          display: 'block',
          ...theme.text.heading,
        }}
      >
        {configHero.hero.heroSubdescription}
      </Text>
    </StyledSection>
  )
}

export default Hero

