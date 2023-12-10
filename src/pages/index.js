import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/segments/about"
import Background from "../components/segments/background"
import { Divider } from "theme-ui"
// import Slider from "../components/slider"
// import theme from "../gatsby-plugin-theme-ui"

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
      <Divider />
      <About content={aboutContent} />
      <Background content={backgroundContent} />
      {/* <div className="container">
        <Heading
          sx={{
            variant: "text.caps",
            textAlign: "center",

            ...theme.styles.h3,
          }}
        >
          What I've been up to 2023
        </Heading>

        <Paragraph
          variant="block"
          sx={{
            textAlign: "center",
            px: 0,
            py: 2,
            mb: 6,
            mt: 1,

            ...theme.text.paragraph,
          }}
        >
          Right now, I'm rocking the role of a web developer on the marketing
          team at Robert Half. On the side, I dabble in weekend photography gigs
          as a freelancer. In those in-between moments, I dive headfirst into
          the ever-evolving world of front-end technology. You can catch me
          staying active, building my own projects, and leveling up with courses
          in React, CSS, and even some hack the box (CTF and Pen test tooling)
          challenges. Always keeping it exciting!
        </Paragraph>
      </div> */}

      {/* <Slider /> */}
      {/* <Update content={updateContent} /> */}
      {/* <p>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p> */}
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
