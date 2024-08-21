import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { Text, Link, Divider } from 'theme-ui'
import About from '../components/About'
import Tech from '../components/Tech'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
// import HomeTagsList from '../components/HomeTagsList'
// import AllBlogs from '../components/AllBlogs'
// import Slider from '../components/temp/Slider'
// import CardSlider from '../components/CardSlider'
// import ComponentData from '../components/ComponentData'

function Section({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home Page" />
      <main className="page">
        <Section>
          <Hero />
        </Section>

        {/* <Section>
          <CardSlider />
        </Section> */}
        <Section>
          <Tech />
        </Section>
        <Divider />

        <About />
        <Divider />
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    hero: markdownRemark(frontmatter: { title: { eq: "Welcome to My Blog" } }) {
      frontmatter {
        greetings
        emoji
        title
        subtitlePrefix
        subtitleHighlight
      }
      rawMarkdownBody
    }
  }
`
