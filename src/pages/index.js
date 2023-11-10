import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Update from "../components/segments/update"
import Background from "../components/segments/background"
import Slider from "../components/slider"
import { Grid, Heading, sx, Text } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import Card from "../components/card"
import { Box } from "theme-ui"
import styled from "styled-components"
import { Paragraph } from "theme-ui"
import { Container } from "theme-ui"

const samplePageLinks = [
  {
    text: "About",
    url: "about-page",
    badge: false,
    description: "Hello from the about page",
  },
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  // { text: "TypeScript", url: "using-typescript" },
  // { text: "Server Side Rendering", url: "using-ssr" },
  // { text: "Deferred Static Generation", url: "using-dsg" },
]

// import { motion } from "framer-motion"

const IndexPage = ({ data }) => {
  const findContentById = (data, id, category) => {
    return data[category].edges.find(edge => edge.node.frontmatter.id === id)
      ?.node
  }

  const heroContent = findContentById(data, 0, "hero")
  const aboutContent = findContentById(data, 1, "about")
  const updateContent = findContentById(data, 2, "update")
  const backgroundContent = findContentById(data, 3, "background")

  const aboutRawMarkdownBody = aboutContent.rawMarkdownBody

  return (
    <Layout>
      <Hero content={heroContent} />
      <About content={aboutContent} />
      <Background content={backgroundContent} />
      <Container
        sx={{
          maxWidth: 512,
          mx: "auto",
          px: 0,
          py: 6,
          textAlign: "center",
          backgroundColor: "tomato",
        }}
      >
        <Heading
          sx={{
            ...theme.styles.h3,
          }}
        >
          What I've been up to 2023
        </Heading>
        <Paragraph
          variant="block"
          sx={{
            ...theme.text.paragraph,
          }}
        >
          I'm currently a full-time web development at Robert Half, while
          occasionally immersing myself in weekend wedding photography gigs. In
          the spaces between, I eagerly delve into the ever-evolving world of
          front-end technology and stay active building my own projects
        </Paragraph>
      </Container>
      <Slider />
      {/* <Update content={updateContent} /> */}
      <p>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        {/* Edit <code>src/pages/index.js</code> to update this page. */}
      </p>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query {
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
