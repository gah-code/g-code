import React from 'react'
import setupTags from '../utils/setupTags'
import styled from 'styled-components'
import RecipeTemplate from '../pages/{ContentfulNote.title}'
import { Link } from 'gatsby'
import slugify from 'slugify'

const TagContainer = styled.div`
  padding: 20px;
  background: #f9f9f9;
`

const TagList = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2rem;
  max-width: 32rem;
`

const TagItem = styled(Link)`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: inset 0 0 0 2px #222;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  color: #06142e;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #e0e0e0; /* Optional hover effect */
  }
`

const HomeTagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)

  return (
    <TagContainer>
      <h4>Tags</h4>
      <TagList>
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })

          return (
            <TagItem to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </TagItem>
          )
        })}
      </TagList>
    </TagContainer>
  )
}

export default HomeTagsList
