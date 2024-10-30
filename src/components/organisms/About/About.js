import React from 'react'
import aboutImg from '../../../images/about.jpg'
// import aboutImg from '../../../images/about.jpg'
import { Heading, Text, Button, Box, Grid } from 'theme-ui'
import { Link } from 'gatsby'

import theme from '../../../gatsby-plugin-theme-ui'
import ResponsiveSection from '../../../styles/ResponsiveSection'
import Photo from './Photo'

const About = ({ alt, maxWidth }) => {
  return (
    <Box
      as="section"
      sx={{
        maxWidth: '80rem',
        padding: '4rem 2rem',
        mx: 'auto',
        '@media screen and (max-width: 84em)': {
          columnGap: '6rem',
          rowGap: '8rem',
        },
        '@media screen and (max-width: 75em)': {
          columnGap: '2rem',
          rowGap: '6.9rem',
        },
        '@media screen and (max-width: 59em)': {
          columnGap: '1rem',
          rowGap: '6rem',
        },
        '@media screen and (max-width: 34em)': {
          padding: '3rem 0.8rem 2rem 0.8rem',
          rowGap: '5rem',
        },
      }}
    >
      <ResponsiveSection>
        <Grid columns={[1, 1, 2, 2]} gap={[1, 1, '1rem']}>
          <div>
            <Heading sx={{ ...theme.styles.h2 }}>About</Heading>
            <Text sx={theme.text.paragraph}>
              Just soaking up the sun in San Jose, California! I’m sharing life with my amazing girlfriend and our cute
              pup, 🌯. During the week, I’m all in as a full-time web developer at Robert Half, every day is a crazy mix
              of work, learning, cooking, and getting my step count in. On the weekends, we relax with friends, go plant
              shopping, and sometimes I have photography bookings or editing to catch up on. We enjoy delicious food and
              great views around the Bay area.
            </Text>
            <br />
            <Button variant="primary" sx={{ mt: 4, mb: 4 }}>
              <Link to="/about">Read more</Link>
            </Button>
          </div>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: '0.5s',
            }}
          >
            <Photo src={aboutImg} alt={alt} maxWidth={maxWidth || '100%'} />
          </Box>
        </Grid>
      </ResponsiveSection>
    </Box>
  )
}

export default About

