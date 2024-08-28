import React from 'react'
import { graphql } from 'gatsby'
// import RecipesList from '../components/RecipesList';
import NotesList from '../components/NotesList'
import Layout from '../components/layout'

const NoteTagTemplate = ({ data, pageContext }) => {
  const notes = data.allContentfulNote.nodes
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          {/* <RecipesList recipes={recipes} /> */}
          <NotesList notes={notes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetNotesByTag($tag: String) {
    allContentfulNote(sort: { fields: title, order: ASC }, filter: { content: { tags: { eq: $tag } } }) {
      nodes {
        title
        id

        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default NoteTagTemplate

