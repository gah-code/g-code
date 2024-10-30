import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { Grid, Heading, Text, Box } from 'theme-ui'
import SEO from '../components/seo'

const topics = [
  {
    title: 'Component-Based Architecture',
    description: 'Learn how to build reusable and self-contained components.',
    // path: '/topics/component-based-architecture',
  },
  {
    title: 'Atomic Design Principles',
    description: 'Organize your codebase using atomic design methodology.',
    // path: '/topics/atomic-design',
  },
  {
    title: 'Storybook for Documentation',
    description: 'Use Storybook to document and test your components.',
    // path: '/topics/storybook',
  },
  {
    title: 'Styled Components and Theming',
    description: 'Explore using styled-components and Theme UI for styling.',
    // path: '/topics/styling-theming',
  },
  {
    title: 'Error Debugging and Handling',
    description: 'Techniques for debugging common errors in React applications.',
    // path: '/topics/debugging',
  },
  {
    title: 'Organizing Code for Scalability',
    description: 'Best practices for structuring code to support future growth.',
    // path: '/topics/code-organization',
  },
]

const Topics = () => (
  <Layout>
    <Box
      sx={{
        maxWidth: '85rem',
        margin: '0 auto',
        padding: '4rem 2rem',
      }}
    >
      <Heading as="h1" sx={{ fontSize: [5, 6], mb: 3 }}>
        Topics
      </Heading>
      <Text sx={{ fontSize: 3, mb: 3 }}>
        This section is all about the key concepts in front-end development I've been digging into this year. Learn
        about component-based architecture, atomic design principles, and more. Feel free to explore the topics below to
        discover the best practices and techniques for modern web development.
      </Text>
      <Text sx={{ fontSize: 3, mb: 5 }}>
        Each topic provides detailed explanations and examples to help me improve development skills and build scalable,
        maintainable applications.
      </Text>
      <Heading as="h2" sx={{ fontSize: 4, mb: 4, mt: 5 }}>
        Topics Overview
      </Heading>
      <Grid
        columns={[1, 1, 2, 3]}
        gap={4}
        sx={{
          marginBottom: '2rem',
        }}
      >
        {topics.map((topic) => (
          <Box
            key={topic.title}
            sx={{
              padding: 3,
              borderRadius: '8px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
              transition: 'transform 0.3s',
              ':hover': {
                transform: 'translateY(-5px)',
              },
            }}
          >
            <Heading as="h3" sx={{ fontSize: 3, marginBottom: 2 }}>
              <Link to={topic.path} sx={{ textDecoration: 'none', color: 'text' }}>
                {topic.title}
              </Link>
            </Heading>
            <Text sx={{ marginBottom: 3 }}>{topic.description}</Text>
            {/* <Link to={topic.path} sx={{ variant: 'buttons.secondary' }}>
              Read More
            </Link> */}
          </Box>
        ))}
      </Grid>
    </Box>
  </Layout>
)

// SEO component for better search engine visibility
export const Head = () => (
  <SEO
    title="Topics | Explore Concepts I'm Learning"
    description="Discover the various topics I'm currently diving into, including constraint-based design, component-driven development, and everything about React Hooks."
    keywords={['Topics', 'Web Development', 'Component-Based Architecture', 'Atomic Design', 'Storybook', 'React']}
    pathname="/topics"
  />
)

export default Topics
