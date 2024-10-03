import React, { useState } from 'react'
import styled from 'styled-components'
import NotesList from './NotesList'
import { graphql, useStaticQuery } from 'gatsby'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import slugify from 'slugify'

const query = graphql`
  query {
    allContentfulNote {
      nodes {
        description {
          description
        }
        featured
        id
        title
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const StyledSection = styled(motion.section)`
  width: 100%;
  height: auto;
`

const StyledContentWrapper = styled.div`
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  .section-title {
    font-size: 1.2rem;
    margin: 3rem 0 2rem 2.5rem;
  }

  /* .highlighted {
    box-shadow: inset 0 -1.5rem 4.5rem #61ad;
  } */
`

const ArticlesWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 0 1rem;
  margin: -2rem 0 0 0;
  scrollbar-width: none; /* For Firefox */
  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari */
  }
`

const Card = styled.div`
  width: 16.45rem;
  height: 12.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin: 2rem 1rem;
  background-color: #314237;
  border-radius: 20px;
  flex-shrink: 0; /* Prevent shrinking */
  transition: box-shadow 0.3s ease-out;

  .category {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 0.7rem;
    color: #fff;
    margin-bottom: 0.2rem;
  }
  .title {
    margin-top: 0.08rem;
    color: #fff;
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.3;
  }
  .date {
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    color: #fff;
  }

  .tags {
    /* font-size: 0.7rem; */
    font-size: 0.75rem;
    padding-top: 0.5rem;
    color: beige;
    word-spacing: 3px;
  }
`

const CardSlider = () => {
  const data = useStaticQuery(query)
  const notes = data.allContentfulNote.nodes

  return (
    <StyledSection initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <StyledContentWrapper>
        <h3 className="section-title">
          {' '}
          <span className="highlighted">NOTES</span>
        </h3>
        <ArticlesWrapper>
          {notes.map((note) => {
            const { id, title, content, description } = note
            const slug = slugify(title, { lower: true })
            const firstTag = content.tags?.[0] || 'No Tag' // Get the first tag or default to 'No Tag'

            return (
              <Link key={id} to={`/${slug}`} style={{ textDecoration: 'none' }}>
                <Card>
                  {/* You can include the image if desired */}
                  {/* <GatsbyImage
                    image={pathToImage}
                    alt={title}
                    style={{ borderRadius: '20px', height: '8rem', marginBottom: '0.5rem' }}
                  /> */}
                  {/* <p>{description.description}</p> */}
                  <span className="category">{firstTag}</span>
                  <h4 className="title">{title}</h4>
                  {/* <span className="category">what it means</span> */}
                </Card>
              </Link>
            )
          })}
        </ArticlesWrapper>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default CardSlider

// {/* <ArticlesWrapper>
//   {blogs.map((blog) => {
//     const { id, title, image, description, content } = blog;
//     {
//       /* const pathToImage = getImage(image); */
//     }
//     const slug = slugify(title, { lower: true });

//     return (
//       <Link key={id} to={`/${slug}`} style={{ textDecoration: 'none' }}>
//         <Card>
//           {pathToImage &&
//           <GatsbyImage
//                       image={pathToImage}
//                       alt={title}
//                       style={{
//                         borderRadius: '20px',
//                         height: '8rem',
//                         marginBottom: '0.5rem',
//                       }}
//                     />
//           <span className='category'>category</span>
//           <h4 className='title'>{title}</h4>
//           <p className='date'>
//                     date
//                     {description?.description || 'No description'}
//                   </p>
//           <span className='tags'>{content.tags}</span>
//         </Card>
//       </Link>
//     );
//   })}
// </ArticlesWrapper>; */}

