// /** @jsxImportSource theme-ui */
import React from 'react'
import { Link } from 'gatsby'
import { Heading, Text, Button, Box, Grid } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponsiveSection from '../styles/ResponsiveSection'

const movies = ['Whiplash', 'Kill Bill Vol 2', 'King Kong', 'Kung Fu Hustle', '1917', '2001: A Space Odyssey']
const shows = ['Breaking Bad', 'Mr. Robot', 'Everybody Hates Chris']
const books = ['Breaking Through', 'Death of a Salesman', 'The Great Gatsby', 'Ultimate Power']

const About = () => (
  <Layout>
    <ResponsiveSection
      maxWidth="80rem"
      padding="3rem 2rem"
      columnGap84="6rem"
      rowGap84="8rem"
      columnGap75="2rem"
      rowGap75="6.9rem"
      columnGap59="1rem"
      rowGap59="6rem"
      paddingSmall="2rem 1.5rem 2rem 1.5rem"
      rowGap34="5rem"
    >
      <SEO
        title="About"
        description="Discover more about my background in web development, design, and creativity. Learn about what movies, shows, and books that inspire me."
        keywords={['About', 'Web Development', 'Movies', 'Books', 'Shows', 'Design', 'Digital Art']}
        article={false}
        pathname="/about"
      />
      <Box>
        <Heading as="h2" sx={{ variant: 'styles.h2', color: 'primary', mb: 3 }}>
          A little about me
        </Heading>
        <Text sx={{ ...theme.text.paragraph, mb: 4 }}>
          Reflecting on my childhood, I can see the sparks of my current career taking root. I spent hours doodling in
          my notebooks, crafting makeshift comic books, and experimenting with different fonts—all in a quest to unleash
          my creativity. My fascination with digital expression blossomed during the MySpace era, eventually leading me
          to professional photography. But deep down, I craved a vibrant platform to showcase my work. Thats when I
          stumbled into the exciting realm of web development. This was the game-changer! It provided a stage for my
          photography and opened up a treasure trove of opportunities. I landed gigs that allowed me to combine all my
          passions and skills. Now, as a Web Developer, I can blend my love for design patterns, color, digital
          artistry, branding, and color into unique and impactful digital experiences.
        </Text>
      </Box>

      {/* Movies, Shows, and Books Section */}
      {/* <Grid columns={[1, 1, 3, 3]} gap={4} sx={{ maxWidth: '85rem', margin: '0 auto', padding: '2rem 0.1rem' }}>
        {[
          { title: 'Movies', items: movies },
          { title: 'Shows', items: shows },
          { title: 'Books', items: books },
        ].map((category, index) => (
          <Box
            key={index}
            sx={{
              padding: 3,
              borderRadius: '8px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
              backgroundColor: 'background',
              color: 'text',
              '&:hover': {
                backgroundColor: 'highlight',
              },
            }}
          >
            <Heading as="h3" sx={{ variant: 'styles.h3', mb: 3 }}>
              {category.title}
            </Heading>
            <Box as="ul" sx={{ listStyleType: 'disc', paddingLeft: 4, margin: 0 }}>
              {category.items.map((item, idx) => (
                <Text
                  as="li"
                  key={idx}
                  sx={{
                    variant: 'text.default',
                    mb: 2,
                    lineHeight: 'body',
                    color: 'textDark',
                    fontSize: [2, 3],
                  }}
                >
                  {item}
                </Text>
              ))}
            </Box>
          </Box>
        ))}
      </Grid> */}

      {/* Update Section */}
      <UpdateSection />
    </ResponsiveSection>
  </Layout>
)

const UpdateSection = () => {
  return (
    <Box>
      <Heading as="h3" sx={{ variant: 'styles.h3', color: 'primary', mb: 3, mt: 4 }}>
        Update: 9/1/24
      </Heading>
      <Text sx={{ variant: 'text.paragraph' }}>
        These last few months, I've let my inner DJ take control, working as a web developer at Robert Half, learning
        how a team progressively scales a CMS globally, and digging into a mix of web application technologies after
        hours. I am exploring different design systems that pique my interest, putting my love for elegant composition
        and expressive patterns at the forefront.
      </Text>
      <Text sx={{ padding: 2, variant: 'text.paragraph' }}>
        <Link to="/" sx={{ variant: 'links.bold' }}>
          Back
        </Link>
      </Text>
    </Box>
  )
}

export default About

