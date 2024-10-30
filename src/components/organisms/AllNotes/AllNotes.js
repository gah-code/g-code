import React from 'react'
import TagsListNote from '../../molecules/TagsListNote/TagsListNote'
import NotesList from '../../molecules/NotesList/NotesList'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import '../../../assets/css/main.css'
import PropTypes from 'prop-types'

const query = graphql`
  query {
    allContentfulNote(sort: { fields: title, order: ASC }) {
      nodes {
        featured
        id
        title
        content {
          tags
        }
        image {
          gatsbyImageData(width: 300, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`

const StyledSection = styled.section`
  max-width: 120rem;
  padding: 3.9rem 1.5rem;

  @media (max-width: 84em) {
    column-gap: 5rem;
    row-gap: 7rem;
  }

  @media (max-width: 75em) {
    column-gap: 2rem;
    row-gap: 6.9rem;
  }

  @media (max-width: 59em) {
    column-gap: 1rem;
    row-gap: 6rem;
  }

  @media (max-width: 34em) {
    padding: 3rem 0.8rem 2rem 0.8rem;
    row-gap: 5rem;
  }
`

const AllNotes = () => {
  const data = useStaticQuery(query)
  const notes = data.allContentfulNote.nodes
  return (
    <StyledSection>
      <section className="blog-container">
        <TagsListNote notes={notes} />
        {/* <NotesList notes={notes} /> */}
      </section>
    </StyledSection>
  )
}

AllNotes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      featured: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.shape({
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
      image: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired,
      }).isRequired,
    })
  ),
}
export default AllNotes

