import React from 'react'
import styled from 'styled-components'

const Photo = styled.img`
  max-width: ${(p) => p.maxWidth};
  border-radius: 10px;
`

const AboutPhoto = ({ src, alt, maxWidth }) => <Photo src={src} alt={alt} maxWidth={maxWidth} />

export default AboutPhoto

