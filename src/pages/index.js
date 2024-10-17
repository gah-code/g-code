import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Text, Link, Divider } from 'theme-ui'
import { About } from '../components/organisms/About'
import { Tech } from '../components/organisms/Tech'
import Hero from '../components/organisms/Hero/Hero'
import SEO from '../components/seo'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import CardSlider from '../components/organisms/CardSlider/CardSlider'

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
  const pageTitle = 'Home Page'
  const pageDescription =
    'Welcome to my personal website, where I share my projects, skills, and blog posts on technology. Passionate about transforming ideas into reality through coding, thanks for stopping by!!'
  const pageUrl = '/'
  const pageKeywords = ['frontend Developer', 'portfolio', 'projects', 'blog', 'digital', 'web development', 'notes']

  return (
    <Layout>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        pathname={pageUrl}
        // Optionally, you can add an image for social sharing
        // image="https://mywebsite.com/images/homepage-preview.png"
      />
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
      <About maxWidth="250px" alt="Gilberto Alejandro Hero, Web Developer" />
      <Divider />
    </Layout>
  )
}

export default IndexPage

