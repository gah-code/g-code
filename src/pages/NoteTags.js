import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import setupNoteTags from '../utils/setupNoteTags'
import slugify from 'slugify'

const NoteTags = ({ data }) => {
  const newNoteTags = setupNoteTags(data.allContentfulNote.nodes)
  return (
    <Layout>
      <main className="page">
        <h1>Note Tags</h1>
        <section className="tags-page">
          {newNoteTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/noteTags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>
                  {value} note{value > 1 ? 's' : ''}
                </p>
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

export default NoteTags

