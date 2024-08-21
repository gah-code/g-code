import * as React from 'react'
import Layout from '../components/Layout'

import { Link } from 'gatsby'
import { Grid, Heading, Text, Paragraph } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'

import { Box } from 'theme-ui'

import SEO from '../components/SEO'

const Topics = () => (
  <Layout>
    {/* <Heading
      sx={{
        fontSize: [3, 4, 5],
        mb: 3,
      }}
    >
      Frontend Things
    </Heading> */}

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

          padding: 3,
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
        <Text sx={theme.text.paragraph}>
          {/* When I was young, I had a fascination with PC games like Roller Coaster Tycoon, customizing my MySpace page,
          and graffiti culture. I loved the feeling of being able to create something unique with just a few clicks of a
          button. As I grew older, my interest in design only increased, and I found myself spending more and more time
          in programs like Photoshop, perfecting my skills and experimenting with new techniques. */}
        </Text>

        <ul>
          <li>Constraint-based design principles</li>
          <li>Component-Driven Development (CDD)</li>
          <li>Static site generators (SSG)</li>
          <li>Next JS</li>
          <li>Astro JS</li>
          <li>SEO</li>
        </ul>
        <br />

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
          Side Quest
        </Heading>
        <ul>
          <li>
            <Link
              href="https://github.com/gah-code/g-code"
              sx={{
                variant: 'links.defult',
              }}
            >
              g-code
            </Link>
            <br />
            Build with Gatsby, design system Theme UI.
          </li>
        </ul>
      </Box>

      {/* <Box
        sx={{
          gridColumn: ['1 / -1', '1 / span 3'],

          padding: 2,
        }}
      >
        <Text sx={theme.text.default}>
          It wasn't until I stumbled upon Adobe Muse that I truly found my calling. Dabbling in interface design quickly
          became a hobby, and I found myself spending hours upon hours tinkering with different layouts and designs. And
          as I delved deeper into the world of design, I realized that I had a natural curiosity for the technical side
          of things. And so, I began teaching myself to code.
        </Text>
      </Box> */}

      {/* <Box
        sx={{
          gridColumn: ['1 / -1', '1 / span 3'],

          padding: 2,
        }}
      >
        <Text sx={theme.text.default}>
          At first, coding was just a way to bring my photography website designs to life. But as I continued to
          experiment and push myself, I found that coding was deeply gratifying in its own right. It allowed me to
          create something from scratch, to take an idea and turn it into a fully functional website. I loved the
          feeling of being able to see my vision come to life, and to know that I had the skills to make it happen.
        </Text>
      </Box> */}
    </Grid>

    {/* <Grid
      columns={['1fr', '1fr 2fr']} // One column on small screens, two columns on larger screens
      gap={4}
      sx={{
        padding: 4,
      }}
    >
      <Box sx={{ backgroundColor: 'white', padding: 3 }}>
        <h2>Column 1</h2>
        <p>This is the left column content.</p>
      </Box>
      <Box sx={{ backgroundColor: 'white', padding: 3 }}>
        <h2>Column 2</h2>
        <p>This is the right column content.</p>
      </Box>
    </Grid> */}
    {/* <Text sx={{ padding: 3, ...theme.text.paragraph }}><Link to="/">Go back </Link></Text> */}
  </Layout>
)

export const Head = () => <SEO title="Topics" />

export default Topics
