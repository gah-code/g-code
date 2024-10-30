import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'
import '../../../assets/css/main.css'
import PropTypes from 'prop-types'

const NotesList = ({ notes = [] }) => {
  return (
    <div className="recipes-list">
      {notes.map((note) => {
        const { id, title, image } = note
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage image={pathToImage} className="recipe-img" alt={title} />
            <h4>{title}</h4>
            <p>
              {/* <p>{description ? documentToReactComponents(description.json) : null}</p> */}
              {/* <p>{description}</p> */}
              {/* Prep : {prepTime}min | Cook : {cookTime}min */}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired,
      }).isRequired,
    })
  ),
}

export default NotesList

