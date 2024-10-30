import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
// import setupTags from '../utils/setupBlogTags';
import StyledSection from '../styles/StyledSection'
import setupNoteTags from '../utils/setupNoteTags'
import slugify from 'slugify'
import '../assets/css/main.css'

const Notes = ({ data }) => {
  const newNoteTags = setupNoteTags(data.allContentfulNote.nodes)
  return (
    <Layout>
      <StyledSection>
        <main className="page">
          <section className="tags-page">
            {newNoteTags.map((tag, index) => {
              const [text, value] = tag
              const slug = slugify(text, { lower: true })
              return (
                <Link to={`/notes/${slug}`} key={index} className="tag">
                  <h5>{text}</h5>
                  <p>{value} notes</p>
                </Link>
              )
            })}
          </section>
        </main>
      </StyledSection>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulNote {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Notes

