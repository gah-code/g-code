import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Heading, Text, Button } from 'theme-ui'
import styled from 'styled-components'
import '../assets/css/main.css'
import theme from '../gatsby-plugin-theme-ui'
// import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs'
import Layout from '../components/layout'
import StyledSection from '../styles/StyledSection'
import slugify from 'slugify'
import SEO from '../components/seo'
// import ToolList from '../components/ui/ToolList'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2a3439;
  font-weight: bold;
  padding: 1.5rem 0;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    color: #c4e4;
  }

  &:active {
    background-color: #c4e4ff;
  }
`

const NoteTemplate = ({ data }) => {
  const {
    title,

    content: { subheading, copy, tags, tools, link, ingredients },
    description: { description },
    image,
  } = data.contentfulNote

  const pathToImage = getImage(image)
  // const { tags } = content
  return (
    <Layout>
      <main className="page">
        <StyledSection maxWidth="60rem" padding="4rem 2rem" columnGap84="4rem" rowGap84="8rem">
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
                <Text sx={{ mb: 3, ...theme.text.paragraph }}>{copy}</Text>

                {/* <a>{link}</a> */}

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
                  <h4>Concepts</h4>
                  {ingredients.map((item, index) => {
                    return (
                      <p key={index} className="single-ingredient">
                        {item}
                      </p>
                    )
                  })}
                </div>
                <div>
                  <h4>🛠 Tools</h4>
                  {tools.map((item, index) => {
                    return (
                      <p key={index} className="single-tool">
                        {item}
                      </p>
                    )
                  })}
                </div>

                {/* <SkillList className="single-tool" items={tools} /> */}
                {/* <ToolBlock className="data">
                      <ToolList tools={tools} />
                    </ToolBlock> */}
                {/* </ToolColumn> */}
              </article>
            </section>
          </div>
        </StyledSection>
      </main>
    </Layout>
  )
}

const ToolBlock = styled.div`
  padding: 32px 0;
  padding-top: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  transition: 0.5s;
  margin: 1rem 0;
`

const ToolColumn = styled.div`
  .single-tool {
    border-bottom: 1px solid #444;
    /* text-decoration: underline; */
    /* padding: 0.55rem 0; */
    text-transform: capitalize;
  }
`

// SEO Component
export const Head = ({ data }) => {
  const {
    seoTitle,
    seoDescription: { seoDescription },
  } = data.contentfulNote

  return (
    <SEO
      title={seoTitle}
      description={seoDescription || 'Explore this note for more insights and learnings.'} // Fallback description
    />
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
        link
        tags
      }
      description {
        description
      }
      seoTitle
      seoDescription {
        seoDescription
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default NoteTemplate

