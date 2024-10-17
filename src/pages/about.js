import * as React from 'react'
import { Link } from 'gatsby'
import { Grid, Heading, sx, Text, Paragraph } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'

import { Box } from 'theme-ui'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <Grid
      columns={['1fr', '1fr 2fr 1fr']} // One column on small screens, three columns on larger screens
      gap={[3, 4]} // Adjust spacing for better readability on small screens
      sx={{
        padding: [3, 2], // Larger padding on small screens
        // backgroundColor: "lightgray",
      }}
    >
      <Box
        sx={{
          gridColumn: ['1 / -1', '1 / span 3'],

          padding: 1,
        }}
      >
        <Heading
          as="h2"
          sx={{
            fontSize: [5, 5],
            color: 'primary',
            fontFamily: 'heading',
            mb: 3, // margin-bottom
            mt: 4,
          }}
        >
          {/* Sparks  */}
          What I've been digging into
        </Heading>
        <Text sx={theme.text.paragraph}></Text>
      </Box>
    </Grid>
    <Text sx={{ padding: 3, ...theme.text.paragraph }}>
      <Link to="/">Go back </Link>
    </Text>
  </Layout>
)

export const Head = () => <SEO title="About Page" />

export default About

