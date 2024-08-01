import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Link, sx, Paragraph } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'

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
        {frontmatter.subtitlePrefix} <span className="highlighted">{frontmatter.subtitleHighlight}</span>
      </Heading>
      <Heading
        sx={{
          ...theme.styles.h4,
        }}
      >
        {rawMarkdownBody}
      </Heading>
      <Text
        sx={{
          ...theme.text.paragraph,
        }}
      >
        It's mind-boggling how active the front-end development ecosystem has been. It feels like not so long ago I
        stumbled upon this world while needing a solution to market my photography services at the time.
      </Text>
      <br />
      <Text
        sx={{
          ...theme.text.paragraph,
          mb: 3, // Bottom margin for spacing
          mt: 1,
        }}
      >
        The variety of frameworks that have come, gone, and remained the most used before I even began my front-end
        journey is remarkable.
      </Text>
      <Text
        sx={{
          // textAlign: 'center',

          mt: 4,
          display: 'block',
          ...theme.text.heading,
        }}
      >
        This is where I compile some of my favorite discoveries and concepts.
      </Text>

      {/* <Text sx={theme.text.paragraph}>
        From a young age, I was doodling in my notebook, creating makeshift comic books experimenting with themed fonts,
        and always exploring ways to express my creativity. A passion for digital expression grew during the MySpace era
        and later led me to professional{' '}
        <Link
          href="https://www.georgestreetphoto.com/"
          sx={{
            variant: 'links.bold',
          }}
        >
          {' '}
          photography.{' '}
        </Link>{' '}
        But I yearned for something more later soon after - a platform for showcasing my work. That's when I discovered
        the world of web development. It offered not only a platform for my photography but also opened up countless
        opportunities, landing me gigs that allowed me to combine all my interests and skills. Today, as a{' '}
        <Link
          href="https://www.roberthalf.com/us/en"
          sx={{
            variant: 'links.bold',
          }}
        >
          Web Developer{' '}
        </Link>{' '}
        , I merge my love for design patterns, typography, digital creativity, branding, and photography to create
        unique and impactful digital experiences.
      </Text> */}

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

