import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/segments/about'
import theme from '../gatsby-plugin-theme-ui/index'
import Background from '../components/segments/background'
import Seo from '../components/seo'
import StyledSection from '../components/segments/about'
// import Slider from '../components/slider'

import { Divider, Heading, sx, Container, Paragraph } from 'theme-ui'

const PageLinks = [
  {
    text: 'Comming Soon',
    url: '',
    badge: false,
    description: 'Hello from the blog page',
  },
  // {
  //   text: 'Home',
  //   url: 'page-2',
  //   badge: false,
  //   description: 'A simple example of linking to another page within a Gatsby site',
  // },
  // { text: "TypeScript", url: "using-typescript" },
  // { text: "Server Side Rendering", url: "using-ssr" },
  // { text: "Deferred Static Generation", url: "using-dsg" },
]

// import { motion } from "framer-motion"

const IndexPage = ({ data }) => {
  const findContentById = (data, id, category) => {
    return data[category].edges.find((edge) => edge.node.frontmatter.id === id)?.node
  }

  const heroContent = findContentById(data, 0, 'hero')
  const aboutContent = findContentById(data, 1, 'about')
  const updateContent = findContentById(data, 2, 'update')
  const backgroundContent = findContentById(data, 3, 'background')
  const aboutRawMarkdownBody = aboutContent.rawMarkdownBody

  return (
    <Layout>
      <Seo
        title="Home"
        description="This is the homepage for a my website, I'm Front End Developer located in San Jose Ca Bay Area, passionate about transforming ideas into reality through coding, thanks for stopping by!"
      />
      <Hero content={heroContent} />
      <Divider />
      <About content={aboutContent} alt="Gilberto A. Haro web developer and photographer" maxWidth="250px" />
      {/* <h3>Topics I'm In To</h3> */}
      {/* <Heading
        sx={{
          variant: 'text.caps',
          textAlign: 'center',

          ...theme.styles.h3,
        }}
      >
        What I've been up to 2023
      </Heading> */}
      {/* <Slider /> */}

      <Background content={backgroundContent} />
      <Divider />
      {/* <div className="container">
        <Heading
          sx={{
            variant: 'text.caps',
            textAlign: 'center',

            ...theme.styles.h3,
          }}
        >
          What I've been up to 2023
        </Heading>

        <Paragraph
          variant="block"
          sx={{
            textAlign: 'center',
            px: 0,
            py: 2,
            mb: 6,
            mt: 1,

            ...theme.text.paragraph,
          }}
        >
          Right now, I'm rocking the role of a web developer on the marketing team at Robert Half. On the side, I dabble
          in weekend photography gigs as a freelancer. In those in-between moments, I dive headfirst into the
          ever-evolving world of front-end technology. You can catch me staying active, building my own projects, and
          leveling up with courses in React, CSS, and even some hack the box (CTF and Pen test tooling) challenges.
          Always keeping it exciting!
        </Paragraph>
      </div> */}

      {/* <Update content={updateContent} /> */}

      <Container sx={{ padding: 3 }}>
        <b>Read More:</b>{' '}
        {PageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== PageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        {/* Edit <code>src/pages/index.js</code> to update this page. */}
      </Container>
    </Layout>
  )
}

export default IndexPage
export const Head = () => (
  <Seo
    title="Home"
    description="This is the homepage for a my website, I'm Front End Developer located in San Jose Ca Bay Area, passionate about transforming ideas into reality through coding, thanks for stopping by!"
  />
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        logo
        siteUrl
      }
    }
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
            id
          }
          rawMarkdownBody
        }
      }
    }
    about: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
            update
            life
            id
          }
          rawMarkdownBody
        }
      }
    }
    update: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
            list
            id
          }
          rawMarkdownBody
        }
      }
    }
    background: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            subtitle
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
            update
            text
            id
          }
          rawMarkdownBody
        }
      }
    }
  }
`

// const heroContent = data.hero.edges[0].node
// const aboutContent = data.about.edges[1].node
// const heroContent = data.hero.edges.find(
//   edge => edge.node.frontmatter.id === 0
// ).node

// const aboutContent = data.about.edges.find(
//   edge => edge.node.frontmatter.id === 1
// ).node
// const updateContent = data.update.edges.find(
//   edge => edge.node.frontmatter.id === 2
// ).node
// const backgroundContent = data.background.edges.find(
//   edge => edge.node.frontmatter.id === 3
// ).node

