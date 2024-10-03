import React from 'react'
import styled from 'styled-components'
import aboutImg from '../../images/about.jpg'
import { Heading, Text } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import GridWrapper from '../../styles/gridWrapper'
import StyledSection from '../../styles/StyledSection' // Import the reusable StyledSection

const About = ({ alt, maxWidth }) => {
  return (
    // Use the StyledSection component and pass in props for reusability
    <StyledSection maxWidth="80rem" padding="4rem 2rem" columnGap84="6rem" rowGap84="8rem">
      <GridWrapper className="grid--2-cols">
        <div>
          <Heading
            sx={{
              ...theme.styles.h2,
            }}
          >
            About
          </Heading>
          <Text sx={theme.text.paragraph}>
            San Jose, CA with my girlfriend and our adorable pup named 🌯. Our weekdays are filled with work, study, and
            workouts, but on the weekends, we love hanging out with friends and indulging in some delicious food and
            wine.
          </Text>
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

const Photo = styled.img`
  max-width: ${(p) => p.maxWidth};
  border-radius: 10px;
`

export default About
