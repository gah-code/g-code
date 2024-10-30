import * as React from 'react'
import Layout from '../components/layout'
import { Divider } from 'theme-ui'
import { About } from '../components/organisms/About'
import { Tech } from '../components/organisms/Tech'
import { ThemeUIProvider } from 'theme-ui' // Use `ThemeProvider` instead of `ThemeUIProvider`
// import theme from '../gatsby-plugin-theme-ui'

import Hero from '../components/organisms/Hero/Hero'
import SEO from '../components/seo'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import CardSlider from '../components/organisms/CardSlider/CardSlider'
import AllNotes from '../components/organisms/AllNotes/AllNotes'
// Define the props interface for the Section component
interface SectionProps {
  children: React.ReactNode
}

function Section({ children }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null)
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

const IndexPage: React.FC = () => {
  const pageTitle = 'Home Page'
  const pageDescription =
    'Welcome to my personal website, where I share my projects, skills, and blog posts on technology. Passionate about transforming ideas into reality through coding, thanks for stopping by!!'
  const pageUrl = '/'
  const pageKeywords = ['frontend Developer', 'portfolio', 'projects', 'blog', 'digital', 'web development', 'notes']

  return (
    <Layout>
      <SEO title={pageTitle} description={pageDescription} keywords={pageKeywords} pathname={pageUrl} />
      <Section>
        <Hero />
      </Section>
      <Section>
        <CardSlider />
      </Section>
      {/* <section>
        <AllNotes />
      </section> */}
      <Section>
        <Tech />
      </Section>
      <Divider />
      <About maxWidth="250px" alt="Gilberto Alejandro Hero, Web Developer" />
      <Divider />
      {/* <section>
        <AllNotes />
      </section> */}
      {/* <ToolList /> */}
    </Layout>
  )
}

export default IndexPage

