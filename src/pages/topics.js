import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { Grid, Heading, Text, Box } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'
import SEO from '../components/SEO'
import NodeGraph from '../components/NodeGraph'

const Topics = () => (
  <Layout>
    <Heading
      as="h2"
      sx={{
        fontSize: [5, 5],
        color: 'primary',
        fontFamily: 'heading',
        mb: 4,
        mt: 1,
        padding: 5,
      }}
    >
      ...{' '}
    </Heading>
    <NodeGraph />

    <Grid
      columns={['1fr', '1fr 2fr 1fr']} // One column on small screens, three columns on larger screens
      gap={[4, 4]} // Adjust spacing for better readability on small screens
      sx={{
        padding: [3, 2], // Larger padding on small screens
      }}
    >
      <Box
        sx={{
          gridColumn: ['1 / -1', '1 / span 3'],
          padding: 3,
        }}
      >
        <article
          sx={{
            maxWidth: '800px',
            margin: 'auto',
            padding: 3,
            strong: {
              fontWeight: 'bold',
            },
            a: {
              color: 'primary',
              textDecoration: 'underline',
              ':hover': {
                color: 'secondary',
              },
            },
          }}
        >
          {/* <Heading
            as="h2"
            sx={{
              fontSize: [5, 5],
              color: 'primary',
              fontFamily: 'heading',
              mb: 4,
              mt: 1,
            }}
          >
            What I've been digging into
          </Heading> */}

          {/* <Text sx={{ marginBottom: '3rem', ...theme.text.paragraph }}>
            Working on it
            <strong> ! </strong>.
          </Text> */}
          <br />

          <hr />

          {/* <Box
            as="ul"
            sx={{
              listStyleType: 'disc',
              marginLeft: '1.5rem',
              marginTop: '2rem',
              paddingLeft: '1rem',
              color: 'text',
              fontSize: '1.1rem',
              lineHeight: '1.75',
            }}
          >
            <Box
              as="li"
              sx={{
                marginBottom: '0.50rem',
                paddingLeft: '0.1rem',
                transition: 'color 0.3s',
                ':hover': {
                  color: 'primary',
                },
              }}
            >
              Constraint-based design principles
            </Box>
            <Box
              as="li"
              sx={{
                marginBottom: '0.50rem',
                paddingLeft: '0.1rem',
                transition: 'color 0.3s',
                ':hover': {
                  color: 'primary',
                },
              }}
            >
              Component-Driven Development (CDD)
            </Box>
            <Box
              as="li"
              sx={{
                marginBottom: '0.80rem',
                paddingLeft: '0.1rem',
                transition: 'color 0.3s',
                ':hover': {
                  color: 'primary',
                },
              }}
            >
              Everything React Hooks{' '}
            </Box>
          </Box> */}

          {/* <Box
            as="blockquote"
            sx={{
              fontSize: '1rem',
              borderLeftWidth: '5px',
              borderLeftStyle: 'solid',
              borderLeftColor: 'highlight',
              backgroundColor: 'primary',
              padding: '1rem',
              marginY: '3rem',
              marginX: '0.5rem',
              marginTop: '3rem',
              borderRadius: '8px',
              fontStyle: 'italic',
              color: 'textLight',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s',
              ':hover': {
                backgroundColor: 'primary',
                color: 'textLight',
              },
            }}
          >
            Real education is about genuine understanding and the ability to figure things out on your own; not about
            making sure every 7th grader has memorized all the facts some bureaucrats have put in the 7th grade
            curriculum. Be curious. Read widely. Try new things.
          </Box> */}
        </article>
      </Box>
    </Grid>
  </Layout>
)

// SEO component for better search engine visibility
export const Head = () => (
  <SEO
    title="Topics - Explore Concepts I'm Learning"
    description="Discover the various topics I'm currently diving into, including constraint-based design, component-driven development, and everything about React Hooks."
  />
)

export default Topics
