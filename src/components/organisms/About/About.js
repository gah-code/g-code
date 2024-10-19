import React from 'react'
import styled from 'styled-components'
import aboutImg from '../../../images/about.jpg'
import { Heading, Text, Button } from 'theme-ui'
import { Link } from 'gatsby'

import theme from '../../../gatsby-plugin-theme-ui'
import GridWrapper from '../../../styles/gridWrapper'
import StyledSection from './About.styles'
import Photo from './Photo'

const About = ({ alt, maxWidth }) => {
  return (
    <StyledSection maxWidth="80rem" padding="4rem 2rem" columnGap84="6rem" rowGap84="8rem">
      <GridWrapper className="grid--2-cols">
        <div>
          <Heading sx={{ ...theme.styles.h2 }}>About</Heading>
          <Text sx={theme.text.paragraph}>
            In sunny San Jose, California, my girlfriend, our lovable pup 🌯, and I lead a pretty busy life during the
            week. The days between work, study, and squeezing in our workouts seem to fly by. But when the weekend rolls
            around, we're all about hanging out with our friends and treating ourselves to fantastic food and wine. It's
            all about striking that perfect balance between hustle and relaxation!
          </Text>
          <br />
          <Button variant="primary" sx={{ mt: 4 }}>
            <Link to="/about/">Read more</Link>
          </Button>
        </div>

        <PhotoWrapper>
          <Photo src={aboutImg} alt={alt} maxWidth={maxWidth || '100%'} />
        </PhotoWrapper>
      </GridWrapper>
    </StyledSection>
  )
}

const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
`

export default About

