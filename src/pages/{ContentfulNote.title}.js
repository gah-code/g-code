import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Heading, Text, Button, Paragraph } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs'
import Layout from '../components/layout'
import StyledSection from '../styles/StyledSection'
// import theme from '../gatsby-plugin-theme-ui'

import slugify from 'slugify'
// import '../assets/css/main.css'

const NoteTemplate = ({ data }) => {
  const {
    title,
    content: { subheading, copy, tags, tools }, // Access `copy` from within `content`
    description: { description },
    image,
  } = data.contentfulNote
  const pathToImage = getImage(image)
  // const { tags } = content
  return (
    <Layout>
      <main className="page">
        <StyledSection maxWidth="100rem" padding="4rem 2rem" columnGap84="4rem" rowGap84="8rem">
          <div className="recipe-page">
            {/* hero */}
            <section className="post-hero">
              <GatsbyImage image={pathToImage} alt={title} className="" />
              <article className="recipe-info">
                <Heading
                  sx={{
                    mb: 4,
                    ...theme.styles.h2,
                  }}
                >
                  {title}
                </Heading>
                <Text sx={{ ...theme.text.paragraph }}>{description}</Text>
                <div className="recipe-icons">
                  <article>
                    {/* <BsClock /> */}
                    {/* <h5>prep time</h5>
                  <p>reading time</p> */}
                  </article>
                  <article>
                    {/* <BsClockHistory /> */}
                    {/* <h5>cook time</h5>
                  <p>time</p> */}
                  </article>
                  <article>
                    {/* <BsPeople /> */}
                    {/* <h5>serving</h5>
                  <p>tech</p> */}
                  </article>
                </div>
                {/* tags */}

                <Text
                  sx={{
                    mt: 1,

                    ...theme.text.heading,
                  }}
                >
                  Tags :
                  {tags.map((tag, index) => {
                    const slug = slugify(tag, { lower: true })
                    return (
                      <Button variant="secondary">
                        <Link to={`/notes/${slug}`} key={index}>
                          {tag}
                        </Link>
                      </Button>
                    )
                  })}
                </Text>
              </article>
            </section>
            {/* rest of the content */}
            <section className="recipe-content">
              <article>
                {/* <h4>instructions</h4> */}
                <Heading
                  sx={{
                    mb: 2,
                    ...theme.styles.h3,
                  }}
                >
                  {subheading}
                </Heading>
                <Text sx={{ mb: 1, ...theme.text.paragraph }}>{copy}</Text>

                {/* {instructions.map((item, index) => {
                return (
                  <div key={index} className='single-instruction'>
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>item</p>
                  </div>
                );
              })} */}
              </article>
              <article className="second-column">
                <div>
                  {/* <h4>----</h4> */}
                  {/* {ingredients.map((item, index) => {
                  return (
                    <p key={index} className='single-ingredient'>
                      {item}
                    </p>
                  );
                })} */}
                  <div>
                    <Heading
                      sx={{
                        mb: 2,
                        ...theme.styles.h4,
                      }}
                    >
                      Tools
                    </Heading>
                    {tools.map((item, index) => {
                      return (
                        <p key={index} className="single-tool">
                          {item}
                        </p>
                      )
                    })}
                  </div>
                </div>
                {/* <div>
                  <h4>tools</h4>
                  {tools.map((item, index) => {
                    return (
                      <p key={index} className="single-tool">
                        {item}
                      </p>
                    )
                  })}
                </div> */}
              </article>
            </section>
          </div>
        </StyledSection>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleNote($title: String) {
    contentfulNote(title: { eq: $title }) {
      title
      content {
        ingredients
        instructions
        subheading
        copy
        tools
        tags
      }
      description {
        description
      }

      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default NoteTemplate

