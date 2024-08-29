import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Text, Link, Divider } from 'theme-ui'
import About from '../components/segments/about'
import Tech from '../components/segments/tech'
import Hero from '../components/hero'
import SEO from '../components/seo'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
// import AllNotes from '../components/AllNotes'
// import HomeTagsList from '../components/HomeTagsList'
// import AllBlogs from '../components/AllBlogs'
import CardSlider from '../components/CardSlider'

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
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home Page" />
      <Section>
        <Hero />
      </Section>
      <Section>
        <CardSlider />
      </Section>
      {/* <AllNotes /> */}
      <Section>
        <Tech />
      </Section>
      <Divider />
      <About maxWidth="250px" />
      <Divider />
    </Layout>
  )
}

export default IndexPage

