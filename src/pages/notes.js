import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
// import setupTags from '../utils/setupBlogTags';
import setupNoteTags from '../utils/setupNoteTags'
import slugify from 'slugify'
import '../assets/css/main.css'

const Notes = ({ data }) => {
  const newNoteTags = setupNoteTags(data.allContentfulNote.nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newNoteTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/noteTags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
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

